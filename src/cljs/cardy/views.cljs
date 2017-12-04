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



(defn push-decks []
  [:input
    {:type "button" :value "sync decks"`
     :on-click #(re-frame/dispatch [::events/push-decks])}])


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


