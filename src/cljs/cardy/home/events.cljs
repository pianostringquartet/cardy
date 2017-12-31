(ns cardy.home.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [cardy.events :as core-events]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.events :refer [input-to-keyword change-panel]]))

(trace-forms {:tracer (tracer :color "blue")}

(re-frame/reg-event-db
  ::study-given-deck
  (fn study-given-deck [db [event-id-to-ignore deck-name]]
    (as-> db app-db
      (assoc app-db :current-deck deck-name)
      (assoc app-db :current-card (first (deck-name (:decks app-db))))
      (core-events/show-preferred-face app-db)
      (change-panel app-db :study))))

(re-frame/reg-event-db
  ::edit-given-deck
  (fn edit-given-deck [db [event-id-to-ignore deck-name]]
    (-> db
      (assoc :current-deck deck-name)
      (change-panel :edit))))

(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))

(re-frame/reg-event-fx
  ::add-deck
  (fn add-deck-handler [cofx [event-id-to-ignore user-input]]
    (let [deck-name (input-to-keyword user-input)
          db (:db cofx)]
      {:db (add-deck db deck-name)
       :dispatch [::edit-given-deck deck-name]})))

) ;; end of tracer form
