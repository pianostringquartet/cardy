(ns cardy.study.subs
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as core-subs]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::front-flag
  (fn front-flag [db]
    (:front-flag db)))

(re-frame/reg-sub
  ::back-flag
  (fn back-flag [db]
    (:back-flag db)))

(re-frame/reg-sub
  ::show-back?
  (fn show-back? [db]
    (:show-back? db)))

(re-frame/reg-sub
  ::preferred-face
  (fn preferred-face-handler [db]
    (:preferred-face db)))

(re-frame/reg-sub
  ::congrats
  (fn congrats [db]
    (:congrats db)))

(re-frame/reg-sub
  ::current-card
  (fn current-card [db]
    (:current-card db)))

(re-frame/reg-sub
  ::excluded
  (fn excluded [db]
    (:excluded db)))

(re-frame/reg-sub
  ::study-progress
  :<-[::core-subs/cards]
  :<-[::excluded]
  (fn study-progress [[cards excluded]]
    (Math/ceil
      (* 100
         (/ (count excluded)
            (count cards))))))

(re-frame/reg-sub
  ::current-card-front
  :<-[::current-card]
  (fn current-card-front [current-card]
    (:front current-card)))

(re-frame/reg-sub
  ::current-card-back
  :<-[::current-card]
  (fn current-card-back [current-card]
    (:back current-card)))

) ;; end of tracer form
