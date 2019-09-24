(ns cardy.study.events
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.events :refer [goto show-preferred-face]]))


(trace-forms {:tracer (tracer :color "blue")}

;;; ----------------------------------------
;;; Congratulating user on finishing deck
;;; ----------------------------------------

(defn show-congrats-message [db]
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
  (fn update-preferred-face-handler [db [_ face]]
    (assoc db :preferred-face face)))

;;; ----------------------------------------
;;; Moving to new card: helper fns
;;; ----------------------------------------

(defn pick-random [coll]
  (first (shuffle coll)))

(defn ineligible-cards [cards excluded current-card]
  (if (= 1 (count (clojure.set/difference cards excluded)))
    ;; if all other cards were excluded, permit current-card to be chosen
    excluded
    (conj excluded current-card)))

(defn add-back-excluded [db]
  (assoc db :excluded #{}))

(defn new-current-card [db]
  (let [cards ((:current-deck db) (:decks db))
        excluded (:excluded db)
        current-card (:current-card db)
        eligible-cards (remove
                         (ineligible-cards cards excluded current-card)
                         cards)]
    (if (= cards excluded) ; all cards excluded?
      (-> db
        (add-back-excluded)
        (show-congrats-message)
        (new-current-card))
      (assoc db :current-card (pick-random eligible-cards)))))

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
  exclude-card)

;;; ----------------------------------------
;;; Moving to a new card: control flow
;;; ----------------------------------------

;; HACK:
;; Let the CSS Transition (used to "flip" the card) go for a bit,
;; lest user see the new card's front/back immediately.
(re-frame/reg-fx
  :new-card-when-flip-ends
  (fn new-card-when-flip-ends-handler [new-card-event]
    (js/setTimeout
      #(re-frame/dispatch [new-card-event])
      200)))

(re-frame/reg-event-fx
  ::new-card
  (fn new-card-handlder [cofx [_ old-card-status]]
    {:db
        (show-preferred-face (:db cofx))
     :new-card-when-flip-ends
       (if (= old-card-status :old-card-known)
        ::exclude-card
        ::next)}))

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
    (-> db
      (add-back-excluded)
      (remove-congrats-message)
      (goto :home))))


) ;; end of tracer form
