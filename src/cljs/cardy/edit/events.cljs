(ns cardy.edit.events
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [medley.core :refer [dissoc-in]]
            [cardy.utils :refer [kw->str]]
            [cardy.events :refer [goto]]))


(trace-forms {:tracer (tracer :color "blue")}

;;; ----------------------------------------
;;; Cards
;;; ----------------------------------------

(defn input-to-card [a-string]
  (let [words (map
               clojure.string/trim
               (clojure.string/split a-string #";"))]
    {:front (first words) :back (second words)}))

(defn add-card [db user-input]
  (let [cards (get-in db [:decks (:current-deck db)])
        new-card (input-to-card user-input)]
    (if (or (nil? (:front new-card))
            (nil? (:back new-card)))
      db ;; i.e. then don't add card
      (assoc-in db [:decks (:current-deck db)] (conj cards new-card)))))

(re-frame/reg-event-db
  ::add-card
  (fn add-card-handler [db [_ user-input]]
    (add-card db user-input)))

(defn remove-card [db card]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (assoc-in
      db
      [:decks (:current-deck db)]
      (clojure.set/difference cards #{card}))))

(re-frame/reg-event-db
  ::remove-card
  (fn remove-card-handler [db [_ card]]
    (remove-card db card)))

;;; ----------------------------------------
;;; Decks
;;; ----------------------------------------

(re-frame/reg-event-fx
  ::update-deck
  (fn update-deck! [cofx [_ deck-name]]
    {:post-request
      {:uri "/update-deck"
       :params {:deck-name (kw->str deck-name)
                :deck (get-in cofx [:db :decks deck-name])
                :email (:email (:db cofx))}
       :handler #(js/console.log "Deck successfully updated. " %)}}))

(re-frame/reg-event-fx
  ::remove-deck
  (fn remove-deck-handler [cofx [_ deck-name]]
    {:db (dissoc-in (:db cofx) [:decks deck-name])
     :post-request
      {:uri "/remove-deck"
       :params {:deck-name (kw->str deck-name)
                :email (:email (:db cofx))}
       :handler #(js/console.log "Deck successfully removed. " %)}}))

;;; ----------------------------------------
;;; Navigation
;;; ----------------------------------------

(defn current-deck-empty? [db]
  (let [cards (get-in db [:decks (:current-deck db)])]
    (empty? cards)))

(re-frame/reg-event-fx
  ::return-home-from-edit
  (fn return-home-from-edit-handler [cofx _]
    (let [db (:db cofx)]
      {:db (goto db :home)
       :dispatch (if (current-deck-empty? db)
                    [::remove-deck (:current-deck db)]
                    [::update-deck (:current-deck db)])})))

) ;; end of tracer form
