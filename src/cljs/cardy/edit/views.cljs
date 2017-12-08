(ns cardy.edit.views
  (:require [re-frame.core :as re-frame]

            [cardy.edit.subs :as subs]
            [cardy.subs :as core-subs]

            [cardy.edit.events :as events]
            [cardy.events :as core-events]

            [cardy.views :as core-views]

            [reagent.core :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

(trace-forms {:tracer (tracer :color "gold")}


(defn return-home-button []
  [:input
    {:type "button" :value "return home"
     :on-click #(re-frame/dispatch [::events/return-home-from-edit])}])


; (defn wrap-edit-text [card-text]
;   [re-com/p
;     {:style
;       {:font-size "90%"
;       :width "120px" :min-width "120px"
;       }}
;     card-text])

; (defn wrap-edit-text [card-text]
;   (core-views/wrap-text
;     card-text
;     {:font-size "120%" :width "150px" :min-width "150px"}))


(defn card-edit-display [{:keys [front back]}]
  [re-com/border
      :border "1px dashed lightgrey"
      ; top, right, bottom, left
      :padding "10px 10px 0px 10px"
      :child [re-com/h-box
          :size "auto"
          :align-self :center
          :children [
            [re-com/scroller
              :v-scroll :auto
              :height "45px"
              :child [core-views/wrap-text
                      front
                      {:font-size "120%" :width "150px" :min-width "150px"}]]
            [re-com/scroller
              :v-scroll :auto
              :height "45px"
              :child [core-views/wrap-text
                      back
                      {:font-size "120%" :width "150px" :min-width "150px"}]]]]])


(defn clickable-trash-icon [card]
  [re-com/box
    :child [:img
      {:src "trash_icon.png"
        :style {:max-width "20px" :max-height "20px"}
        :on-click #(re-frame/dispatch [::events/remove-card card])}]])


(defn trash-and-card [card]
  [re-com/h-box
    :gap "10px"
    :children [
      [clickable-trash-icon card]
      [card-edit-display card]]])


(defn card-displayer [card]
  [re-com/box
    :padding "10px"
    :child [trash-and-card card]])

(defn card-list []
  (let [cards @(re-frame/subscribe [::core-subs/cards]) ;; will be a set
        removed-cards @(re-frame/subscribe [::subs/removed])]
    [re-com/v-box
      :children [
        (for [card (clojure.set/difference cards removed-cards)]
          ^{:key (rand-int 99999)}
          [card-displayer card])]]))

(defn add-card []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "new card: the front ; the back"
        :attr {:auto-focus "true"}
        :on-change
          #(if (empty? %)
            nil ;; i.e. do nothing if input is empty
            (re-frame/dispatch [::events/add-card (reset! text-val %)]))])))

(defn edit-panel []
  [re-com/v-box
    :padding "50px 0px 20px 0px"
    :gap "20px"
    :align :center
    :children [
      [add-card]
      [card-list]
      ; [home-panel-button]
      [return-home-button]
    ]])


) ;; end of tracer form


