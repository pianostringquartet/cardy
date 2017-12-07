(ns cardy.models.users
  (:require
    [clj-time.jdbc]
    [clojure.java.jdbc :as jdbc]
    [cardy.config :refer [env]]
    [buddy.core.hash :refer [sha256]]
    [buddy.core.codecs :refer [bytes->hex]]
    [postal.core :as postal]
    [cardy.db.core :refer [*db*]])

  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))


;;; AUTHENTICATION


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
  [password]
  "Password should be 8 or more characters long and
   have at least one of each: uppercase, lowercase, number."
  (let [uppercase #"[A-Z]"
        lowercase #"[a-z]"
        number #"[0-9]"
        has (fn [regex a-str] (re-find regex a-str))]
    (if (and (has uppercase password)
             (has lowercase password)
             (has number password)
             (>= (count password) 8))
        true
        false)))

(defn add-user! [username email password]
  (jdbc/insert!
    *db*
    :users
    {:username username :email email :password password}))

(defn user-already-exists? [email]
  (not (nil? (retrieve-user email))))

(defn register-user! [{:keys [username email password]}]
  (cond
    (not (valid-email-format? email))
      "invalid email format"
    (user-already-exists? email)
      "email already in use"
    (not (valid-password-format? password))
      "invalid password format"
    :else (do
            (doall (add-user! username email (encrypt password)))
            "registered")))


(defn validate-credentials [{:keys [username email password]}]
  (let [user (retrieve-user email)]
    (if (and (= (:username user) username)
             (= (:email user) email)
             (= (:password user) (encrypt password)))
        "succeeded"
        "failed")))


;; RESET PASSWORD

; for pw reset, first confirm email/user exists
(defn verify-user-exists [email]
  (if (not (user-already-exists? email))
      "failed"
      "succeeded"))

(defn generate-password-reset-code []
  (encrypt (str (rand-int 9999))))

(defn add-pw-reset-code-to-user [email code]
  (jdbc/update! *db* :users {:reset_code code} ["email = ?" email]))

(defn send-reset-code-in-email [email code]
  (postal/send-message
    {:host "smtp.gmail.com" :ssl true
     :user (:cardy-mail-address env) :pass (:cardy-mail-pw env)}
    {:from (:cardy-mail-address env) :to email
     :subject "Cardy here. Let's reset your password."
     :body [{:type "text/html"
             :content
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
                     </html>")}]}))


(defn send-password-reset-email [email]
  (let [reset-code (subs (generate-password-reset-code) 15)]
    (do
      (doall (add-pw-reset-code-to-user email reset-code))
      (send-reset-code-in-email email reset-code)
      "pw reset email sent from server"
      )))


(defn retrieve-reset-code [email]
  (:reset_code
    (first
      (jdbc/query *db*
        ["select * from users where email = ?" email]))))

(defn verify-pw-reset-code [email code]
  (if (= code (retrieve-reset-code email))
    "succeeded"
    "failed"))


(defn update-pw! [email new-pw]
  (jdbc/update! *db* :users {:password (encrypt new-pw)} ["email = ?" email]))

(defn set-new-pw [email new-pw]
  (if (not (valid-password-format? new-pw))
    "failed"
    (do
      (doall (update-pw! email new-pw))
      "succeeded")))
