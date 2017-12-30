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


;;; ----------------------------------------
;;; STUDY PANEL
;;; where user can progress through cards
;;; from a single deck
;;; ----------------------------------------

(trace-forms {:tracer (tracer :color "gold")}

;;; ----------------------------------------
;;; Moving between cards
;;; ----------------------------------------

(defn button-face-selected? [preferred-face button-face]
  (if (= button-face @preferred-face)
    "btn btn-danger"
    "btn"))

(defn prefer-front-button []
  (let [preferred-face (re-frame/subscribe [::subs/preferred-face])]
    (fn []
      [re-com/button
        :label "show new cards' front"
        :on-click #(re-frame/dispatch [::events/update-preferred-face :front])
        :class (button-face-selected? preferred-face :front)])))

(defn prefer-back-button []
  (let [preferred-face (re-frame/subscribe [::subs/preferred-face])]
    (fn []
      [re-com/button
        :label "show new cards' back"
        :on-click #(re-frame/dispatch [::events/update-preferred-face :back])
        :class (button-face-selected? preferred-face :back)])))

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

(defn flip-card-button []
  [re-com/button
    :label "flip"
    :on-click #(re-frame/dispatch [::events/flip-card])
    :class "btn btn-default"])

(defn card-navigation []
  [re-com/h-box
    :gap "20px"
    :children [
      [exclude-current-card-button]
      [flip-card-button]
      [next-card-button]]])

;;; ----------------------------------------
;;; Progress bar and congrats
;;; ----------------------------------------

(defn show-study-progress [study-progress]
  (let [study-progress (re-frame/subscribe [::subs/study-progress])]
    (fn []
      [re-com/progress-bar
        :model @study-progress
        :width "300px"
        :striped? true])))

;; TODO:
;; Make remove congrats message when user exits Study
(defn congrats-message []
  (let [size (reagent/atom 0)
        width (anim/spring size)]
    (fn a-congrats-message []
      [:div
       ;; HACK: when resizing to 0 (e.g. #(reset! size 0)),
       ;; re-animated intermittently shows full-size image;
       ;; smaller resizing steps avoid this.
       [anim/timeout #(reset! size 200)]
       [anim/timeout #(reset! size 100) 1500]
       [anim/timeout #(reset! size 50) 2500]
       [anim/timeout #(reset! size 25) 3000]
       [anim/timeout #(reset! size 10) 3500]
       [anim/timeout
          #(re-frame/dispatch [::events/remove-congrats-message])
          3550]
       [:img
        {:src "/img/good_job.png"
         :width (str @width "px")
         :on-click #(re-frame/dispatch [::events/remove-congrats-message])}]])))

;;; ----------------------------------------
;;; Displaying a card
;;; ----------------------------------------

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

;; Card flip effect is achieved via CSS
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
  (let [show-back? (re-frame/subscribe [::subs/show-back?])]
    (fn flippable-card-comp []
      [re-com/v-box
        :size "auto"
        :style {:perspective "1000px"
                :width "300px"
                :height "150px"}
        :attr {:on-click #(re-frame/dispatch [::events/flip-card])}
        :children [
          [card show-back?]]])))

;;; ----------------------------------------
;;; Panel and navigation
;;; ----------------------------------------

(defn return-home-button []
  [re-com/button
    :label "return home"
    :class "btn btn-info"
    :on-click #(re-frame/dispatch [::events/return-home-from-study])])

(defn study-panel []
  (let [congrats (re-frame/subscribe [::subs/congrats])]
    (fn study-panel-comp []
      [re-com/v-box
          :gap "40px"
          :padding "20px 20px 20px 20px"
          :align :center
          :children [
            [flippable-card]
            (when @congrats [congrats-message])
            [card-navigation]
            [show-study-progress]
            [re-com/h-box
              :gap "10px"
              :children [
                [prefer-front-button]
                [prefer-back-button]
                [return-home-button]]]
            ]])))

) ;; end of tracer form
