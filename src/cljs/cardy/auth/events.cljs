(ns cardy.auth.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :as core-events]
            [ajax.core :as ajax]))


(trace-forms {:tracer (tracer :color "blue")}



; utility event to set
; (re-frame/reg-event-db
;   ::set-email
;   (fn set-email [db [event-id-to-ignore email]]
;     (assoc db :email email)))

; utility

;;; LOGIN
(re-frame/reg-event-fx
  ::login
  (fn login [cofx [event-id-to-ignore username email password]]
    (merge
      {:db (assoc (:db cofx) :email email)}
      (core-events/post-request
        "/login" ;; uri
        {:username username :email email :password password} ;; params
        #(re-frame/dispatch [::attempt-login %]))))) ;; handler


(defn login-attempt-failed [db]
  (assoc db :login-attempt-failed? true))

(defn attempt-login [db login-attempt]
  (case login-attempt
    "succeeded" ; so pull decks then bring user to Home
      {:dispatch [::core-events/pull-decks]
       :db (core-events/change-panel
            (assoc db :logged-in true)
            :home)}
    "failed" ; so DO NOT pull decks
      {:db (assoc db :login-attempt-failed? true)}
    ))


(re-frame/reg-event-fx
  ::attempt-login
  (fn attempt-login-handler [cofx [event-id-to-ignore login-attempt]]
    (attempt-login (:db cofx) login-attempt)))



;; REGISTER

; (re-frame/reg-event-fx
;   ::register
;   (fn register-handler [cofx [event-id-to-ignore username email password]]
;     (core-events/post-request
;       "/register-creds"
;       {:username username :email email :password password}
;       #(re-frame/dispatch [::attempt-registration %])))
;   )
(re-frame/reg-event-fx
  ::register
  (fn register-handler [cofx [event-id-to-ignore username email password]]
    (merge
      {:db (assoc (:db cofx) :email email)}
      (core-events/post-request
          "/register-creds"
          {:username username :email email :password password}
          #(re-frame/dispatch [::attempt-registration %])))))




(defn registration-failure-reason [db reason]
  ; (assoc db :registration-failure-reason reason)
  {:db (assoc db :registration-failure-reason reason)})



(defn attempt-registration [cofx [event-id-to-ignore registration-attempt]]
  (let [db (:db cofx)]
    (case registration-attempt
      "registered"
        {:db (core-events/change-panel
                (assoc db :logged-in true)
                :home)
         :dispatch [::core-events/pull-decks]}
      "invalid email format"
        (registration-failure-reason db registration-attempt)
      "email already in use"
        (registration-failure-reason db registration-attempt)
      "invalid password format"
        (registration-failure-reason db registration-attempt)
      (registration-failure-reason db "An unknown error happened while registering. Reach out to Cardy at cardytheapp@gmail.com"))))

(re-frame/reg-event-fx
  ::attempt-registration
  attempt-registration)

; (re-frame/reg-event-db
;   ::attempt-registration
;   attempt-registration)



;;; PASSWORD RESET

; (re-frame/reg-event-fx
;   ::verify-user-exists
;   (fn verify-user-exists [cofx [event-id-to-ignore email]]
;     ; add email to db as :current-email so you can access it later
;     {:db (assoc (:db cofx) :current-email email)
;      :verify-user-exists-fx email}))


(re-frame/reg-event-fx
  ::verify-user-exists
  (fn verify-user-exists [cofx [event-id-to-ignore email]]
    (merge
      {:db (assoc (:db cofx) :email email)}
      (core-events/post-request
        "/verify-user-exists"
        {:email email}
        #(re-frame/dispatch [::possibly-move-to-code-confirmation-stage %])))))


(re-frame/reg-event-fx
  ::possibly-move-to-code-confirmation-stage
  (fn possibly-move-to-code-confirmation-stage [cofx [event-id-to-ignore response]]
    (let [db (:db cofx)]
      (if (= response "failed")
          {:db (assoc db :pw-reset-email-sending-failed? true)}
          {:db (assoc db :pw-reset-flow-stage :confirming-pw-reset-code)
           :dispatch [::send-pw-reset-email]}))))



(re-frame/reg-event-fx
  ::send-pw-reset-email
  (fn send-pw-reset-email [cofx [event-id-to-ignore email]]
    ; we will have stored user's email in :current-email in the
    ; verify-user-exists event-handler
    (core-events/post-request
      "/send-pw-reset-email"
      {:email (:email (:db cofx))}
      #(js/console.log "response from send-pw-reset-email request was: " %))))




; not used anymore?
; (re-frame/reg-event-db
;   ::notify-user-of-pw-reset-email
;   (fn notify-user-of-pw-reset-email [db]
;     (assoc db :pw-reset-message "Password reset email sent!")))




;; VERIFYING RESET CODE

(re-frame/reg-event-fx
  ::verify-pw-reset-code
  (fn verify-pw-reset-code [cofx [event-id-to-ignore email code]]
    (core-events/post-request
      "/verify-pw-reset-code"
      {:email email :code code}
      #(re-frame/dispatch [::notify-user-of-reset-code-verification %]))))


; if we've verified code, then we can go to next reset-stage
; (re-frame/reg-event-db
;   ::move-to-pw-reset-stage
;   (fn move-to-pw-reset-stage [db]
;     (assoc db :pw-reset-flow-stage :setting-new-pw)))

; (defn move-to-pw-reset-stage [db]
;   (assoc db :pw-reset-flow-stage :setting-new-pw))


(re-frame/reg-event-db
  ::notify-user-of-reset-code-verification
  (fn notify-user-of-reset-code-verification [db [event-id-to-ignore server-response]]
    (if (= server-response "failed")
        (assoc db :code-verification-failed? true)
        ; ^^^ if codes did not match, then do not move to next stage

        ; (assoc db :code-verified? "Codes matched! Now let's reset your password!")
        ; (move-to-pw-reset-stage db)
        ;; move to stage where user can set new password
        (assoc db :pw-reset-flow-stage :setting-new-pw)
        ; ^^^ if codes DID match, then move to next stage
        )))



;; updating a user's password

(re-frame/reg-event-fx
  ::set-new-pw
  ; hardcoding email for now
  (fn set-new-pw [cofx [event-id-to-ignore new-pw]]
    (core-events/post-request
      "/set-new-pw-ajax"
      ;   ; hardcoding email for now -- FIX THIS!
      ; {:email "cjc500@nyu.edu" :new-pw new-pw}
      {:email (:email (:db cofx)) :new-pw new-pw}
      #(re-frame/dispatch [::login-or-show-new-pw-error %]))))


(re-frame/reg-event-fx
  ::login-or-show-new-pw-error
  (fn login-or-show-new-pw-error [db [event-id-to-ignore server-response]]
    (let [db (:db cofx)]
      (if (= server-response "succeeded")
          {:db (assoc
                  (assoc db :logged-in true)
                  :current-panel
                  :home)
           :dispatch [::core-events/pull-decks]}
          (assoc db :new-pw-not-set? true)))))

; (re-frame/reg-event-db
;   ::login-or-show-new-pw-error
;   (fn login-or-show-new-pw-error [db [event-id-to-ignore server-response]]
;     (if (= server-response "succeeded")
;         (assoc
;           (assoc db :logged-in true)
;           :current-panel
;           :home)
;         (assoc db :new-pw-not-set? true))))


(re-frame/reg-event-db
  ::update-pw-reset-flow-stage
  (fn update-pw-reset-flow-stage [db [event-id-to-ignore new-stage]]
    (assoc db :pw-reset-flow-stage new-stage)))


) ;; end of tracer form
