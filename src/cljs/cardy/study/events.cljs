(ns cardy.study.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [input-to-card]]))

(trace-forms {:tracer (tracer :color "blue")}

; study.views uses these events:

; remove-congrats-message
; next
; exclude-card

; (def placeholder-card
;   {:front "This deck has no cards yet. Add one!"
;    :back "You can flip me. But you really should add a card!"})

(defn add-back-excluded [db]
  (assoc db :excluded #{}))


(defn add-congrats-message [db]
  (assoc db :congrats true))


; simplified:
(defn next-card [db]
  (let [cards ((:current-deck db) (:decks db))
        ineligible (if (= 1 (count cards))
                    (:excluded db)
                    (conj (:excluded db) (:current-card db)))]
    (first
      (shuffle
        (remove ineligible cards)))))


(defn new-current-card [db]
  (let [new-card (next-card db)]
    (if (nil? new-card) ;; i.e. all cards have been excluded
      (new-current-card
          (add-congrats-message
          (add-back-excluded db)))
      (assoc db :current-card new-card))))


(defn exclude-card [db]
  (let [excluded (:excluded db)
        current-card (:current-card db)]
    (-> db
      (assoc :excluded (conj excluded current-card))
      (new-current-card))))


(re-frame/reg-event-db
  ::exclude-card
  exclude-card)


(re-frame/reg-event-db
  ::next
  (fn next-handler [db]
      (new-current-card db)))


(defn remove-congrats-message [db]
  (assoc db :congrats nil))


(re-frame/reg-event-db
  ::remove-congrats-message
  remove-congrats-message)


(re-frame/reg-event-db
  ::return-home-from-study
  (fn return-home-from-study [db]
    (assoc
      (add-back-excluded db)
      :current-panel
      :home)))


;; study functionality:
;; go to next card
;; exclude this card (i.e. add current card to :excluded and go to next card)
;;

;; do you want to still have a :current-card?
;; if so, you'll need more setup in Home's study-given-deck



)
