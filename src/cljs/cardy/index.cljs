(ns cardy.index
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]
            [reagent.core  :as reagent]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [cardy.events :as events]
            [cardy.auth.views :refer [intro-panel pw-reset-panel]]
            [cardy.home.views :refer [home-panel]]
            [cardy.edit.views :refer [edit-panel]]
            [cardy.study.views :refer [study-panel]]))


(trace-forms {:tracer (tracer :color "gold")}

(defn cardy-app []
  (let [logged-in? (re-frame/subscribe [::subs/logged-in?])
        session (re-frame/subscribe [::subs/session])
        current-panel (re-frame/subscribe [::subs/current-panel])]

    (fn cardy-app-container []
      (cond

        @session
          (do
            (re-frame/dispatch [::events/resume-active-session @session])
            [home-panel])

        (and (not @logged-in?) (= @current-panel :pw-reset))
          [pw-reset-panel]

        (not @logged-in?)
          [intro-panel]

        :else
          (case @current-panel
            :home [home-panel]
            :study [study-panel]
            :edit [edit-panel])))))

) ;; end of tracer form
