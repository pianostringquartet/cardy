(ns cardy.study.views
  (:require [re-frame.core :as re-frame]
            [cardy.study.subs :as subs]
            [cardy.study.events :as events]
            [cardy.events :as core-events]
            [cardy.views :as core-views]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [reanimated.core :as anim]
            [re-frame-tracer.core :refer [tracer]]))

(trace-forms {:tracer (tracer :color "gold")}

(defn return-home-button []
  [:input
    {:type "button" :value "home"
     :on-click #(re-frame/dispatch [::events/return-home-from-study])}])

; (defn wrap-text [card-text]
;   [re-com/p
;     {:style {:font-size "120%" :width "150px" :min-width "150px"}}
;     card-text])

; (defn wrap-text [card-text]
;   (core-views/wrap-text
;     card-text
;     {:font-size "120%" :width "150px" :min-width "150px"}))



(defn card-side-display [flag card-text]
  [re-com/h-box
    :children [
      [re-com/box
        :child [:img {:src flag}]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"]
      [re-com/box
        :child [re-com/scroller
          :v-scroll :auto
          :height "110px"
          :child [core-views/wrap-text
                    card-text
                    {:font-size "120%" :width "150px" :min-width "150px"}]
        :size "auto"
        :padding "20px 10px 10px 10px"
        :align-self :center]]]])


(defn congrats-message []
  (let [size (reagent/atom 0)
        width (anim/spring size)]
    (fn a-congrats-message []
      [:div
       ;; WORKAROUND: when resizing to 0 (e.g. #(reset! size 0)),
       ;; re-animated intermittently shows full-size image;
       ;; smaller resizing steps avoid this.
       [anim/timeout #(reset! size 200)]
       [anim/timeout #(reset! size 100) 2000]
       [anim/timeout #(reset! size 50) 3000]
       [anim/timeout #(reset! size 25) 4000]
       [anim/timeout #(reset! size 10) 4500]
       [anim/timeout
          #(re-frame/dispatch [::events/remove-congrats-message])
          4550]
       [:img
        {:src "good_job.png"
         :width (str @width "px")
         :on-click #(re-frame/dispatch [::events/remove-congrats-message])}]])))


(def card-style-front-and-back
  {:backface-visibility "hidden"
   :background "lightgrey"
   :position "absolute"
   :top "0"
   :left "0"
   :width "300px"
   :height "150px"
   :box-shadow "10px 10px 5px grey"})

(defn card-front []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:z-index "2"
               :transform "rotateY(0deg)"})
    :align-self :start
    :child [
      card-side-display
        @(re-frame/subscribe [::subs/front-flag])
        @(re-frame/subscribe [::subs/current-card-front])]])

(defn card-back []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:transform "rotateY(180deg)"})
    :align-self :start
    :child [
      card-side-display
        @(re-frame/subscribe [::subs/back-flag])
        @(re-frame/subscribe [::subs/current-card-back])]])

(defn card [show-back?]
  [re-com/v-box
    :style
    (let [main-style {:transition "0.6s"
                      :transform-style "preserve-3d"
                      :position "relative"}]
              (if @show-back?
                (assoc main-style :transform "rotateY(180deg)")
                main-style))
    :children [[card-front]
               [card-back]]])

(defn flippable-card []
  (let [show-back? (reagent/atom false)]
    (fn flippable-card-comp []
      [re-com/v-box
        :size "auto"
        :style {:perspective "1000px"
                :width "300px"
                :height "150px"}
        :attr {:on-click #(reset! show-back? (if @show-back? false true))}
        :children [
          [card show-back?]]])))

(defn next-card-button []
  [re-com/button
    :label "I don't know it"
    :on-click #(re-frame/dispatch [::events/next])
    :class "btn btn-warning"])

(defn exclude-current-card-button []
  [re-com/button
    :label "I know it"
    :on-click #(re-frame/dispatch [::events/exclude-card])
    :class "btn btn-success"])

(defn card-review []
  [re-com/h-box
    :gap "20px"
    :children [
      [exclude-current-card-button]
      [next-card-button]]])

(defn show-study-progress [study-progress]
  (let [study-progress (re-frame/subscribe [::subs/study-progress])]
    (fn []
      [re-com/progress-bar
        :model @study-progress
        :width "300px"
        :striped? true])))

(defn study-panel []
  (let [congrats (re-frame/subscribe [::subs/congrats])]
    (fn study-panel-comp []
      [re-com/v-box
          ; :gap "20px"
          :gap "40px"
          :padding "20px 20px 20px 20px"
          :align :center
          :children [
            [flippable-card]
            (when @congrats [congrats-message])
            [card-review]
            [show-study-progress]
            [return-home-button]
            ]])))


) ;; end of tracer form
