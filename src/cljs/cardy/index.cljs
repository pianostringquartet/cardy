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

;; WORKAROUND:
;; cljs.reader/read-string throws a perplexing error
;; when reading content of localStorage during :initialize-db;
;; for now, we keep localStorage content as a string,
;; e.g. using "false" (Clojure str) instead of false (Clojure bool)
(defn str-is-false? [a-str]
  (= "false" a-str))

(defn has-active-session? [session-info]
  (not (str-is-false? session-info)))

(defn cardy-app []
  (let [logged-in? (re-frame/subscribe [::subs/logged-in?])
        session-info (re-frame/subscribe [::subs/is-logged-in-localStorage?])
        current-panel (re-frame/subscribe [::subs/current-panel])]

    (fn cardy-app-container []
      (cond ;; cond does short circuit eval :-)

        (has-active-session? @session-info)
        (do
          (re-frame/dispatch [::events/resume-active-session @session-info])
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
