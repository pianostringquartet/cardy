(ns cardy.auth.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.constants :as constants]
            [cardy.events :as core-events]))


(trace-forms {:tracer (tracer :color "blue")}

;;; ----------------------------------------
;;; Logging in
;;; ----------------------------------------

(defn reset-auth-error-messages
  "Clean up any error messages shown to user when authenticating."
  [db]
  (assoc db
     :login-attempt-failed? nil
     :registration-failure-reason nil
     :pw-reset-email-sending-failed? nil
     :code-verification-failed? nil
     :new-pw-not-set? nil))

(defn reset-pw-reset-flow [db]
  (assoc db :pw-reset-flow-stage :sending-pw-reset-email))

(defn log-user-in [db]
  (-> db
    (reset-auth-error-messages)
    (reset-pw-reset-flow)
    (assoc :logged-in? true)))

;; TODO:
;; rename 'login' and 'attempt-login' to clarify
;; where the potential login failure occurs
(re-frame/reg-event-fx
  ::login
  (fn login [cofx [_ username email password]]
    {:db (assoc (:db cofx) :email email)
     :post-request
       {:uri "/login"
        :params  {:username username :email email :password password}
        :handler  #(re-frame/dispatch [::login-success %])
        :error-handler  #(re-frame/dispatch [::login-error %])}}))

(re-frame/reg-fx
  :create-session
  (fn login-localStorage [email]
    (.setItem js/localStorage core-events/ls-auth-key (str email))))

(re-frame/reg-event-fx
  ::login-success
  (fn login-success-handler [cofx _]
    {:dispatch [::core-events/pull-decks]
     :create-session (:email (:db cofx))
     :db (-> (:db cofx)
           (log-user-in)
           (core-events/goto :home))}))

(re-frame/reg-event-fx
  ::login-error
  (fn login-error-handler [cofx [_ login-attempt]]
    {:db (assoc (:db cofx) :login-attempt-failed? true)}))

;;; ----------------------------------------
;;; Registering
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::register
  (fn register-handler [cofx [_ username email password]]
    {:db (assoc (:db cofx) :email email)
     :post-request
      {:uri "/register"
       :params {:username username :email email :password password}
       :handler #(re-frame/dispatch [::attempt-registration-success %])
       :error-handler #(re-frame/dispatch [::attempt-registration-error (:response %)])}}))

;; HACK:
;; Use (condp = x ...) instead of (case x ...), since case test-constants
;; are *not evaluated and must be compile-time literals*.
;; See https://clojuredocs.org/clojure.core/case
(defn attempt-registration-error [cofx [_ registration-attempt]]
  (let [db (:db cofx)
        fail-reason
          (fn [db reason] {:db (assoc db :registration-failure-reason reason)})]
    (condp = registration-attempt
      constants/INVALID-EMAIL-FORMAT
        (fail-reason db constants/INVALID-EMAIL-FORMAT)
      constants/EMAIL-ALREADY-EXISTS
        (fail-reason db constants/EMAIL-ALREADY-EXISTS)
      constants/INVALID-PASSWORD-FORMAT
        (fail-reason db constants/INVALID-PASSWORD-FORMAT)
      constants/PASSWORDS-DO-NOT-MATCH
        (fail-reason db constants/PASSWORDS-DO-NOT-MATCH)
      ;; :else
      (fail-reason db
        "Hmmm... Something went wrong.
        Reach out to Cardy at cardytheapp@gmail.com"))))

(re-frame/reg-event-fx
  ::attempt-registration-error
  attempt-registration-error)

(re-frame/reg-event-fx
  ::attempt-registration-success
 (fn attempt-registration-success [cofx [_ registration-attempt]]
  (let [db (:db cofx)]
    {:db (-> db (log-user-in) (core-events/goto :home))
     :create-session (:email db)
     :dispatch [::core-events/pull-decks]})))

;;; ----------------------------------------
;;; Resetting password
;;; ----------------------------------------

(re-frame/reg-event-db
  ::exit-pw-reset-flow
  (fn exit-pw-reset-flow [db]
   (-> db
     (reset-auth-error-messages)
     (reset-pw-reset-flow)
     (core-events/goto :auth))))

;;; ----------------------------------------
;;; Resetting password:
;;;   Sending password reset code via email
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::verify-user-exists
  (fn verify-user-exists [cofx [_ email]]
    {:db (assoc (:db cofx) :email email)
     :post-request
      {:uri "/verify-user-exists"
       :params  {:email email}
       :handler  #(re-frame/dispatch [::verify-user-exists-success %])
       :error-handler  #(re-frame/dispatch [::verify-user-exists-error %])}}))

(re-frame/reg-event-fx
  ::verify-user-exists-success
  (fn move-to-code-confirmation-stage [cofx [_ response]]
    (let [db (:db cofx)]
      {:db (assoc db :pw-reset-flow-stage :confirming-pw-reset-code)
       :dispatch [::send-pw-reset-email]})))

(re-frame/reg-event-db
  ::verify-user-exists-error
  (fn verify-user-exists-error-handler [db]
    (assoc db :pw-reset-email-sending-failed? true)))

;; NOTE:
;; Server returns response *before* email is actually sent,
;; so we're *optimistically* tell user email has been sent.
(re-frame/reg-event-fx
  ::send-pw-reset-email
  (fn send-pw-reset-email [cofx [_ email]]
    {:post-request
      {:uri "/send-pw-reset-email"
       :params {:email (:email (:db cofx))}
       :handler #(js/console.log "Email scheduled to be sent. " %)}}))

;;; ----------------------------------------
;;; Resetting password:
;;;   Verifying reset code
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::verify-pw-reset-code
  (fn verify-pw-reset-code [cofx [_ email code]]
    {:post-request
      {:uri "/verify-pw-reset-code"
       :params {:email email :code code}
       :handler #(re-frame/dispatch [::verify-pw-reset-code-success %])
       :error-handler #(re-frame/dispatch [::verify-pw-reset-code-error %])}}))

(re-frame/reg-event-db
  ::verify-pw-reset-code-success
  (fn verify-pw-reset-code-success [db [_ response]]
    (assoc db :pw-reset-flow-stage :setting-new-pw)))

(re-frame/reg-event-db
  ::verify-pw-reset-code-error
  (fn verify-pw-reset-code-error [db [_ response]]
    (assoc db :code-verification-failed? true)))

;;; ----------------------------------------
;;; Resetting password:
;;;   Setting user's new password
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::set-new-pw
  (fn set-new-pw [cofx [_ new-pw]]
    {:post-request
      {:uri "/set-new-pw"
       :params {:email (:email (:db cofx)) :new-pw new-pw}
       :handler #(re-frame/dispatch [::set-new-pw-success %])
       :error-handler #(re-frame/dispatch [::set-new-pw-error %])}}))

(re-frame/reg-event-fx
  ::set-new-pw-success
  (fn set-new-pw-success [cofx [_ server-response]]
    (let [db (:db cofx)]
      {:db (-> db (log-user-in) (core-events/goto :home))
       :create-session (:email db)
       :dispatch [::core-events/pull-decks]})))

(re-frame/reg-event-fx
  ::set-new-pw-error
  (fn set-new-pw-error [cofx [_ server-response]]
    (let [db (:db cofx)]
      {:db (assoc db :new-pw-not-set? true)})))

(re-frame/reg-event-db
  ::update-pw-reset-flow-stage
  (fn update-pw-reset-flow-stage [db [_ new-stage]]
    (assoc db :pw-reset-flow-stage new-stage)))

) ;; end of tracer form
