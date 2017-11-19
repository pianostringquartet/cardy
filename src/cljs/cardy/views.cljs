(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]
            [cardy.events :as events]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            ))

(trace-forms {:tracer (tracer :color "gold")}




;; from cardy.core.cljs:


(def new-color-deck-2
  '({:deck "die Farben" :front "grau", :back "grey"}
    {:deck "die Farben" :front "gelb", :back "yellow"}
    {:deck "die Farben" :front "rot", :back "red"}
    {:deck "die Farben" :front "violett", :back "purple"}))

(defn show-decks []
  [:div "Current decks are: " @(re-frame/subscribe [::subs/show-decks])])

;; So for each (update-deck, get-deck, remove-deck action) you need:
;; 1. a Component to accept user input
;; 2. an AJAX'ing function to send user input to server and get back response
;; 3. a re-frame event (+ event handler fn) to put response into app-db

;; Note that in L's get-docs example, the AJAX fn (2) actually has
;; the re-frame event dispatch (3) as its (successful response) :handler
;; ... So the Component's on-change fn is an AJAX fn

;; When something happens in the app, does it always need to be an event?
;; Maybe, any thing that changes the app-db needs to be an event?

;; how do you handle managing another, external source of data?
;; you DON'T! you're just using the external db to persist data;
;; but in a given "use session", all the important data will be in app-db

;; e.g. a Component's button being pressed can
;; first trigger an AJAX call, but for the result of that

;; hmmm, re-frame docs recommend against this approach;
;; rf recommends effectful handlers via re-frame-http-fx

;; remember, rf views are just display logic;
;; so ajax-call logic should be in a handler





; (defn get-deck-ajax [deck-name]
;   (GET "/get-deck"
;     {:params
;         {:deck-name deck-name}
;      :handler
;         (fn [response]
;           (do
;             (js/console.log "response was " response)
;             (js/console.log "response type was " (type response))
;             (js/console.log "first response" (first response))
;             (re-frame/dispatch [::events/set-deck deck-name response])
;             ))
;         }))

; (defn get-deck []
;   (let [text-val (reagent/atom "")]
;     (fn []
;       [re-com/input-text
;         :model text-val
;         :change-on-blur? true
;         :placeholder "name of deck to retrieve, eg die Farben"
;         :on-change #(get-deck-ajax (reset! text-val %))])))


; (defn update-deck-ajax [deck-name deck]
;   (POST "/update-deck"
;     {:params
;         {:deck-name deck-name :deck deck}
;      :handler
;         (fn [response]
;           ;; response should just be 200 OK
;           (js/console.log "update-deck-ajax response was " response))}))


;; in flashy, you'll probably be programmatically providing the deck to switch in
;; ... but will depend on how you SYNC decks
;; bc this is really for SYNCING (saving) decks;
; (defn update-deck []
;   (let [text-val (reagent/atom "")]
;     (fn []
;       [re-com/input-text
;         :model text-val
;         :change-on-blur? true
;         :placeholder "for now just use: die Farben"
;         :on-change #(update-deck-ajax "die Farben" new-color-deck-2)])))
;; just have functionality to add back a deck,
;; so you can test the remove-deck stuff too



;; depends on how you will call this...
;; but for now you're not writing the event dispatch;
; (defn remove-deck-ajax [deck-name]
;   (GET "/remove-deck"
;     {:params
;         {:deck-name deck-name}
;      :handler
;         (fn [response]
;           ;; response should just be 200 OK
;           (js/console.log "remove-deck-ajax response was " response))}))


; (defn remove-deck []
;   (let [text-val (reagent/atom "")]
;     (fn []
;       [re-com/input-text
;         :model text-val
;         :change-on-blur? true
;         :placeholder "name of deck to remove, eg die Farben"
;         :on-change #(remove-deck-ajax (reset! text-val %))])))


(defn push-decks []
  [:input
    {:type "button" :value "sync decks"
     :on-click #(re-frame/dispatch [::events/push-decks])}])




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
    :gap "15px"
    :children [
      [:div "Cards: " @(re-frame/subscribe [::subs/cards])]
      [:div "Number of cards: " (count @(re-frame/subscribe [::subs/cards]))]
      [:div "Current (index): " @(re-frame/subscribe [::subs/current])]
      [:div "Excluded cards: " @(re-frame/subscribe [::subs/excluded])]
      [:div "Available decks: " (map str (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Number of available decks: " (count (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Current deck is: " @(re-frame/subscribe [::subs/current-deck])]
      ;[:div "starter deck is:" @(re-frame/subscribe [::subs/starter-deck])]
      [show-decks]
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
      [push-decks] ;; better place for this?
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
