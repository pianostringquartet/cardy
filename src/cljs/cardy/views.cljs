(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [cardy.events :as core-events]
            [cljsjs.semantic-ui-react]
            [goog.object]
            [re-frame-tracer.core :refer [tracer]]))

;;; ----------------------------------------
;;; Common and utility components
;;; ----------------------------------------

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

;;; ----------------------------------------
;;; Using semantic-ui-react
;;; ----------------------------------------

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

;; to be imported elsewhere in app:
(def icon (component "Icon"))
(def segment (component "Segment"))
(def grid (component "Grid"))
(def grid-column (component "Grid" "Column"))
(def search (component "Search"))
(def tab (component "Tab"))
(def tab-pane (component "Tab" "Pane"))

) ;; end of tracer form
