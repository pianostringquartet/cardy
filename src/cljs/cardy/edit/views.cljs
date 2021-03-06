(ns cardy.edit.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as core-subs]
            [cardy.edit.events :as events]
            [cardy.views :refer [segment grid grid-column]]
            [reagent.core :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


;;; ----------------------------------------
;;; EDIT PANEL
;;; where user can add or remove cards
;;; from a single deck
;;; ----------------------------------------

(trace-forms {:tracer (tracer :color "gold")}

(defn card-edit-display [{:keys [front back]}]
  [:> segment
    {:style {:minWidth "300px" :maxWidth "400px" :minHeight "100px"}}
    [:> grid
      {:columns 2 :padded true}
      [:> grid-column front]
      [:> grid-column back]]])

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
