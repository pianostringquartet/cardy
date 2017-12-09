(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [cardy.events :as core-events]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "gold")}

(defn wrap-text [card-text style-map]
  [re-com/p
    {:style style-map}
    card-text])

(defn logout-button []
  [re-com/button
    :label "logout"
    :class "btn-danger"
    :on-click #(re-frame/dispatch [::core-events/logout])])

) ;; end of tracer form
