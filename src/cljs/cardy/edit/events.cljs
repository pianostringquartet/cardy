(ns cardy.edit.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]
            [medley.core :refer [dissoc-in]]
            [cardy.events :refer [input-to-card change-panel post-request]]
            ))

(trace-forms {:tracer (tracer :color "blue")}


; (defn add-card [db [event-id-to-ignore user-input]]
;   (let [cards (get-in db [:decks (:current-deck db)])
;         new-card (input-to-card user-input)]
;     (assoc-in
;       db
;       [:decks (:current-deck db)]
;       (conj cards new-card))))


(defn add-card [db [event-id-to-ignore user-input]]
  (let [cards (get-in db [:decks (:current-deck db)])
        new-card (input-to-card user-input)]
    (if (or (nil? (:front new-card))
            (nil? (:back new-card)))
      db
      (assoc-in
          db
          [:decks (:current-deck db)]
          (conj cards new-card)))
    ))


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


(defn current-deck-empty? [db]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (empty? cards)))


; (defn remove-deck-if-empty [db]
;   (let [cards (get-in db [:decks (:current-deck db)])]
;     (if (empty? cards)
;       (remove-deck db (:current-deck db))
;       db)))


(re-frame/reg-event-db
  ::remove-card
  (fn remove-card-handler [db [event-id-to-ignore card]]
    (remove-card db card)))


; (re-frame/reg-event-fx
;   ::update-deck
;   (fn update-deck! [cofx [event-id-to-ignore deck-name]]
;     {:update-deck-fx {:deck-name deck-name
;                       :deck (get-in cofx [:db :decks deck-name])}}))


(re-frame/reg-event-fx
  ::update-deck
  (fn update-deck! [cofx [event-id-to-ignore deck-name]]
    (post-request
      "/update-deck"
      {:deck-name deck-name
       :deck (get-in cofx [:db :decks deck-name])
       :email (:email (:db cofx))} ;; added :email
      #(js/console.log "update-deck-ajax response was: " %))))


(re-frame/reg-event-fx
  ::remove-deck
  (fn remove-deck-handler [cofx [event-id-to-ignore deck-name]]
    (let [db (:db cofx)]
      (merge
        {:db (dissoc-in db [:decks (keyword deck-name)])}
        (post-request
          "/remove-deck"
          {:deck-name deck-name
           :email (:email (:db cofx))} ;; added :email
          #(js/console.log "remove-deck-ajax response was: " %))))))

(re-frame/reg-event-fx
  ::return-home-from-edit
  (fn return-home-from-edit [cofx [event-id-to-ignore]]
    (let [db (:db cofx)]
      (if (current-deck-empty? db)
        ; if current deck empty, then delete it from app-db
        ; and external db,
        ; and go home.
        {:dispatch [::remove-deck (:current-deck db)]
         :db (assoc db :current-panel :home)}
        ; otherwise, update deck in external db,
        ; and go home home.
        {:dispatch [::update-deck (:current-deck db)]
         :db (assoc db :current-panel :home)}))))



) ;; end of tracer form
