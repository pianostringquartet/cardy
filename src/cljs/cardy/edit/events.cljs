(ns cardy.edit.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]
            [medley.core :as medley]
            [cardy.events :refer [input-to-card change-panel remove-deck]]
            ))

(trace-forms {:tracer (tracer :color "blue")}


;; this needs to now add directly to the deck in :decks
; works
(defn add-card [db [event-id-to-ignore user-input]]
  (let [cards (get-in db [:decks (:current-deck db)])
        new-card (input-to-card user-input)]
    (assoc-in
      db
      [:decks (:current-deck db)]
      (conj cards new-card))))

(re-frame/reg-event-db
  ::add-card
  add-card)


; where card is a map
(defn remove-card [db card]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (assoc-in
      db
      [:decks (:current-deck db)]
      (clojure.set/difference cards #{card}))))


(defn remove-deck-if-empty [db]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (if (empty? cards)
      (remove-deck db (:current-deck db))
      db)))

(re-frame/reg-event-db
  ::remove-card
  (fn remove-card-handler [db [event-id-to-ignore card]]
    (remove-card db card)))

(re-frame/reg-event-db
  ::return-home-from-edit
  (fn return-home-from-edit [db]
    (assoc
      (remove-deck-if-empty db)
      :current-panel
      :home)))


) ;; end of tracer form
