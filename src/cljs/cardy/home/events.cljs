(ns cardy.home.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [
                new-current-card
                input-to-card
                input-to-keyword
                add-back-excluded
                put-back-old-deck
                bring-in-new-deck
                change-panel
                ]]
            ))

(trace-forms {:tracer (tracer :color "blue")}

; home views uses:

; add-deck
; remove-deck

; study-given-deck
; edit-given-deck


;; this is ridiculous to use just a single time...
(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))


(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))

(defn removing-current-deck? [db deck-to-remove]
  "Expects deck-to-remove to be a :keyword."
  (= deck-to-remove (:current-deck db)))

(defn last-deck? [db]
  (= 1 (count (:decks db))))

(re-frame/reg-event-db
  ::remove-deck
  (fn remove-deck-handler [db [event-id-to-ignore name-of-deck-to-remove]]
    (let [deck-to-remove (input-to-keyword name-of-deck-to-remove)
          remove-deck (fn [db deck-name]
            (dissoc-in db [:decks deck-name]))]
      (if (last-deck? db)
        (as-> db app-state ;; just use -> here
          (add-deck app-state :placeholder)
          (bring-in-new-deck app-state "placeholder"))
        (if (removing-current-deck? db deck-to-remove)
          (as-> db app-state
            (remove-deck app-state deck-to-remove)
            (bring-in-new-deck app-state (name (first (keys (:decks app-state)))))
            (new-current-card app-state))
          (remove-deck db deck-to-remove))))))




(re-frame/reg-event-db
  ::add-deck
  (fn add-deck-handler [db [event-id-to-ignore name-for-new-deck]]
    (add-deck db (input-to-keyword name-for-new-deck))))


(defn change-deck-pure
  [db user-input]
  (as-> db app-state
    (put-back-old-deck app-state)
    (bring-in-new-deck app-state user-input)
    (new-current-card app-state)))


(re-frame/reg-event-db
  ::study-given-deck
  (fn study-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (change-deck-pure db deck-name)
      :study)))

(re-frame/reg-event-db
  ::edit-given-deck
  (fn edit-given-deck [db [event-id-to-ignore deck-name]]
    (change-panel
      (change-deck-pure db deck-name)
      :edit)))


) ;; end of tracer form
