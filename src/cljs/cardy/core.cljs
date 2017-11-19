(ns cardy.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [secretary.core :as secretary]
            [goog.events :as go-events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cardy.ajax :refer [load-interceptors!]]
            [re-com.core :as re-com]
            [cardy.events :as events]
            [cardy.views :as views]
            [cardy.subs :as subs])

  (:import goog.History))


;; -------------------------
;; Routes
; (secretary/set-config! :prefix "#")

; (secretary/defroute "/" []
;   (re-frame/dispatch [:set-active-page :home]))

; (secretary/defroute "/about" []
;   (re-frame/dispatch [:set-active-page :about]))


;; -------------------------
;; History
; must be called after routes have been defined
; (defn hook-browser-navigation! []
;   (doto (History.)
;     (goog-events/listen
;       HistoryEventType/NAVIGATE
;       (fn [event]
;         (secretary/dispatch! (.-token event))))
;     (.setEnabled true)))


;; -------------------------
;; Initialize app


(defn mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/cardy-app]
                  (.getElementById js/document "app")))


(defn init! []

  ;; initializing the db, I know this :-)
  (re-frame/dispatch-sync [::events/initialize-db])

  ;; dispatch or dispatch-sync?
  ;; as part of startup, retrieve decks from db
  (re-frame/dispatch-sync [::events/pull-decks])

  ;; load-interceptors! is defined in ajax.cljs
  ;; ... seems to be us adding CSRF headers?
  ;; ... Can leave alone for now...
  (load-interceptors!)


  ;; ignore for now; learn about browsing history later
  ; (hook-browser-navigation!)

  ;; here we actually render the app
  (mount-components))



; (defn ^:export init []

;   ;; initializing the db, I know this :-)
;   (re-frame/dispatch-sync [::events/initialize-db])

;   ;; load-interceptors! is defined in ajax.cljs
;   ;; ... seems to be us adding CSRF headers?
;   ;; ... Can leave alone for now...
;   (load-interceptors!)


;   ;; ignore for now; learn about browsing history later
;   ; (hook-browser-navigation!)

;   ;; here we actually render the app
;   (mount-components))
