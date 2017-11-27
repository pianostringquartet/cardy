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
                  :max-height "180px"
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

                          ; :style {:max-width "200px"}


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


(defn card-review []
  [re-com/h-box
    ; :size "initial"
    ; :size "auto"
    ; :align-self :center
    :gap "20px"
    :children [
      [exclude-current-card]
      [next-button]]])


(defn show-flag [flag]
  [:img {:src flag}])


;; better: a single wrap-text, taking
;; card-text and style-map as parameters
(defn wrap-text [card-text]
  [re-com/p
    {:style
      {:font-size "120%"
      :width "150px" :min-width "150px"
      }}
    card-text])

(defn wrap-edit-text [card-text]
  [re-com/p
    {:style
      {:font-size "90%"
      ; :width "150px" :min-width "150px"
      ; :width "100px" :min-width "100px"
      :width "120px" :min-width "120px"
      }}
    card-text])


;; better?: flag and text display
(defn card-side-display [flag card-text]
  [re-com/h-box
    :children [
      [re-com/box
        :child [show-flag flag]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"]
      [re-com/box
        :child [re-com/scroller
          :v-scroll :auto
          :height "110px"
          :child [wrap-text card-text]]
        :size "auto"
        :padding "20px 10px 10px 10px"
        :align-self :center]
        ]])


(defn card-manipulation []
  [re-com/h-box
    :size "auto"
    :children [
      [add-card]
      [remove-current-card]]])



;; Login / signup

;; you don't need a "form" per se
;; you just need to accept input from 3 different sources (name, email, pw),
;; store the input in the app-db as we get it (or just keep in atom?)
;; then when user hits a separate "submit" button,
;; we send the data back to the server to validate it etc.


(defn forgot-pw-form []
  ; (let [email (reagent/atom "")]
  (let [email (reagent/atom "")
        pw-reset-message @(re-frame/subscribe [::subs/pw-reset-message])]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Password reset"]

          ;; enter email address
          [re-com/input-text
              :model email
              :placeholder "email"
              :on-change #(reset! email %)
              :change-on-blur? true]
          [:input
              {:type "button" :value "send password reset code"
               :on-click #(re-frame/dispatch
                            [::events/send-pw-reset-email @email])}]
          ;; i.e. only show pw-reset-message
          ;; when there's something to show!
          (when pw-reset-message
            [re-com/label :label pw-reset-message])
          ]
      ])))


(defn login-form []
  (let [username (reagent/atom "")
        email (reagent/atom "")
        password (reagent/atom "")]
      (fn []
        [re-com/v-box
              :gap "10px"
              :children [
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

                [re-com/h-box
                  :children [
                    [:input
                      {:type "button" :value "login"
                       :on-click #(re-frame/dispatch [::events/login @username
                                                                    @email
                                                                    @password])}]
                    [:input
                      {:type "button" :value "register"
                       :on-click #(re-frame/dispatch [::events/register @username
                                                                    @email
                                                                    @password])}]
                  ]]]])))






;; ViewFns: PANELS

(defn intro-picture []
  [re-com/box
  ; :width "450px"
  ; :height "300px"

  ; :size "auto"
  ; :size "0 0 200px"

  ;; on iPhone 6 vertical position,
  ;; he doesn't get resized?
  ;; flexbox is a little beyond me at the moment...

  ; :min-width "100px"
  ; :min-height "50px"
  :max-width "300px"
  :max-height "200px"

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
                :label user-error :level :level3
                :style {:color "red" :font-size "14px"}
                ]
          ]
                )))


(defn intro-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [intro-picture]
      [re-com/v-box
        :gap "5px"
        :children [
          [login-form]
          [display-intro-user-error]

          [forgot-pw-form]
          ]]
      [home-panel-button]]])


(defn home-panel []
  [re-com/v-box
    :gap "50px"
    :align :center
    :children [
      [re-com/title :label "HOME PANEL" :level :level1]

      [re-com/h-box
        :size "auto"
        :gap "40px"
        :children [
          [re-com/v-box
            :align-self :center
            :children [
                [re-com/title
                    :label "Deck:"]
                [re-com/title
                    :label
                      (name @(re-frame/subscribe [::subs/current-deck]))
                                    ]]]
          [re-com/v-box
            :gap "20px"
            :children [
              [study-panel-button]
              [edit-panel-button]]]
        ]
      ]
      [re-com/h-box
        :gap "20px"
        :children [
          [deck-modal]
          [profile-panel-button]
        ]
      ]
      [intro-panel-button]

      ]
  ])



