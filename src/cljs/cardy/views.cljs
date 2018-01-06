(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [cardy.events :as core-events]
            [cljsjs.semantic-ui-react]
            [goog.object]
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


; ;; Easy handle to the top-level extern for semantic-ui-react
(def semantic-ui js/semanticUIReact)

(defn component
  "Get a component from sematic-ui-react:
    (component \"Button\")
    (component \"Menu\" \"Item\")"
  [k & ks]
  (if (seq ks)
    (apply goog.object/getValueByKeys semantic-ui k ks)
    (goog.object/get semantic-ui k)))


(def icon (component "Icon"))
(def segment (component "Segment"))
(def grid (component "Grid"))
(def grid-column (component "Grid" "Column"))
(def header (component "Header"))
(def search (component "Search"))

; not used?
(def card (component "Card"))
(def container (component "Container"))
(def grid-row (component "Grid" "Row"))
(def button (component "Button"))
(def popup (component "Popup"))

(defn sample-icon []
  [:> icon {:name "folder" :size "massive"}])

(defn sample-segment []
  [:> segment
    {:piled true :size "massive" :textAlign "center"}
    "Love is life"])

) ;; end of tracer form
