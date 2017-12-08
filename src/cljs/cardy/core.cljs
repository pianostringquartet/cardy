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
            [cardy.subs :as subs]
            [cardy.index :as cardy-index])

  (:import goog.History))


(defn mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [cardy-index/cardy-app]
                  (.getElementById js/document "app")))

(defn init! []
  (re-frame/dispatch-sync [::events/initialize-db])
  (load-interceptors!)
  (mount-components))
