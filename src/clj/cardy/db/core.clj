(ns cardy.db.core
  (:require
    [clj-time.jdbc]
    [clojure.java.jdbc :as jdbc]
    [conman.core :as conman]
    [cardy.config :refer [env]]
    [mount.core :refer [defstate]])
  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))

;; L docs: http://www.luminusweb.net/docs/database.md

;; logic for starting and stopping the db connection

;; defstate is from the mount library;
;; per L docs, anything defstate'd will be started and stopped
(defstate ^:dynamic *db*
           :start (conman/connect! {:jdbc-url (env :database-url)})
           :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/queries.sql")


(def dog-card {:deck "Tiere" :front "der Hund" :back "dog"})
(def cat-card {:deck "Tiere" :front "die Katze" :back "cat"})
(def spider-card {:deck "Insekten" :front "die Spinne" :back "spider"})


;; add-card-2
; (defn add-card! [{:keys [deck front back]}]
;   (jdbc/insert! *db* :cards {:deck deck :front front :back back}))

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


; (defn add-deck! [cards]
;   (map add-card! card))

(defn remove-deck! [deck]
  (jdbc/delete! *db* :cards ["deck=?" deck]))

;; transaction: delete, then (re)insert
; (defn update-deck! [deck-name deck]
;   "deck-name: str
;   deck: seq of card-maps, where map is {:deck :front :back}"
;   (jdbc/with-db-transaction [t-conn *db*] ;; binding expr
;     (remove-deck! deck-name)
;     (add-deck! deck)))

;  how it's being called:
; (db-core/update-deck! deck-name deck)


(defn update-deck! [deck-name deck]
  "deck-name: str
  deck: seq of card-maps, where map is {:deck :front :back}"
  ; (do
  ;   (println "%%%   %%%%%%%%%%%%%   %%")
  ;   (println "update-deck db fn deck-name: " deck-name)
  ;   (println "update-deck db fn deck-name TYPE: " (type deck-name))
  ;   (println "update-deck db fn deck: " deck)
  ;   (println "update-deck db fn deck TYPE: " (type deck))
  ;   (println "update-deck db fn first deck: " (first deck))
  ;   (println "update-deck db fn first deck TYPE: " (type (first deck)))
  (jdbc/with-db-transaction [t-conn *db*] ;; binding expr
      (remove-deck! deck-name)
      ; (add-deck! deck)
      ; (add-card! {:deck "test deck" :front "test front" :back "test back"})
      ; (add-card! (first deck))
      ; (add-deck! (rest deck))
      ; (for [card deck] (add-card! card))


      (doall (add-deck! deck))
      ;; YIKES. This works. So the issue was lazy evaluation?
      ))







;; A couple things to keep straight:
;; - fns that interact with SQL db
;; - what these SQL-interfacing fns return
;; - the Clojure data format that flashy uses (a card is a map, a deck is a seq of maps)
