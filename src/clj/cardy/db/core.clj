(ns cardy.db.core
  (:require
    [clj-time.jdbc]
    [clojure.java.jdbc :as jdbc]
    [conman.core :as conman]
    [cardy.config :refer [env]]
    [mount.core :refer [defstate]]
    [medley.core :as m]
    [buddy.core.hash :as hash]
    [buddy.core.codecs :as codecs]
    [postal.core :as postal]

    )
  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))

;; L docs: http://www.luminusweb.net/docs/database.md

;; logic for starting and stopping the db connection

;; defstate is from the mount library;
;; per L docs, anything defstate'd will be started and stopped
;; hmmm... but what is this "^:dynamic" notation to defstate?
(defstate ^:dynamic *db*
           :start (conman/connect! {:jdbc-url (env :database-url)})
           :stop (conman/disconnect! *db*))

; (conman/bind-connection *db* "sql/queries.sql")


;; add-card-3
(defn add-card! [card-map]
  "card-map: {:deck <str> :front <str> :back <str>"
  (jdbc/insert! *db* :cards card-map))

(defn retrieve-deck [deck]
  (jdbc/query *db* ["select * from cards where deck=?" deck]))

; ;; returns deck (seq of card-maps) with :id removed
; (defn get-deck [deck]
;   (map #(dissoc % :id) (retrieve-deck deck)))

;; we don't want to include :id or :deck
;; we just return the seq of maps
(defn get-deck [deck]
  (map #(dissoc % :id :deck) (retrieve-deck deck)))


; ;; add-deck-3
(defn add-deck! [cards]
  (for [card cards] (add-card! card)))


(defn remove-deck! [deck]
  (jdbc/delete! *db* :cards ["deck=?" deck]))


(defn update-deck! [deck-name deck]
  "deck-name: str
  deck: seq of card-maps, where map is {:deck :front :back}"
  (jdbc/with-db-transaction [t-conn *db*] ;; binding expr
      (remove-deck! deck-name)
      (doall (add-deck! deck))))

;; pull all decks,
;; return something that we can set as value of :decks key in app-db,
;; i.e. return a map where a key is :deck-name and value is a seq of card-maps
;; basically pulling ALL cards
(defn get-all-decks []
  (jdbc/query *db* ["select * from cards"]))

(defn pull-decks []
  (->> (get-all-decks)
    (group-by :deck)
    (m/map-vals #(for [m %] (dissoc m :id :deck)))
    (m/map-keys keyword)))


; (defn push-decks [] nil)

; (def decks {:Tiere '({:front "die Spinne", :back "spider"} {:front "die Kuh", :back "cow"}), :misc '({:front "das Haus", :back "house"}), :test '({:front "test front", :back "test back"}), :Farben '({:front "violett", :back "purple"} {:front "rot", :back "red"} {:front "gelb", :back "yellow"} {:front "grau", :back "grey"})})

; for each k/v pair, where v is a seq of maps, you want to add a k/v ":deck k" pair in each map

;; prepare cards in a given deck for insertion
; (defn prep [deck]
;   (let [cards (second deck) deck-name (first deck)]
;     (for [card cards] (merge {:deck deck-name} card))))
(defn prep [deck]
  (let [cards (second deck) deck-name (name (first deck))]
    (for [card cards] (merge {:deck deck-name} card))))


; (defn push-decks! [decks]
;   (let [prepped-decks (map prep decks)]
;       (for [deck prepped-decks]
;         (update-deck! (some :deck deck) deck))))



(defn push-decks! [decks]
  (let [prepped-decks (map prep decks)]
      (doall
        (for [deck prepped-decks]
          (update-deck! (some :deck deck) deck)))))

; {:Tiere '({:front "die Spinne", :back "spider"} {:front "die Kuh", :back "cow"}), :misc '({:front "das Haus", :back "house"}), :test '({:front "test front", :back "test back"}), :Farben '({:front "violett", :back "purple"} {:front "rot", :back "red"} {:front "gelb", :back "yellow"} {:front "grau", :back "grey"})}



;; for new users
;; you'll want to add a MySQL date field to table
;; and handle dates in Clojure
; (defn create-user! [username email password]
;   )




;;; AUTHENTICATION

;;; you'll want to make email unique, no?
; (defn retrieve-user [email]
;   (jdbc/query *db* ["select * from users where email=?" email]))

(defn retrieve-user [email]
  (first (jdbc/query *db* ["select * from users where email=?" email])))


;; eventually move to an "auth" directory?

(defn encrypt [a-str]
  (codecs/bytes->hex (hash/sha256 a-str)))


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


;; assumes password is already encrypted
(defn add-user! [username email password]
  (jdbc/insert!
    *db*
    :users
    {:username username :email email :password password}))


;; users are identified by their e
(defn user-already-exists? [email]
  (not (nil? (retrieve-user email))))

; (defn valid-registration? [username email password]
;   (if (and (valid-email-format? email))))

; ;; this is going to be a weird fn --
; ; (defn register-user! [username email password]
; (defn register-user! [{:keys [username email password]}]
;   ; (if (valid-email-format? email)
;   ; (if (and (valid-email-format? email)
;   ;          (not (user-already-exists? email)))

;   (if (and (valid-email-format? email)
;            (not (user-already-exists? email))
;            (valid-password-format? password)
;            )
;     (do
;       (doall (add-user! username email (encrypt password)))
;       "registered") ;; return "registered" to front end if succeeded
;     ; (doall (add-user! username email (encrypt password))
;     ;   "registered") ;; return "registered" to front end if succeeded
;     "invalid email or email already exists" ;; else, tell client that email form was bad.
;     ))



;;; this fn needs to be more complicated --
;;; you need a cond, and to return specific errors when
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


  ; (if (and (valid-email-format? email)
  ;          (not (user-already-exists? email))
  ;          (valid-password-format? password)
  ;          )

      ;; return "registered" to front end if succeeded
    ; (doall (add-user! username email (encrypt password))
    ;   "registered") ;; return "registered" to front end if succeeded
    ; "invalid email or email already exists" ;; else, tell client that email form was bad.
    ; ))




;; probably a better way to do this e.g.
;; map
;;  #(-> (select-keys [username email password]) =)
;;  credentials user
(defn validate-credentials [{:keys [username email password]}]
  (let [user (retrieve-user email)]
    (if (and (= (:username user) username)
             (= (:email user) email)
             (= (:password user) (encrypt password)))
        "succeeded"
        "failed")))


;; RESET PASSWORD
(defn generate-password-reset-code []
  (encrypt (str (rand-int 9999)))) ;; might need to give sha256 a string not a number?

(defn add-pw-reset-code-to-user [email code]
  ;; update :code col to code where :email col = email
  ;; assumes code is already encrypted and hexed
  (jdbc/update! *db* :users {:reset_code code} ["email = ?" email]))

;; pull these from environment!
;; e.g. Heroku CONFIG_VARS for prod,
;; dev/test maps in profiles.cljs for local
(def cardy-mail-address "cardytheapp@gmail.com")
(def cardy-mail-pw "Cardy@Flashcard")

;; okay, this seems to ignore the "to" field and just
;; always send an email to cardy-mail-address
(defn send-reset-code-in-email [email code]
  (postal/send-message
    ;; conn
    {:host "smtp.gmail.com" :ssl true
     :user cardy-mail-address :pass cardy-mail-pw}

    ;; email itself
    {:from cardy-mail-address :to email
     :subject "Cardy here. Let's reset your password."
     :body (str "Use this code to reset your password: " code)}))

;; the entrypoint/gate function
(defn send-password-reset-email [email]
  (let [reset-code (generate-password-reset-code)]
    (do
      ; (add-pw-reset-code-to-user email reset-code)

      ;; this is nil?
      (println "send-password-reset-email email: " email)

      (doall (add-pw-reset-code-to-user email reset-code))
      (send-reset-code-in-email email reset-code)
      "pw reset email sent from server"
      )
    ))




; ... tell user password reset code email has been sent
;; okay, confirm that everything up to this point WORKS.

; client part 2:
;   user enters pw-reset-code (will be quite long) into UI elem;
;   dispatches [::confirm-pw-reset-code entered-code] event
;   makes POST request to server

; server part 2:
;   if entered-code matches code-in-db, then let them reset pw;
;     else show error

