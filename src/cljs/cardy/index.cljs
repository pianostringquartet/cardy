(ns cardy.index
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]
            [cardy.events :as events]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [reanimated.core :as anim]
            [cardy.auth.views :refer [
              login-form
              intro-panel
              pw-reset-panel]]
            [cardy.home.views :refer [home-panel]]
            [cardy.edit.views :refer [edit-panel]]
            [cardy.study.views :refer [study-panel]]))


(trace-forms {:tracer (tracer :color "gold")}

(defn cardy-app []
  (case @(re-frame/subscribe [::subs/current-panel])
    :auth [intro-panel]
    :home [home-panel]
    :study [study-panel]
    :edit [edit-panel]
    :pw-reset [pw-reset-panel]))

) ;; end of tracer form

