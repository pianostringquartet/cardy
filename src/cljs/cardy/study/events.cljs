(ns cardy.study.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [cardy.events :as core-events]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.events :refer [input-to-card]]))

(trace-forms {:tracer (tracer :color "blue")}

; (defn call-after-card-flip-transition [f db]
;   (do
;     (js/setTimeout f 1000)
;     db))

;;; ----------------------------------------
;;; Congratulating user on finishing deck
;;; ----------------------------------------

(defn add-congrats-message [db]
  (assoc db :congrats true))

(defn remove-congrats-message [db]
  (assoc db :congrats nil))

(re-frame/reg-event-db
  ::remove-congrats-message
  remove-congrats-message)

;;; ----------------------------------------
;;; User preference: front vs back on new card
;;; ----------------------------------------

(re-frame/reg-event-db
  ::update-preferred-face
  (fn update-preferred-face-handler [db [event-id-to-ignore face]]
    (assoc db :preferred-face face)))

; (defn show-preferred-face [db]
;   (let [preferred-face (:preferred-face db)]
;     (if (= preferred-face :back)
;       (assoc db :show-back? true)
;       (assoc db :show-back? false))))

;;; ----------------------------------------
;;; Moving to new card: helper fns
;;; ----------------------------------------

(defn pick-random [coll]
  (first (shuffle coll)))

(defn ineligible-cards [cards excluded current-card]
  (if (= 1 (count (clojure.set/difference cards excluded)))
    ;; if all the other cards were excluded, allow current-card to be chosen
    excluded
    (conj excluded current-card)))

(defn eligible-cards [cards excluded current-card]
  (remove
    (ineligible-cards cards excluded current-card)
    cards))

(defn know-all-cards? [cards excluded]
  (= cards excluded))

(defn add-back-excluded [db]
  (assoc db :excluded #{}))

(defn new-current-card [db]
  (let [cards ((:current-deck db) (:decks db))
        excluded (:excluded db)
        current-card (:current-card db)]
    (if (know-all-cards? cards excluded)
      (add-congrats-message
        (add-back-excluded db))
      (assoc
        db
        :current-card
        (pick-random (eligible-cards cards excluded current-card))))))

;;; ----------------------------------------
;;; Moving to new card bc "I don't know [current card]"
;;; ----------------------------------------

(re-frame/reg-event-db
  ::next
  (fn next-handler [db]
    (new-current-card db)))

;;; ----------------------------------------
;;; Moving to new card bc "I *know* [current card]"
;;; ----------------------------------------

(defn exclude-card [db]
  (let [excluded (:excluded db)
        current-card (:current-card db)]
    (-> db
      (assoc :excluded (conj excluded current-card))
      (new-current-card))))

(re-frame/reg-event-db
  ::exclude-card
  (fn exclude-card-handler [db]
    (exclude-card db)))


;;; ----------------------------------------
;;; Moving to a new card: control flow
;;; ----------------------------------------

(re-frame/reg-fx
  :new-card-when-flip-ends
  (fn new-card-when-flip-ends-handler [card-known?]
    (let [new-card-event (if card-known? ::exclude-card ::next)]
      (js/setTimeout
        #(re-frame/dispatch [new-card-event])
        200))))

(re-frame/reg-event-fx
  ::new-card
  (fn new-card-handlder [cofx [event-id-to-ignore old-card-status]]
    (let [card-known? (if (= old-card-status :old-card-known) true false)]
      {:db (core-events/show-preferred-face (:db cofx))
         :new-card-when-flip-ends card-known?})))

;;; ----------------------------------------
;;; Navigation
;;; ----------------------------------------

(re-frame/reg-event-db
  ::flip-card
  (fn flip-card [db]
    (update db :show-back? not)))

(re-frame/reg-event-db
  ::return-home-from-study
  (fn return-home-from-study [db]
    (remove-congrats-message
      (assoc (add-back-excluded db) :current-panel :home))))

) ;; end of tracer form
