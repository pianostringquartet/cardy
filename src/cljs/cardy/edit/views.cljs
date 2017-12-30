(ns cardy.edit.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as core-subs]
            [cardy.edit.events :as events]
            [cardy.events :as core-events]
            [cardy.views :as core-views]
            [reagent.core :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


;;; ----------------------------------------
;;; EDIT PANEL
;;; where user can add or remove cards
;;; from a single deck
;;; ----------------------------------------

(trace-forms {:tracer (tracer :color "gold")}

(defn card-edit-display [{:keys [front back]}]
  [re-com/border
      :border "1px dashed lightgrey"
      :padding "10px 10px 0px 10px"
      :child [re-com/h-box
          :size "auto"
          :align-self :center
          :children [
            [re-com/scroller
              :v-scroll :auto
              :height "80px"
              :child [core-views/wrap-text
                      front
                      {:font-size "100%" :width "150px" :min-width "150px"}]]
            [re-com/scroller
              :v-scroll :auto
              :height "80px"
              :child [core-views/wrap-text
                      back
                      {:font-size "100%" :width "150px" :min-width "150px"}]]]]])

(defn clickable-trash-icon [card]
    [re-com/md-icon-button
      :md-icon-name "zmdi-delete"
      :on-click #(re-frame/dispatch [::events/remove-card card])
      :tooltip "Delete this card"])

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
  (let [cards @(re-frame/subscribe [::core-subs/cards])]
    [re-com/v-box
      :children [
        (for [card cards]
          ^{:key (rand-int 99999)}
          [card-displayer card])]]))

(defn add-card []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "new card front ; new card back"
        :attr {:auto-focus "true"}
        :on-change
          #(if (empty? %)
            nil ;; i.e. do nothing if input is empty
            (re-frame/dispatch [::events/add-card (reset! text-val %)]))])))

(defn return-home-button []
  [re-com/button
    :label "return home"
    :class "btn btn-info"
    :on-click #(re-frame/dispatch [::events/return-home-from-edit])])

(defn edit-panel []
  [re-com/v-box
    :padding "50px 0px 20px 0px"
    :gap "20px"
    :align :center
    :children [
      [re-com/h-box
        :gap "10px"
        :padding "5px"
        :children [
          [add-card]
          [return-home-button]]]
      [card-list]]])

) ;; end of tracer form
