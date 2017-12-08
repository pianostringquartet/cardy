(ns cardy.home.views
  (:require [re-frame.core :as re-frame]

            [cardy.home.subs :as subs]
            [cardy.home.events :as events]
            [cardy.edit.events :as edit-events]

            [cardy.events :as core-events]

            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "gold")}

(defn add-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "add a new deck"
        :attr {:auto-focus "true"}
        :on-change
          #(re-frame/dispatch [::events/add-deck (reset! text-val %)])])))

(defn add-deck-container []
  (let [showing? (reagent/atom false)]
    (fn add-deck-comp []
      [re-com/popover-anchor-wrapper
        :showing? showing?
        :position :right-below
        :anchor [
          re-com/button
            :label "add deck"
            :class "btn-info"
            :on-click #(reset! showing? true)]
        :popover [
          re-com/popover-content-wrapper
            :on-cancel #(reset! showing? false)
            :backdrop-opacity 0.3
            :body [add-deck]]])))

(defn clickable-pencil [deck-name]
  [re-com/md-icon-button
          :md-icon-name "zmdi-edit"
          :on-click #(re-frame/dispatch [::events/edit-given-deck deck-name])
          :size :larger
          :tooltip "Edit this deck"])

(defn clickable-trash [deck-name]
  (let [showing? (reagent/atom false)]
    (fn []
      [re-com/popover-anchor-wrapper
        :showing? showing?
        :position :right-below
        :anchor [
          re-com/md-icon-button
            :md-icon-name "zmdi-delete"
            :on-click #(reset! showing? true)
            :size :larger
            :tooltip "Delete this deck"]
        :popover [
          re-com/popover-content-wrapper
            :on-cancel #(reset! showing? false)
            :backdrop-opacity 0.3
            :body [
              re-com/v-box
                :gap "15px"
                :padding "10px"
                :children [
                  [re-com/label
                    :label (str "Really delete " (name deck-name) " deck?")]
                  [:input
                    {:type "button" :value "confirm"
                     :on-click
                       #(re-frame/dispatch [::edit-events/remove-deck deck-name])}]
                  [:input
                    {:type "button" :value "cancel"
                     :on-click #(reset! showing? false)}]]]]])))

(defn clickable-deck-name [deck-name]
  [re-com/box
    :align :center
    :child [
      re-com/hyperlink
        :attr {:cursor "pointer"}
        :tooltip "Study this deck"
        :on-click #(re-frame/dispatch
                    [::events/study-given-deck deck-name])
        :label (core-events/keyword-to-display deck-name)]])

(defn deck-clickables [deck-name]
  [re-com/border
      :border "1px dashed lightgrey"
      :child [re-com/h-box
      :padding "30px"
      :gap "20px"
      :children [
        [clickable-pencil deck-name]
        [clickable-trash deck-name]
        [clickable-deck-name deck-name]]]])

(defn deck-list []
  (let [decks @(re-frame/subscribe [::subs/decks])]
    [re-com/v-box
      :children [
        (for [deck-name (keys decks)]
          ^{:key (rand-int 99999)}
          [deck-clickables deck-name])]]))

(defn deck-search []
  (let [decks @(re-frame/subscribe [::subs/decks])
        decks-names (map #(name %) (keys decks))
        suggestion-for-search
          (fn [a-string]
              (into [])
                (take 16
                  (for [n (map #(name %) (keys decks))
                        :when (re-find (re-pattern (str "(?i)" a-string)) n)]
                    n)))]
    (fn []
      [re-com/typeahead
        :data-source suggestion-for-search
        :placeholder "search for a deck"
        :on-change
          (fn [selection]
            (if (or (empty? selection)
                    (not (some #{selection} decks-names)))
              nil ;; ignore blank or a non-deck-name inputs
              (re-frame/dispatch [::events/study-given-deck (keyword selection)])))
        :change-on-blur? true])))

(defn home-panel []
  [re-com/v-box
    :gap "50px"
    :align :center
    :children [
      [re-com/title :label "DECKS" :level :level1]
      [re-com/h-box
        :gap "20px"
        :children [
          [deck-search]
          [add-deck-container]]]
      [deck-list]]])

) ;; end of tracer form

