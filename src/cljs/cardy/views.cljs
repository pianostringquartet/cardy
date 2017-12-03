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

            [cardy.auth.views :refer [
              login-form
              intro-panel
              pw-reset-panel]]

            [cardy.home.views :refer [
              home-panel]]

            [cardy.edit.views :refer [
              edit-panel]]

            [cardy.study.views :refer [
              study-panel]]
            ))

(trace-forms {:tracer (tracer :color "gold")}


(defn show-decks []
  [:div "Current decks are: " @(re-frame/subscribe [::subs/show-decks])])


(defn push-decks []
  [:input
    {:type "button" :value "sync decks"`
     :on-click #(re-frame/dispatch [::events/push-decks])}])



; (defn deck-choices []
;   (let [available-decks (keys @(re-frame/subscribe [::subs/decks]))
;         as-choice (fn [x] {:id (name x) :label (name x)})]
;     (mapv as-choice available-decks)))

; (defn deck-dropdown []
;   (let [selected-deck (reagent/atom nil)]
;     (fn []
;       [:div "Decks:"
;       [re-com/single-dropdown
;                   :choices (deck-choices)
;                   :model selected-deck
;                   :placeholder "select a deck"
;                   :width "300px"
;                   :max-height "180px"
;                   :on-change
;                     #(re-frame/dispatch [::events/change-deck (reset! selected-deck %)])
;                   ]])))



;; when you remove a card, if that renders the deck empty,
;; then remove that deck too
;; (this logic should handled in events;
;; e.g. removing the last card in a deck also triggers an :events/remove-deck event)
; (defn remove-current-card []
;     [:input
;       {:type "button" :value "throw away current card"
;        :on-click #(re-frame/dispatch [::events/remove-card])}])












;; Login / signup

;; you don't need a "form" per se
;; you just need to accept input from 3 different sources (name, email, pw),
;; store the input in the app-db as we get it (or just keep in atom?)
;; then when user hits a separate "submit" button,
;; we send the data back to the server to validate it etc.



;; ViewFns: PANELS

;; for dev purposes
(defn intro-panel-button []
  [:input
    {:type "button" :value "intro"
     :on-click #(re-frame/dispatch [::events/change-panel :auth])}])


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



(defn display-pw-reset-note []
  (let [user-error @(re-frame/subscribe [::subs/pw-reset-message])]
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


(defn display-reset-code-note []
  (let [user-error @(re-frame/subscribe [::subs/code-verified])]
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
    :auth [intro-panel]
    :home [home-panel]
    :study [study-panel]
    :edit [edit-panel]
    :profile [profile-panel]

    :pw-reset [pw-reset-panel]
    ))


) ;; end of tracer form


