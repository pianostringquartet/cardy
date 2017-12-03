(ns cardy.home.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]

            [cardy.home.events :as events]

            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))



(trace-forms {:tracer (tracer :color "gold")}



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
(defn add-deck-modal-dialog
  [process-ok process-cancel]
  [re-com/v-box
    :padding "10px"
    :gap "10px"
    :style {:backdrop-color "blue"}
    :children [[add-deck]
               [re-com/button :label "Done" :on-click process-ok]]])


; (defn deck-modal-dialog
;   [process-ok process-cancel]
;   [re-com/v-box
;     :padding "10px"
;     :gap "10px"
;     :style {:backdrop-color "blue"}
;     :children [[re-com/title :label "Change, add or delete a deck"]
;                [deck-dropdown]
;                [add-deck]
;                [remove-deck]
;                [re-com/button :label "Done" :on-click process-ok]]])

(defn add-deck-modal []
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
            :label "add deck"
            :class "btn-info"
            ;:on-click #(do
             ; (reset! show? true))]
             :on-click #(reset! show? true)]
          (when @show? [re-com/modal-panel
                          :backdrop-color "grey"
                          :backdrop-opacity 0.4
                          :child [add-deck-modal-dialog process-ok process-cancel]])
          ]
        ])))

;; modal for deck manipulation
;; this controls the display (show, not show) of the modal-dialog
; (defn deck-modal []
;   (let [show? (reagent/atom false)
;         process-ok (fn [event]
;                          (reset! show? false)
;                          false)
;         process-cancel (fn [event]
;                          (reset! show? false)
;                          false)]
;     (fn []
;       [re-com/v-box
;         :children [
;           [re-com/button
;             :label "Decks"
;             :class "btn-info"
;             ;:on-click #(do
;              ; (reset! show? true))]
;              :on-click #(reset! show? true)]
;           (when @show? [re-com/modal-panel
;                           :backdrop-color "grey"
;                           :backdrop-opacity 0.4
;                           :child [deck-modal-dialog process-ok process-cancel]])
;           ]
;         ])))





(defn clickable-pencil [deck-name]
  [:img
          {:src "pencil_icon.png"
           :style {:max-width "20px" :max-height "20px"}
            ; clicking the pencil icon should take you to an edit panel
            ; for that particular deck
            :on-click #(re-frame/dispatch [::events/edit-given-deck (name deck-name)])}
        ]
  )

(defn clickable-deck-name [deck-name]
  [re-com/box
    :attr {:on-click #(re-frame/dispatch [::events/study-given-deck (name deck-name)])}
    :child [re-com/title :label (name deck-name)]]
  )


(defn really-delete-dialogue [deck-name]
  (let [showing? (reagent/atom false)]
    (fn []
      [re-com/popover-anchor-wrapper
        :showing? showing?
        :position :right-below

        ; what the popover is attached to
        :anchor [
          :img
            {:src "trash_icon.png"
              :style {:max-width "20px" :max-height "20px"}
              ; :on-click #(reset! showing? (if (@showing? false true)))}]
              :on-click #(reset! showing? true)}]

        ; the popover itself
        :popover [
          re-com/popover-content-wrapper

            ; when we exit popover, call this fn
            :on-cancel #(reset! showing? false)

            ; when popover is open, tint backdrop by this much
            :backdrop-opacity 0.3

            ; putt
            ; :body "Love is answer and the problem."
            ; :body ["Are you "]
            ; :title "Really delete this deck?"
            :body [
              re-com/v-box
                ; :gap "5px"
                :gap "15px"
                :padding "10px"
                :children [

                  [re-com/label :label (str "Really delete " (name deck-name) " deck?")]

                  ; a confirm button
                  [:input
                    {:type "button" :value "confirm"
                    :on-click #(re-frame/dispatch
                      [::events/remove-deck (name deck-name)])
                    }]

                  ; a cancel button
                  [:input
                    {:type "button" :value "cancel"
                    :on-click #(reset! showing? false)
                    }]
                ]
                ]
          ]
        ]
      )
    ))







(defn clickable-to-delete-deck [deck-name]
  [re-com/box
    :child [:img
      {:src "trash_icon.png"
        :style {:max-width "20px" :max-height "20px"}
        :on-click #(re-frame/dispatch [::events/remove-deck (name deck-name)])}
      ]])



(defn deck-clickables [deck-name]
  [re-com/border
      :border "1px dashed lightgrey"
      :child [re-com/h-box
      ; hmm... :padding here, and not :gap in parent component,
      ; controls space between deck-clickables... bleh
      ; :padding "10px"
      :padding "30px"
      :gap "20px"
      :children [
        [clickable-pencil deck-name]
        ; [clickable-to-delete-deck deck-name]
        [really-delete-dialogue deck-name]
        [clickable-deck-name deck-name]

        ]]]

    )


; need to make a form-2 component, for
; if we add a deck
(defn deck-list []
  (let [decks @(re-frame/subscribe [::subs/decks])]
    [re-com/v-box
      ; :gap "40px"
      ; :gap "40px"
      :children [
        (for [deck-name (keys decks)]
          ^{:key (rand-int 99999)}
          ; [deck-displayer deck-name])
          [deck-clickables deck-name])
      ]
    ]
))


(defn deck-flow []
  [re-com/box
    :child [deck-list]])


(defn deck-fuzzy-search []
  (let [decks @(re-frame/subscribe [::subs/decks])
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
        :on-change #(re-frame/dispatch [::events/study-given-deck %])
        :change-on-blur? true])))


(defn home-panel []
  [re-com/v-box
    :gap "50px"
    :align :center
    :children [
      [re-com/title :label "HOME PANEL" :level :level1]
      ; [intro-panel-button]
      [re-com/h-box
        :gap "20px"
        :children [
          [deck-fuzzy-search]
          [add-deck-modal]
        ]]
      [deck-flow]
      ]
  ])


)

