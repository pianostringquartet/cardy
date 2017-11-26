(ns cardy.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]
            [cardy.events :as events]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [reanimated.core :as anim]
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


(defn push-decks []
  [:input
    {:type "button" :value "sync decks"
     :on-click #(re-frame/dispatch [::events/push-decks])}])



; p has an implicit wrapping
(defn show-current-phrase []
  [re-com/p
    {:style
      {:font-size "130%" :width "150px" :min-width "150px"}}
    @(re-frame/subscribe [::subs/current-phrase])])






; (defn show-current-phrase []
;   [re-com/title
;     :label @(re-frame/subscribe [::subs/current-phrase])
;     :level :level2])



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

       ; :on-click #(re-frame/dispatch [::events/flip])
       :on-click #(re-frame/dispatch [::events/show-back])

       }])

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
      [re-com/v-box
        :children [
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
                          :child [deck-modal-dialog process-ok process-cancel]]
                          )
        ]
        ])))




(defn visualization []
  [re-com/v-box
    ; :size "auto"
    :align :center
    :gap "15px"
    :children [
      [:div "Cards: " @(re-frame/subscribe [::subs/cards])]
      [:div "Number of cards: " (count @(re-frame/subscribe [::subs/cards]))]
      ; [:div "Current (index): " @(re-frame/subscribe [::subs/current])]
      [:div "Excluded cards: " @(re-frame/subscribe [::subs/excluded])]
      [:div "Removed cards: " @(re-frame/subscribe [::subs/removed])]
      [:div "Available decks: " (map str (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Number of available decks: " (count (keys @(re-frame/subscribe [::subs/decks])))]
      [:div "Current deck is: " @(re-frame/subscribe [::subs/current-deck])]
      ;[:div "starter deck is:" @(re-frame/subscribe [::subs/starter-deck])]
      [show-decks]
      ]])


;; component for reviewing cards
; (defn card-review []
;   [re-com/h-box
;     :size "auto"
;     :children [
;       [exclude-current-card]
;       [flip-button]
;       [next-button]]])


(defn card-review []
  [re-com/h-box
    ; :size "initial"
    ; :size "auto"
    ; :align-self :center
    :gap "20px"
    :children [
      [exclude-current-card]
      [next-button]]])



; (defn card-review []
;   [re-com/h-box
;     ; :size "initial"
;     :size "auto"
;     ; :align-self :center
;     :children [
;       [exclude-current-card]
;       [flip-button]
;       [next-button]]])



;; this is:
;; FLAG    TEXT
;; you want both to stay put,
;; and TEXT wraps if too long


(defn show-current-card-front []
  [re-com/p
    {:style
      {:font-size "120%"
      :width "150px" :min-width "150px"
      }}
    @(re-frame/subscribe [::subs/current-card-front])])

(defn show-current-card-back []
  [re-com/p
    {:style
      {:font-size "120%"
      :width "150px" :min-width "150px"
      }}
    @(re-frame/subscribe [::subs/current-card-back])])


(defn card-front-display []
  [re-com/h-box
    ; :width "300px"
    ; :height "100px"
    :children [
      [re-com/box
        ; :child [show-current-flag]
        :child [:img {:src @(re-frame/subscribe [::subs/front-flag])}]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"
        :align-self :center
        ]
      [re-com/box
        ; :child [show-current-phrase]
        :child [show-current-card-front]

        :size "auto"
        :max-width "50px"
        :padding "20px 10px 10px 10px"
        :align-self :center]]])


(defn card-back-display []
  [re-com/h-box
    ; :width "300px"
    ; :height "100px"
    :children [
      [re-com/box
        ; :child [show-current-flag]
        :child [:img {:src @(re-frame/subscribe [::subs/back-flag])}]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"
        ; :align-self :center
        ; :justify :start
        ]
      [re-com/box
        ; :child [show-current-phrase]
        ; :child [show-current-card-back]
        :child [re-com/scroller
          :v-scroll :auto
          :height "110px"
          ; :width "100px"
          :child [show-current-card-back]]

        :size "auto"
        ; :max-width "50px"
        :padding "20px 10px 10px 10px"
        :align-self :center]]])








; (defn card-display []
;   [re-com/h-box
;     ; :width "300px"
;     ; :height "100px"
;     :children [
;       [re-com/box
;         :child [show-current-flag]
;         :width "120px"
;         :height "90px"
;         :padding "20px 10px 10px 10px"
;         ]
;       [re-com/box
;         :child [show-current-phrase]
;         :size "auto"
;         :max-width "50px"
;         :padding "20px 10px 10px 10px"
;         :align-self :center]]])


(defn card-manipulation []
  [re-com/h-box
    :size "auto"
    :children [
      [add-card]
      [remove-current-card]]])







; (defn main-components []
;   [re-com/v-box
;     :size "auto" ;; = "flex"
;     :gap "20px" ;; 10px gap between each child
;     :align :center
;     :children [
;       [card-display]
;       [card-review]
      ; [card-manipulation]
      ; [push-decks] ;; better place for this?
      ; [deck-modal]
;     ]])



;; Login / signup

;; you don't need a "form" per se
;; you just need to accept input from 3 different sources (name, email, pw),
;; store the input in the app-db as we get it (or just keep in atom?)
;; then when user hits a separate "submit" button,
;; we send the data back to the server to validate it etc.





(defn login-form []
  (let [username (reagent/atom "")
        email (reagent/atom "")
        password (reagent/atom "")]

      (fn []
        [re-com/v-box
              :gap "10px"
              :children [
                [re-com/input-text
                  :model username
                  :placeholder "username"
                  :on-change #(reset! username %)
                  :change-on-blur? true]
                [re-com/input-text
                  :model email
                  :placeholder "email"
                  :on-change #(reset! email %)
                  :change-on-blur? true]
                [re-com/input-password
                  :model password
                  :placeholder "password"
                  :on-change #(reset! password %)
                  :change-on-blur? true]
                [:input
                  {:type "button" :value "login"
                   :on-click #(re-frame/dispatch [::events/login @username
                                                                @email
                                                                @password])
                   }]

                [:input
                  {:type "button" :value "register"
                   :on-click #(re-frame/dispatch [::events/register @username
                                                                @email
                                                                @password])
                   }]

              ]
            ])
    ))






