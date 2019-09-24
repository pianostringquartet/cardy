(ns cardy.home.events
  (:require [re-frame.core :as re-frame]
            [cardy.study.events :refer [new-current-card]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.utils :refer [str->kw]]
            [cardy.events :refer [goto show-preferred-face]]))


(trace-forms {:tracer (tracer :color "blue")}

(defn setup-deck [db deck-name]
  (-> db
    (assoc :current-deck deck-name)
    (new-current-card)
    (show-preferred-face)))

(re-frame/reg-event-db
  ::study-deck
  (fn study-deck-handler [db [_ deck-name]]
    (-> db
      (setup-deck deck-name)
      (goto :study))))

(re-frame/reg-event-db
  ::edit-deck
  (fn edit-deck-handler [db [_ deck-name]]
    (-> db
      (assoc :current-deck deck-name)
      (goto :edit))))

(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))

(re-frame/reg-event-fx
  ::add-deck
  (fn add-deck-handler [cofx [_ user-input]]
    (let [deck-name (str->kw user-input)]
      {:db (add-deck (:db cofx) deck-name)
       :dispatch [::edit-deck deck-name]})))

) ;; end of tracer form
