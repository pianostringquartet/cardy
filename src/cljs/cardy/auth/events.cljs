(ns cardy.auth.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.events :as core-events]))


(trace-forms {:tracer (tracer :color "blue")}

;;; ----------------------------------------
;;; Logging in
;;; ----------------------------------------

(defn reset-auth-error-messages
  "Clean up any error messages we showed to user when authenticating."
  [db]
  (-> db
    (assoc :login-attempt-failed? nil)
    (assoc :registration-failure-reason nil)
    (assoc :pw-reset-email-sending-failed? nil)
    (assoc :code-verification-failed? nil)
    (assoc :new-pw-not-set? nil)))

(defn reset-pw-reset-stage [db]
  (assoc db :pw-reset-flow-stage :sending-pw-reset-email))

(defn log-user-in [db]
  (-> db
    (reset-auth-error-messages)
    (reset-pw-reset-stage)
    (assoc :logged-in? true)))

(re-frame/reg-event-fx
  ::login
  (fn login [cofx [event-id-to-ignore username email password]]
    (merge
      {:db (assoc (:db cofx) :email email)}
      (core-events/post-request
        "/login"
        {:username username :email email :password password}
        #(re-frame/dispatch [::attempt-login %])))))

(re-frame/reg-fx
  :create-session
  (fn login-localStorage [email]
    (.setItem js/localStorage core-events/ls-auth-key (str email))))

(re-frame/reg-event-fx
  ::login-attempt-succeeded
  (fn login-attempt-succeeded [cofx [_ _]]
    {:dispatch [::core-events/pull-decks]
     :create-session (:email (:db cofx))
     :db (core-events/go-home (log-user-in (:db cofx)))}))

(defn attempt-login [db login-attempt]
  (case login-attempt
    "succeeded"
      {:dispatch [::login-attempt-succeeded]}
    "failed"
      {:db (assoc db :login-attempt-failed? true)}))

(re-frame/reg-event-fx
  ::attempt-login
  (fn attempt-login-handler [cofx [event-id-to-ignore login-attempt]]
    (attempt-login (:db cofx) login-attempt)))

;;; ----------------------------------------
;;; Registering
;;; ----------------------------------------

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
  {:db (assoc db :registration-failure-reason reason)})

(defn attempt-registration [cofx [event-id-to-ignore registration-attempt]]
  (let [db (:db cofx)]
    (case registration-attempt
      "registered"
        {:db (core-events/go-home (log-user-in db))
         :create-session (:email (:db cofx))
         :dispatch [::core-events/pull-decks]}
      "invalid email format"
        (registration-failure-reason
          db
          "That's not a valid email address.")
      "email already in use"
        (registration-failure-reason
          db
          "This email is already in use. Did you forget your password?")
      "invalid password format"
        (registration-failure-reason
          db
          "Password must be at least 8 letters and contain 1 number, and 1 uppercase and 1 lowercase letter.")
      "passwords do not match"
        (registration-failure-reason
          db
          "The passwords do not match!")
      ;; :else
        (registration-failure-reason
          db
          "An unknown error happened. Reach out to Cardy at cardytheapp@gmail.com"))))

(re-frame/reg-event-fx
  ::attempt-registration
  attempt-registration)

;;; ----------------------------------------
;;; Resetting password
;;; ----------------------------------------

(re-frame/reg-event-db
  ::go-to-auth
  (fn go-to-auth [db]
    (assoc
      (reset-pw-reset-stage db)
      :current-panel
      :auth)))

;;; ----------------------------------------
;;; Resetting password:
;;;   Sending password reset code via email
;;; ----------------------------------------

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
    (core-events/post-request
      "/send-pw-reset-email"
      {:email (:email (:db cofx))}
      #(js/console.log "response from send-pw-reset-email request was: " %))))

;;; ----------------------------------------
;;; Resetting password:
;;;   Verifying reset code
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::verify-pw-reset-code
  (fn verify-pw-reset-code [cofx [event-id-to-ignore email code]]
    (core-events/post-request
      "/verify-pw-reset-code"
      {:email email :code code}
      #(re-frame/dispatch [::notify-user-of-reset-code-verification %]))))

(re-frame/reg-event-db
  ::notify-user-of-reset-code-verification
  (fn notify-user-of-reset-code-verification [db [event-id-to-ignore server-response]]
    (if (= server-response "failed")
        (assoc db :code-verification-failed? true)
        (assoc db :pw-reset-flow-stage :setting-new-pw))))

;;; ----------------------------------------
;;; Resetting password:
;;;   Setting user's new password
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::set-new-pw
  (fn set-new-pw [cofx [event-id-to-ignore new-pw]]
    (core-events/post-request
      "/set-new-pw-ajax"
      {:email (:email (:db cofx)) :new-pw new-pw}
      #(re-frame/dispatch [::login-or-show-new-pw-error %]))))

(re-frame/reg-event-fx
  ::login-or-show-new-pw-error
  (fn login-or-show-new-pw-error [cofx [event-id-to-ignore server-response]]
    (let [db (:db cofx)]
      (if (= server-response "succeeded")
          {:db (core-events/go-home (log-user-in db))
           :create-session (:email (:db cofx))
           :dispatch [::core-events/pull-decks]}
          {:db (assoc db :new-pw-not-set? true)}))))

(re-frame/reg-event-db
  ::update-pw-reset-flow-stage
  (fn update-pw-reset-flow-stage [db [event-id-to-ignore new-stage]]
    (assoc db :pw-reset-flow-stage new-stage)))

) ;; end of tracer form