; (defn home-panel []
;   [re-com/v-box
;     :gap "20px"
;     :children [
;       [re-com/title :label "HOME PANEL" :level :level1]
;       [study-panel-button]
;       [edit-panel-button]
;       [profile-panel-button]
;       [intro-panel-button]
;       ]
;   ])




(def card-style-front-and-back
  {:backface-visibility "hidden"
   :background "lightgrey"
   :position "absolute"
   :top "0"
   :left "0"
   :width "300px"
   :height "150px"})


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
        :size "auto"
        :style {:perspective "1000px"
                :width "300px"
                :height "150px"}
        :attr {:on-click #(reset! show-back? (if @show-back? false true))}
        :children [[card show-back?]]])))


(defn study-panel []
  [re-com/v-box
    :gap "20px"
    :padding "20px 20px 20px 20px"
    :align :center
    :children [
      [flippable-card]
      [card-review]
      [home-panel-button]]])


; (defn card-edit-display [front back]
;   [re-com/h-box
;         :size "auto"

;         ; a border instead of a background would be better?
;         :style {:background "lightgrey"}

;         ; :padding "20px 10px 10px 10px"
;         :align-self :center
;         :children [
;           [re-com/scroller
;             :v-scroll :auto
;             :height "45px"
;             :child [wrap-edit-text front]
;           ]
;           [re-com/scroller
;             :v-scroll :auto
;             :height "45px"
;             :child [wrap-edit-text back]
;           ]
;         ]
;         ]
;         )


(defn card-edit-display [front back]
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
              :child [wrap-edit-text front]
            ]
            [re-com/scroller
              :v-scroll :auto
              :height "45px"
              :child [wrap-edit-text back]
            ]
          ]
      ]]
        )






(defn clickable-trash-icon [front back]
  [re-com/box
    :child [:img
      {:src "trash_icon.png"
        :style {:max-width "20px" :max-height "20px"}
        :on-click #(re-frame/dispatch [::events/remove-card front back])}]]
      )


(defn trash-and-card [front back]
  [re-com/h-box
    :gap "10px"
    ; :padding "10px"
    ; :padding "0px 10px 10px 0px"
    :children [
      [clickable-trash-icon front back]
      [card-edit-display front back]

    ]])


(defn card-displayer [{:keys [front back]}]
  [re-com/box
    :padding "10px"
    :child [trash-and-card front back]])

;; this whole thing should be in a scroller as well --
;; if there are too many cards too display at once
(defn card-list []
  (let [cards @(re-frame/subscribe [::subs/cards]) ;; will be a set
        removed-cards @(re-frame/subscribe [::subs/removed])]
    [re-com/v-box
      ; :gap "40px"
      :children [
        (for [card (clojure.set/difference cards removed-cards)]
          ^{:key (rand-int 99999)}
          [card-displayer card])
      ]
    ]
))



;; second, "to do" version of edit-panel
; (defn todos []
(defn edit-panel []
  [re-com/v-box
    :padding "50px 0px 20px 0px"
    :gap "20px"
    :align :center
    :children [
      [add-card] ;; "add todo"
      [card-list]

      [home-panel-button]

    ]])


; (defn edit-panel []
;   [re-com/v-box
;     :gap "20px"
;     :align :center
;     :children [
;       [card-manipulation]
;       [push-decks] ;; better place for this?
;       [deck-modal]
;       [home-panel-button]

;       [re-com/title :label "DEV: "]
;       [todos]
;       ]
;   ]
;   )


(defn profile-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [re-com/label :label "logic for editing your profile here!"]
      [home-panel-button]

    ]])


(defn cardy-app []
  (case @(re-frame/subscribe [::subs/current-panel])
    :intro [intro-panel]
    :home [home-panel]
    :study [study-panel]
    :edit [edit-panel]
    :profile [profile-panel]))


) ;; end of tracer form


