(ns cardy.study.subs
  (:require [re-frame.core :as re-frame]
            [cardy.events :as events]

            [cardy.subs :as core-subs]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

; study views uses:
; front-flag
; current-card-front
; back-flag
; current-card-back
; congrats



(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::current-card-front
  (fn current-card-front [db]
    (:front (:current-card db))))

(re-frame/reg-sub
  ::current-card-back
  (fn current-card-back [db]
    (:back (:current-card db))))

(re-frame/reg-sub
  ::front-flag
  (fn front-flag [db]
    (:front-flag db)))

(re-frame/reg-sub
  ::back-flag
  (fn back-flag [db]
    (:back-flag db)))


(re-frame/reg-sub
  ::congrats
  (fn congrats [db]
    (:congrats db)))


(re-frame/reg-sub
  ::excluded-count
  (fn excluded-count [db]
    (:excluded-count db)))


(re-frame/reg-sub
  ::excluded
  (fn excluded [db]
    (:excluded db)))

; a Layer 3 sub for the progress bar
(re-frame/reg-sub
  ::study-progress
  :<-[::core-subs/cards]
  :<-[::excluded]
  (fn study-progress [[cards excluded]]
    (Math/ceil
      (* 100
         (/ (count excluded)
            (count cards))))))

) ;; end of tracer form
