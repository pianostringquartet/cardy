(ns cardy.study.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [new-current-card input-to-card]]))

(trace-forms {:tracer (tracer :color "blue")}

; study.views uses these events:

; remove-congrats-message
; next
; exclude-card

(defn face-front [db]
  (assoc db :current-face :front))

(defn exclude-card [db]
  (let [excluded (:excluded db)
        current-card (:current-card db)]
    (as-> db app-state ;; just use -> ?
      (assoc app-state :excluded (conj excluded current-card))
      (new-current-card app-state)
      (face-front app-state)

      ;; added
      (assoc app-state :excluded-count (inc (:excluded-count db)))

      )
    ))

(re-frame/reg-event-db
  ::exclude-card
  exclude-card)


(re-frame/reg-event-db
  ::next
  (fn next-handler [db]
    (face-front
      (new-current-card db))))


(defn remove-congrats-message [db]
  (assoc db :congrats nil))

(re-frame/reg-event-db
  ::remove-congrats-message
  remove-congrats-message)


)