;; ViewFns: PANELS

(defn intro-picture []
  [re-com/box
  :width "450px"
  :height "300px"
  :child [:img
      {:src "intent_bear.png"}]])


;; for dev purposes
(defn intro-panel-button []
  [:input
    {:type "button" :value "intro"
     :on-click #(re-frame/dispatch [::events/change-panel :intro])}])


(defn home-panel-button []
  [:input
    {:type "button" :value "home"
     :on-click #(re-frame/dispatch [::events/change-panel :home])}])

(defn study-panel-button []
  [:input
    {:type "button" :value "study"
     :on-click #(re-frame/dispatch [::events/change-panel :study])}])

(defn edit-panel-button []
  [:input
    {:type "button" :value "edit"
     :on-click #(re-frame/dispatch [::events/change-panel :edit])}])

(defn profile-panel-button []
  [:input
    {:type "button" :value "profile"
     :on-click #(re-frame/dispatch [::events/change-panel :profile])}])


(defn display-intro-user-error []
  (let [user-error @(re-frame/subscribe [::subs/intro-error-message])]
        (when user-error
          [re-com/box
            :align-self :center
            :child
              [re-com/title
                :label user-error :level :level2]])))


(defn intro-panel []
  [re-com/v-box
    :size "auto"
    :gap "20px"
    :children [
      [re-com/h-box
        :size "auto"
        :children [
          [intro-picture]
          [re-com/title
            :label "Welcome to Cardy!" :level :level2]]]
      [login-form]
      [display-intro-user-error]
      [home-panel-button]]])


(defn home-panel []
  [re-com/v-box
    :gap "20px"
    :children [
      [re-com/title :label "HOME PANEL" :level :level1]
      [study-panel-button]
      [edit-panel-button]
      [profile-panel-button]
      [intro-panel-button]
      ]
  ])





(defn show-front-flag []
  [:img
    {:src
      @(re-frame/subscribe [::subs/front-flag])
      }])



(def card-style-front-and-back
  {:backface-visibility "hidden"
   :background "lightgrey"
   :position "absolute"
   :top "0"
   :left "0"
   :width "300px"
   ; :height "300px"
   ; :height "200px"
   :height "150px"
   })


(defn card-front []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:z-index "2"
               :transform "rotateY(0deg)"})
    :align-self :start
    :child [card-front-display]])


(defn card-back []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:transform "rotateY(180deg)"})
    :child [card-back-display]])


;; works
(defn card [show-back?]
  [re-com/v-box
    :style
    (let [main-style {
      ; :height "90px"
                      ; :width "50px"
                      :transition "0.6s"
                      :transform-style "preserve-3d"
                      :position "relative"}]
              (if @show-back?
                (assoc main-style :transform "rotateY(180deg)")
                main-style))
    :children [
      [card-front]
      [card-back]]])



;;; was flip-card-container
(defn flippable-card [show-back?]
  (let [show-back? (reagent/atom false)]
    (fn []
      [re-com/v-box
        ; :style {:perspective "1000px" :width "50px"}
        :size "auto"
        :style {:perspective "1000px"

                ;; we want this to always be at least this big
                ; :min-width "50px"
                ; :min-height "150px"

                :width "300px"
                :height "150px"

                ; :max-width "50px"
              }
        :attr {:on-click #(reset! show-back? (if @show-back? false true))}
        :children [[card show-back?]]])))





; ;;
; (defn flippable-card []
;   (let [show-back? (reagent/atom false)]
;     (fn []
;       [re-com/v-box
;         :children [
;           [flip-card-container show-back?]

;           [:input {:type "button" :value "flip the card!"
;                    :on-click #(reset! show-back? (if @show-back? false true))}]

;           ; [flip-card-container]
;           ; [:input {:type "button" :value "flip the card!"
;           ;          :on-click #(reset! show-back? (if @show-back? false true))}]

;           ]])))




(defn study-panel []
  [re-com/v-box
    :gap "20px"
    :padding "20px 20px 20px 20px"
    :align :center
    :children [
      [flippable-card]

      ;; card-review is just a component of two buttons
      ;; no styling there
      [card-review]
      [home-panel-button]
    ]

    ])





; (defn study-panel []
;   [re-com/v-box
;     :size "auto"
;     :gap "50px"
;     :align :center
;     :children [

;       [flippable-card]

;       [card-display]

;       [card-review]

;       ; [logo-component]
;       ; [flippable-card]

;       [home-panel-button]
;     ]])

(defn edit-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [card-manipulation]
      [push-decks] ;; better place for this?
      [deck-modal]
      [home-panel-button]
      ]
  ]
  )


(defn profile-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [re-com/label :label "logic for editing your profile here!"]
      [home-panel-button]

    ]])




;; logic for which panel to show
(defn show-panel []
  (case @(re-frame/subscribe [::subs/current-panel])

    ; :intro [study-panel]

    :intro [intro-panel]
    :home [home-panel]
    :study [study-panel]
    :edit [edit-panel]
    :profile [profile-panel]

    )

  )

;; i.e. show panel
(defn cardy-app []
  [show-panel])



; (defn cardy-app []
;   [re-com/v-box
;     :size "auto"
;     :gap "50px"
;     :align :center
;     :children [
;       [main-components]
;       [visualization]
;       ]])

;; Remember that each child Component in a parent Component needs to be
;; wrapped in brackets (why is this again?).
;; re-com components are not any different in this regard than a regular
;; Reagent component






) ;; end of tracer form


