(ns cardy.auth.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [
                change-panel
                ]]
            ))

(trace-forms {:tracer (tracer :color "blue")}



;;; LOGIN


(re-frame/reg-event-fx
  ::login
  (fn login [cofx [event-id-to-ignore username email password]]
    {:login-fx {:username username
                :email email
                :password password}}))

(re-frame/reg-fx
  :login-fx
  (fn login-ajax [credentials]
    (POST "/login"
      {:params credentials
       :handler #(re-frame/dispatch [::attempt-login %])})))


(defn login-attempt-failed [db]
  (assoc db :login-attempt-failed? true))

;; where login-attempt is what the Server returned
(defn attempt-login [db [event-id-to-ignore login-attempt]]
  (case login-attempt
    "succeeded" (change-panel
                  (assoc db :logged-in true)
                  :home)

    "failed" (login-attempt-failed db)
                ; (error-message-for-user
                ; (assoc db :logged-in false)
                ; "Login failed. Double check email and password.")
    ))

(re-frame/reg-event-db
  ::attempt-login
  attempt-login)


;; REGISTER

(re-frame/reg-event-fx
  ::register
  (fn register-handler [cofx [event-id-to-ignore username email password]]
    {:register-fx {:username username
                   :email email
                   :password password}}))

(re-frame/reg-fx
  :register-fx
  (fn register-ajax [credentials]
    (POST "/register-creds"
      {:params credentials
       :handler #(re-frame/dispatch [::attempt-registration %])

       ; :handler #(js/console.log "register-ajax response was: " %)

       ;; this is, "on successful POST request" handler;
       ;; if the server decides the creds were incorrect,
       ;; the server will still send back a successful post request,
       ;; no? (or, how do other people handle this?)

        })
    ))


(defn registration-failure-reason [db reason]
  (assoc db :registration-failure-reason reason))

;; you need some of this logic for reuse
;;  in resetting a password
(defn attempt-registration [db [event-id-to-ignore registration-attempt]]
  (case registration-attempt
    "registered" (change-panel
                    (assoc db :logged-in true)
                    :home)
    "invalid email format" (registration-failure-reason db registration-attempt)
    "email already in use"  (registration-failure-reason db registration-attempt)
    "invalid password format" (registration-failure-reason db registration-attempt)
    (registration-failure-reason db "An unknown error happened while registering. Reach out to Cardy at cardytheapp@gmail.com")

    ))


(re-frame/reg-event-db
  ::attempt-registration
  attempt-registration)



;;; PASSWORD RESET

;; sending reset email
; (re-frame/reg-event-fx
;     ::send-pw-reset-email
;     (fn send-pw-reset-email [cofx [event-id-to-ignore email]]
;       {:send-pw-reset-email-fx email}))


; client launches "verify-user-exists" event-id
; which makes a POST request

; vue event
; vue fx
; vue fx handler

(re-frame/reg-event-fx
  ::verify-user-exists
  (fn verify-user-exists [cofx [event-id-to-ignore email]]
    ; add email to db as :current-email so you can access it later
    {:db (assoc (:db cofx) :current-email email)
     :verify-user-exists-fx email}))

; (defn send-reset-email-if-user-exists [response email]
;   (if (= response "succeeded")
;     ; i.e. if user exists, we'll move user to next auth stage
;     ; and will fire another request to send the email
;     {:dispatch [::move-to-code-confirmation-stage]
;      :send-pw-reset-email-fx email}

;     ;; if user doesn't exist, we'll
;     "failed"))

; (re-frame/reg-event-db
(re-frame/reg-event-fx
  ::possibly-move-to-code-confirmation-stage
  (fn possibly-move-to-code-confirmation-stage [cofx [event-id-to-ignore response]]
    (let [db (:db cofx)]
      (if (= response "failed")
          ; if user does not exist, don't send the email;
          ; just tell db that sending email failed
          {:db (assoc db :pw-reset-email-sending-failed? true)}

          ; else, i.e. if user does indeed exist,
          ; we'll move user to next pw reset stage
          ; and fire off another request to send the email
          {:db (assoc db :pw-reset-flow-stage :confirming-pw-reset-code)

            ; problem: the send-pw-reset-email event is expecting to
            ; receive an email as well
           :dispatch [::send-pw-reset-email]}
          ; (assoc db :pw-reset-flow-stage :confirming-pw-reset-code)
          ))))



(re-frame/reg-fx
  :verify-user-exists-fx
  (fn verify-user-exists-ajax [email-address]
    (POST "/verify-user-exists"
      {:params {:email email-address}
        ; we'll let
        :handler #(re-frame/dispatch
                    [::possibly-move-to-code-confirmation-stage %])}

        )))


(re-frame/reg-event-fx
  ::send-pw-reset-email
  (fn send-pw-reset-email [cofx [event-id-to-ignore email]]
    ; we will have stored user's email in :current-email in the
    ; verify-user-exists event-handler
    {:send-pw-reset-email-fx (:current-email (:db cofx))}))


; (re-frame/reg-event-fx
;   ::send-pw-reset-email
;   (fn send-pw-reset-email [cofx [event-id-to-ignore email]]
;     {:db (assoc (:db cofx) :current-email email)
;      :send-pw-reset-email-fx email}))
; okay, but do i also need to update the reg-fx for :db?
; ah, no, that reg-fx is already in re-frame :)


(re-frame/reg-fx
  :send-pw-reset-email-fx
  (fn send-pw-reset-email-ajax [email-address]
    (POST "/send-pw-reset-email"
      {:params {:email email-address}
        :handler #(js/console.log "response from send-pw-reset-email request was: " %)}
        ; :handler #(re-frame/dispatch
        ;             [::move-to-code-confirmation-stage])}
        ; :handler #(re-frame/dispatch
        ;             [::possibly-move-to-code-confirmation-stage %])

        )))

;; the handler needs to be more complicated

; (re-frame/reg-event-db
;   ::possibly-move-to-code-confirmation-stage
;   (fn possibly-move-to-code-confirmation-stage [db response]
;     (if (= response "failed")
;       (assoc db :pw-reset-email-sending-failed? true)
;       (assoc db :pw-reset-flow-stage :confirming-pw-reset-code))))

; (re-frame/reg-event-db
;   ::move-to-code-confirmation-stage
;   (fn move-to-code-confirmation-stage [db]
;     (assoc db :pw-reset-flow-stage :confirming-pw-reset-code)))


; not used anymore?
(re-frame/reg-event-db
  ::notify-user-of-pw-reset-email
  (fn notify-user-of-pw-reset-email [db]
    (assoc db :pw-reset-message "Password reset email sent!")))




;; VERIFYING RESET CODE

;; verifying email's reset code
(re-frame/reg-event-fx
  ::verify-pw-reset-code
  (fn verify-pw-reset-code [cofx [event-id-to-ignore email code]]
    {:verify-pw-reset-code-fx [email code]}))

;; huh? where am I providing the email?
;; i.e. the reg-event-fx above isn't  is returning "code"
;; which is
(re-frame/reg-fx
  :verify-pw-reset-code-fx
  ; (fn verify-pw-reset-code-ajax [email code]
  (fn verify-pw-reset-code-ajax [[email code]]
    (POST "/verify-pw-reset-code"
      {:params {:email email :code code}
        :handler #(re-frame/dispatch
          [::notify-user-of-reset-code-verification %])}
      )
    ))









; if we've verified code, then we can go to next reset-stage
; (re-frame/reg-event-db
;   ::move-to-pw-reset-stage
;   (fn move-to-pw-reset-stage [db]
;     (assoc db :pw-reset-flow-stage :setting-new-pw)))

(defn move-to-pw-reset-stage [db]
  (assoc db :pw-reset-flow-stage :setting-new-pw))

(re-frame/reg-event-db
  ::notify-user-of-reset-code-verification
  (fn notify-user-of-reset-code-verification [db [event-id-to-ignore server-response]]
    (if (= server-response "failed")
        (assoc db :code-verification-failed? true)
        ; ^^^ if codes did not match, then do not move to next stage

        ; (assoc db :code-verified? "Codes matched! Now let's reset your password!")
        (move-to-pw-reset-stage db)
        ; ^^^ if codes DID match, then move to next stage
        )))



;; updating a user's password

(re-frame/reg-event-fx
  ::set-new-pw
  ; hardcoding email for now
  (fn set-new-pw [cofx [event-id-to-ignore new-pw]]
    {:set-new-pw-fx ["cjc500@nyu.edu" new-pw]}))


(re-frame/reg-fx
  :set-new-pw-fx
  (fn set-new-pw-ajax [[email new-pw]]
    (POST "/set-new-pw-ajax"
      {:params {:email email :new-pw new-pw}
        :handler #(re-frame/dispatch
          [::notify-user-of-new-pw %])}
      )
    ))



(re-frame/reg-event-db
  ::notify-user-of-new-pw
  (fn notify-user-of-new-pw [db [event-id-to-ignore server-response]]
    (if (= server-response "succeeded")

        ; (assoc db :new-pw-set? "New password has been set! :-D")

        (assoc
          (assoc db :logged-in true)
          :current-panel
          :home)

        ; if password successfully set,
        ; then simply log user in
        ; (maybe also tell the user that pw was successfully reset?)

        (assoc db :new-pw-not-set? true))))



(re-frame/reg-event-db
  ::update-pw-reset-flow-stage
  (fn update-pw-reset-flow-stage [db [event-id-to-ignore new-stage]]
    (assoc db :pw-reset-flow-stage new-stage)))


) ;; end of tracer form
