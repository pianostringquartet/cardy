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
