(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]
            [cardy.events :as events]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            ))


 (trace-forms {:tracer (tracer :color "gold")}


;; the words/phrase on the :current-face of the current card :-)
; (defn show-current-phrase []
;   [:div @(re-frame/subscribe [::subs/current-phrase])])

(defn show-current-phrase []
  [re-com/title
    :label @(re-frame/subscribe [::subs/current-phrase])
    :level :level2])

(defn current-flag []
  (let [current-face @(re-frame/subscribe [::subs/current-face])]
    (if (= current-face :front)
      "german-flag-small.jpg"
      "american-flag-medium.jpg")))

(defn show-current-flag []
  [:img
      {:src (current-flag)}])

(defn flip-button []
    [:input
      {:type "button" :value "flip"
       :on-click #(re-frame/dispatch [::events/flip])}])

;; i.e. "I don't know this "
(defn next-button []
    [:input
      {:type "button" :value "I don't know it"
       :on-click #(re-frame/dispatch [::events/next])}])

;; i.e. "I know this"
(defn exclude-current-card []
    [:input
      {:type "button" :value "I know it"
       :on-click #(re-frame/dispatch [::events/exclude-card])}])

(defn deck-choices []
  (let [available-decks (keys @(re-frame/subscribe [::subs/decks]))
        as-choice (fn [x] {:id (name x) :label (name x)})]
    (mapv as-choice available-decks)))

(defn deck-dropdown []
  (let [selected-deck (reagent/atom nil)]
    (fn []
      [:div "Decks:"
      [re-com/single-dropdown
                  :choices (deck-choices)
                  :model selected-deck
                  :placeholder "select a deck"
                  :width "300px"
                  :max-height "400px"
                  :on-change
                    #(re-frame/dispatch [::events/change-deck (reset! selected-deck %)])
                  ]])))


(defn add-card []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "new card: the front ; the back"
        :on-change
          #(re-frame/dispatch [::events/add-card (reset! text-val %)])])))


;; when you remove a card, if that renders the deck empty,
;; then remove that deck too
;; (this logic should handled in events;
;; e.g. removing the last card in a deck also triggers an :events/remove-deck event)
(defn remove-current-card []
    [:input
      {:type "button" :value "throw away current card"
       :on-click #(re-frame/dispatch [::events/remove-card])}])


;; when you add a deck, you should be required to add a card too
#_(defn add-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "add a new deck"
        :on-change
          #(re-frame/dispatch [::events/add-deck (reset! text-val %)])])))

;; so you need more complicated logic here
;; i.e. you need to show the "add-card" option here too
;; ... you're basically saying that a deck can't be empty.
;; What you probably need is a form, with two text entry spots?
;; deck name then first card in deck.


;; A deck is only "empty" (i.e. contains no cards) if :cards is empty
;; AND :excluded is empty too
(defn add-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "add a new deck"
        :on-change
          #(re-frame/dispatch [::events/add-deck (reset! text-val %)])])))




(defn remove-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "remove a deck"
        :on-change
          #(re-frame/dispatch [::events/remove-deck (reset! text-val %)])])))

;; where we have the actual options for manipulating decks
(defn deck-modal-dialog
  [process-ok process-cancel]
  [re-com/v-box
    :padding "10px"
    :gap "10px"
    :style {:backdrop-color "blue"}
    :children [[re-com/title :label "Change, add or delete a deck"]
               [deck-dropdown]
               [add-deck]
               [remove-deck]
               [re-com/button :label "Done" :on-click process-ok]]])


;; modal for deck manipulation
;; this controls the display (show, not show) of the modal-dialog
(defn deck-modal []
  (let [show? (reagent/atom false)
        process-ok (fn [event]
                         (reset! show? false)
                         false)
        process-cancel (fn [event]
                         (reset! show? false)
                         false)]
    (fn []
      [:div
        [re-com/button
          :label "Decks"
          :class "btn-info"
          ;:on-click #(do
           ; (reset! show? true))]
           :on-click #(reset! show? true)]
        (when @show? [re-com/modal-panel
                        :backdrop-color "grey"
                        :backdrop-opacity 0.4
                        ;:child [:div "I am a child!"]])
                        :child [deck-modal-dialog process-ok process-cancel]])
        ])))


(defn visualization []
  [re-com/v-box
    ; :size "auto"
    :align :center
    :children [
      [:div "Cards: " @(re-frame/subscribe [::subs/cards])]
      [:div "Number of cards: " (count @(re-frame/subscribe [::subs/cards]))]
      [:div "Current (index): " @(re-frame/subscribe [::subs/current])]
      [:div "Excluded cards: " @(re-frame/subscribe [::subs/excluded])]
      [:div "Available decks: " (map str (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Number of available decks: " (count (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Current deck is: " @(re-frame/subscribe [::subs/current-deck])]
      ;[:div "starter deck is:" @(re-frame/subscribe [::subs/starter-deck])]
      ]])


;; component for reviewing cards
(defn card-review []
  [re-com/h-box
    :size "auto"
    :children [
      [exclude-current-card]
      [flip-button]
      [next-button]]])

;comp for displaying current card (inc. flags)
; (defn card-display []
;   [re-com/h-box
;     :size "auto"
;     :children [
;       [show-current-flag]
;       [show-current-phrase]]])


(defn card-display []
  [re-com/h-box
    :children [
      [re-com/box
        :child [show-current-flag]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"]
      [re-com/box
        :child [show-current-phrase]
        :align :center
        :padding "20px"]]])


(defn card-manipulation []
  [re-com/h-box
    :size "auto"
    :children [
      [add-card]
      [remove-current-card]]])

(defn main-components []
  [re-com/v-box
    :size "auto" ;; = "flex"
    :gap "20px" ;; 10px gap between each child
    :children [
      [card-display]
      [card-review]
      [card-manipulation]
      [deck-modal]]])

(defn cardy-app []
  [re-com/v-box
    :size "auto"
    :gap "50px"
    :align :center
    :children [
      [main-components]
      [visualization]]])

;; Remember that each child Component in a parent Component needs to be
;; wrapped in brackets (why is this again?).
;; re-com components are not any different in this regard than a regular
;; Reagent component

) ;; end of tracer form
