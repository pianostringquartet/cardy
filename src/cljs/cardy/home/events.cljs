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
                remove-deck
                ]]
            ))

(trace-forms {:tracer (tracer :color "blue")}





;; this is ridiculous to use just a single time...
; (defn dissoc-in
;   "Dissociates an entry from a nested associative structure returning a new
;   nested structure. keys is a sequence of keys. Any empty maps that result
;   will not be present in the new structure."
;   [m [k & ks :as keys]]
;   (if ks
;     (if-let [nextmap (get m k)]
;       (let [newmap (dissoc-in nextmap ks)]
;         (if (seq newmap)
;           (assoc m k newmap)
;           (dissoc m k)))
;       m)
;     (dissoc m k)))


; (defn removing-current-deck? [db deck-to-remove]
;   "Expects deck-to-remove to be a :keyword."
;   (= deck-to-remove (:current-deck db)))

; (defn last-deck? [db]
;   (= 1 (count (:decks db))))


;  where is this event being used / called?
; ah, it's callable via the trash can icon on a deck face in Home
; ... so you should move this logic to Common Events,
; since we also need this in
; (re-frame/reg-event-db
;   ::remove-deck
;   (fn remove-deck-handler [db [event-id-to-ignore deck-name]]
;     (dissoc-in db [:decks (input-to-keyword deck-name)])))

; (re-frame/reg-event-db
;   ::remove-deck
;   (fn remove-deck-handler [db [event-id-to-ignore deck-name]]
;     (dissoc-in db [:decks (input-to-keyword deck-name)])))

(re-frame/reg-event-db
  ::remove-deck
  (fn remove-deck-handler [db [event-id-to-ignore deck-name]]
    (remove-deck db (input-to-keyword deck-name))))


(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))


(re-frame/reg-event-db
  ::study-given-deck
  ;;; where deck-name is keyword
  (fn study-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (assoc
        (assoc db :current-deck deck-name) ;; set :current-deck, so Study knows which cards to draw from
        :current-card
        (first (deck-name (:decks db)))) ;; set :current-card as simply the first card from now :current-deck
      :study)))


(re-frame/reg-event-db
  ::edit-given-deck
  (fn edit-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (assoc db :current-deck deck-name)
      :edit)))


(re-frame/reg-event-fx
  ::add-deck
  (fn add-deck-handler [cofx [event-id-to-ignore new-decks-name]]
    (let [deck-name (input-to-keyword new-decks-name)
          db (:db cofx)]
      {:db (add-deck db deck-name)
       :dispatch [::edit-given-deck deck-name]})))

) ;; end of tracer form
