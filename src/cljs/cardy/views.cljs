(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            ))

(trace-forms {:tracer (tracer :color "gold")}

(defn wrap-text [card-text style-map]
  [re-com/p
    {:style style-map}
    card-text])

) ;; end of tracer form


