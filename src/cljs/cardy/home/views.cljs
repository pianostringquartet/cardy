(ns cardy.home.views
  (:require [re-frame.core :as re-frame]
            [cardy.home.subs :as subs]
            [cardy.home.events :as events]
            [cardy.edit.events :as edit-events]
            [cardy.views :as core-views]
            [cardy.views :refer [grid grid-column segment icon search]]
            [cardy.utils :refer [str->kw kw->str]]
            [reagent.core :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.utils :as utils]))


;;; ----------------------------------------
;;; HOME PANEL
;;; where user can add a new deck,
;;; or edit/delete/study an existing deck
;;; ----------------------------------------

(trace-forms {:tracer (tracer :color "gold")}

;;; ----------------------------------------
;;; Adding a new deck
;;; ----------------------------------------

(defn add-deck []
  (let [text-val (reagent/atom "")]
    (fn add-deck-text-input []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "add a new deck"
        :attr {:auto-focus "true"}
        :on-change
          #(if (empty? %)
            nil ;; i.e. do nothing if input is empty
            (re-frame/dispatch [::events/add-deck (reset! text-val %)]))])))

(defn add-deck-container []
  (let [showing? (reagent/atom false)]
    (fn add-deck-popover []
      [re-com/popover-anchor-wrapper
        :showing? showing?
        :position :below-center
        :anchor [
          re-com/button
            :label "add deck"
            :class "btn btn-success"
            :on-click #(reset! showing? true)]
        :popover [
          re-com/popover-content-wrapper
            :on-cancel #(reset! showing? false)
            :backdrop-opacity 0.3
            :body [add-deck]]])))

;;; ----------------------------------------
;;; Searching existing decks
;;; ----------------------------------------

(defn on-result-select [e obj]
  (let [deck-name (.-title (.-result obj))]
    (re-frame/dispatch [::events/study-deck (str->kw deck-name)])))

(defn suggestions [user-input decks]
  (let [deck-names (map #(kw->str %) (keys decks))
        matches-input?
          (fn [deck] (re-find (re-pattern (str "(?i)" user-input)) deck))]
    (into #{}
      (take 10
        (for [deck-name deck-names :when (matches-input? deck-name)]

          {:title deck-name :description ""})))))

(defn on-search-change [decks text-val results e obj]
  (let [user-input (.-value obj)]
    (do
      (reset! text-val user-input)
      (reset! results (suggestions user-input @decks)))))

(defn deck-search []
  (let [text-val (reagent/atom "")
        ;; semantic-ui-react expects 'results' as "array of {:tite :description}"
        results (reagent/atom #{})
        decks (re-frame/subscribe [::subs/decks])]
    (fn deck-search-typeahead []
      [:> search
        {:onResultSelect #(on-result-select %1 %2)
         :onSearchChange #(on-search-change decks text-val results %1 %2)
         :results @results
         :value @text-val}])))

;;; ----------------------------------------
;;; Listing existing decks
;;; ----------------------------------------

(defn clickable-pencil [deck-name]
  [re-com/md-icon-button
    :md-icon-name "zmdi-edit"
    :on-click #(re-frame/dispatch [::events/edit-deck deck-name])
    :size :larger
    :tooltip "Edit this deck"])

(defn clickable-trash [deck-name]
  (let [showing? (reagent/atom false)]
    (fn clickable-trash-popover []
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
                    :label (str "Really delete " (utils/kw->str deck-name) "?")]
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
        :on-click #(re-frame/dispatch [::events/study-deck deck-name])
        :label (kw->str deck-name)]])

(defn deck-clickables [deck-name]
  [:> segment
    {:stacked true}
    [:> grid
      {:columns 3 :padded true}
      [:> grid-column
        {:width 3}
        [clickable-pencil deck-name]]
      [:> grid-column
        {:width 3}
        [clickable-trash deck-name]]
      [:> grid-column
        [clickable-deck-name deck-name]]]])

(defn deck-list []
  (let [decks (re-frame/subscribe [::subs/decks])]
    (fn []
      [re-com/v-box
        :children [
          (for [deck-name (keys @decks)]
            ^{:key deck-name}
            [deck-clickables deck-name])]])))

;;; ----------------------------------------
;;; Main view
;;; ----------------------------------------

(defn home-panel []
  [re-com/v-box
    :gap "40px"
    :align :center
    :children [
      [re-com/h-box
        :gap "40px"
        :children [
          [re-com/title :label "DECKS" :level :level1]
          [re-com/box
            :align-self :center
            :child [core-views/logout-button]]]]
      [re-com/h-box
        :gap "20px"
        :children [
          [deck-search]
          [add-deck-container]]]
      [deck-list]
      [:br]]])

) ;; end of tracer form

