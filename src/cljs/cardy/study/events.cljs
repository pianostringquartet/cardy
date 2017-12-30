(ns cardy.study.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [input-to-card]]))

(trace-forms {:tracer (tracer :color "blue")}

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

(defn show-preferred-face [db]
  (let [preferred-face (:preferred-face db)]
    (if (= preferred-face :back)
      (assoc db :show-back? true)
      (assoc db :show-back? false))))

;;; ----------------------------------------
;;; Moving to new card bc "I don't know [current card]"
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

(re-frame/reg-event-db
  ::next
  (fn next-handler [db]
    (show-preferred-face
      (new-current-card db))))

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
    (show-preferred-face
      (exclude-card db))))

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
