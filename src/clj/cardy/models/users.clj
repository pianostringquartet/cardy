(ns cardy.models.users
  (:require
    [clj-time.jdbc]
    [clojure.java.jdbc :as jdbc]
    [cardy.config :refer [env]]
    [buddy.core.hash :refer [sha256]]
    [buddy.core.codecs :refer [bytes->hex]]
    [postal.core :as postal]
    [cardy.constants :as constants]
    [sendgrid.core :as sg]
    [cardy.db.core :refer [*db*]])

  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))

;;; ----------------------------------------
;;; A user:
;;;   - has an email address,
;;;   - has a password, and
;;;   - may have a password reset code
;;; ----------------------------------------

;;; ----------------------------------------
;;; Logging in / registering a user
;;; ----------------------------------------

(defn retrieve-user [email]
  (first (jdbc/query *db* ["select * from users where email=?" email])))

(defn encrypt [a-str]
  (bytes->hex (sha256 a-str)))

(defn valid-email-format?
  [email]
  (let [pattern
        #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (if (and (string? email) (re-matches pattern email))
      true
      false)))

(defn valid-password-format?
  "Password should be 8 or more characters long and
  have at least one of each: uppercase, lowercase, number."
  [password]
  (let [uppercase #"[A-Z]"
        lowercase #"[a-z]"
        number #"[0-9]"
        has (fn [regex a-str] (re-find regex a-str))]
    (and (has uppercase password)
         (has lowercase password)
         (has number password)
         (>= (count password) 8))))

(defn add-user! [username email password]
  (jdbc/insert!
    *db*
    :users
    {:username username :email email :password password}))

(defn user-exists? [email]
  (not (nil? (retrieve-user email))))

(defn register-user! [{:keys [username email password]}]
  (cond
    (not (valid-email-format? email))
      constants/INVALID-EMAIL-FORMAT
    (user-exists? email)
      constants/EMAIL-ALREADY-EXISTS
    (not (valid-password-format? password))
      constants/INVALID-PASSWORD-FORMAT
    :else (do
            (doall (add-user! username email (encrypt password)))
            "registered")))

(defn credentials-valid? [{:keys [username email password]}]
  (let [user (retrieve-user email)]
    (and (= (:username user) username)
         (= (:email user) email)
         (= (:password user) (encrypt password)))))

;;; ----------------------------------------
;;; Resetting a forgotton password
;;; ----------------------------------------

(defn generate-password-reset-code []
  (-> (rand-int 9999)
      (str)
      (encrypt)
      (subs 10 20)))

(defn add-pw-reset-code-to-user [email code]
  (jdbc/update! *db* :users {:reset_code code} ["email = ?" email]))

(defn email-content [email code]
  (str "<html>
         <head></head>
         <body>
            <h2>Hi there " email ", </h2>
           <h3>Use this code to reset your password:</h3>
           <p>" code "</p>
           <h3>Now get back to studying!</h3>
           <h3>Your pal, </h3>
           <h3>Cardy </h3>
         </body>
        </html>"))

(defn send-reset-code-in-email [email code]
  (sg/send-email
    {:api-token (str "Bearer " (:sendgrid-api-key env))
     :from (:cardy-mail-address env)
     :to email
     :subject "Cardy here. Let's reset your password."
     :message (email-content email code)}))

(defn send-password-reset-email [email]
  (let [reset-code (generate-password-reset-code)]
    (do
      (doall (add-pw-reset-code-to-user email reset-code))
      (send-reset-code-in-email email reset-code))))

(defn retrieve-reset-code [email]
  (:reset_code
    (first
      (jdbc/query *db*
        ["select * from users where email = ?" email]))))

(defn reset-codes-match? [email code]
  (= code (retrieve-reset-code email)))

(defn update-pw! [email new-pw]
  (jdbc/update! *db* :users {:password (encrypt new-pw)} ["email = ?" email]))

(defn set-new-pw [email new-pw]
  (if (not (valid-password-format? new-pw))
    false
    (do
      (doall (update-pw! email new-pw))
      true)))
