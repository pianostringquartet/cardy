(ns cardy.edit.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [medley.core :refer [dissoc-in]]
            [cardy.events :refer [
              input-to-card change-panel go-home
              post-request keyword-to-display]]
            ))


(trace-forms {:tracer (tracer :color "blue")}

(defn add-card [db [event-id-to-ignore user-input]]
  (let [cards (get-in db [:decks (:current-deck db)])
        new-card (input-to-card user-input)]
    (if (or (nil? (:front new-card))
            (nil? (:back new-card)))
      db
      (assoc-in
          db
          [:decks (:current-deck db)]
          (conj cards new-card)))))

(re-frame/reg-event-db
  ::add-card
  add-card)

(defn remove-card [db card]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (assoc-in
      db
      [:decks (:current-deck db)]
      (clojure.set/difference cards #{card}))))

(defn current-deck-empty? [db]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (empty? cards)))

(re-frame/reg-event-db
  ::remove-card
  (fn remove-card-handler [db [event-id-to-ignore card]]
    (remove-card db card)))

(re-frame/reg-event-fx
  ::update-deck
  (fn update-deck! [cofx [event-id-to-ignore deck-name]]
    (post-request
      "/update-deck"
      {:deck-name (keyword-to-display deck-name)
       :deck (get-in cofx [:db :decks deck-name])
       :email (:email (:db cofx))}
      #(js/console.log "update-deck-ajax response was: " %))))

(re-frame/reg-event-fx
  ::remove-deck
  (fn remove-deck-handler [cofx [event-id-to-ignore deck-name]]
    (let [db (:db cofx)]
      (merge
        {:db (dissoc-in db [:decks deck-name])}
        (post-request
          "/remove-deck"
          {:deck-name (keyword-to-display deck-name)
           :email (:email (:db cofx))}
          #(js/console.log "remove-deck-ajax response was: " %))))))

(re-frame/reg-event-fx
  ::return-home-from-edit
  (fn return-home-from-edit [cofx [event-id-to-ignore]]
    (let [db (:db cofx)]
      (if (current-deck-empty? db)
        {:dispatch [::remove-deck (:current-deck db)]
         :db (assoc db :current-panel :home)}
        {:dispatch [::update-deck (:current-deck db)]
         :db (assoc db :current-panel :home)}))))

) ;; end of tracer form
