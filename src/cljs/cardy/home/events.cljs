(ns cardy.home.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [
                input-to-card
                input-to-keyword
                change-panel
                ]]
            ))

(trace-forms {:tracer (tracer :color "blue")}

(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))

(re-frame/reg-event-db
  ::study-given-deck
  (fn study-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (assoc
        (assoc db :current-deck deck-name)
        :current-card
        (first (deck-name (:decks db))))
      :study)))

(re-frame/reg-event-db
  ::edit-given-deck
  (fn edit-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (assoc db :current-deck deck-name)
      :edit)))

(re-frame/reg-event-fx
  ::add-deck
  (fn add-deck-handler [cofx [event-id-to-ignore user-input]]
    (let [deck-name (input-to-keyword user-input)
          db (:db cofx)]
      {:db (add-deck db deck-name)
       :dispatch [::edit-given-deck deck-name]})))

) ;; end of tracer form
