(ns cardy.models.cards
  (:require
    [clj-time.jdbc]
    [clojure.java.jdbc :as jdbc]
    [cardy.config :refer [env]]
    [medley.core :as m]
    [cardy.db.core :refer [*db*]])

  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))


(defn insert-card! [card-map]
  "card-map: {:deck <str> :front <str> :back <str>"
  (jdbc/insert! *db* :cards card-map))

(defn to-card [deck-name card email]
  (merge
    {:deck (name deck-name) :email email}
    card))

(defn add-card! [deck-name card email]
  (insert-card! (to-card deck-name card email)))

(defn retrieve-deck [deck email]
  (jdbc/query *db* ["select * from cards where deck=? and email=?" deck email]))

(defn add-deck! [deck-name cards email]
  (for [card cards] (add-card! deck-name card email)))

(defn remove-deck! [deck email]
  (jdbc/delete! *db* :cards ["deck=? and email=?" deck email]))


(defn update-deck! [deck-name deck email]
  "deck-name: str
  deck: seq of card-maps, where map is {:deck :front :back}"
  (jdbc/with-db-transaction [t-conn *db*] ;; binding expr
      (remove-deck! deck-name email)
      (doseq [card deck]
        (add-card! deck-name card email))))



(defn get-all-decks [email]
  (jdbc/query *db* ["select * from cards where email=?" email]))


(defn pull-decks [email]
  (->> (get-all-decks email)
    (group-by :deck)
    (m/map-vals
      #(into #{}
          (for [m %]
            (dissoc m :id :deck :email))))
    (m/map-keys keyword)))


(defn prep [deck]
  (let [cards (second deck) deck-name (name (first deck))]
    (for [card cards] (merge {:deck deck-name} card))))


(defn push-decks! [decks]
  (let [prepped-decks (map prep decks)]
      (doall
        (for [deck prepped-decks]
          (update-deck! (some :deck deck) deck)))))