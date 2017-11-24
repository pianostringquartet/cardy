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


;; assumes password is already encrypted
(defn add-user! [username email password]
  (jdbc/insert!
    *db*
    :users
    {:username username :email email :password password}))


; (defn valid-registration? [username email password]
;   (if (and (valid-email-format? email))))

;; this is going to be a weird fn --
; (defn register-user! [username email password]
(defn register-user! [{:keys [username email password]}]
  (if (valid-email-format? email)
    (do
      (doall (add-user! username email (encrypt password)))
      "registered") ;; return "registered" to front end if succeeded
    ; (doall (add-user! username email (encrypt password))
    ;   "registered") ;; return "registered" to front end if succeeded
    "invalid email" ;; else, tell client that email form was bad.
    ))



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

