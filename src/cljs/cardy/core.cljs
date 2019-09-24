(ns cardy.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [cardy.ajax :refer [load-interceptors!]]
            [cardy.events :as events]
            [cardy.index :as cardy-index]))


(defn mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [cardy-index/cardy-app]
                  (.getElementById js/document "app")))

(defn init! []
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::events/retrieve-user-session])
  (load-interceptors!)
  (mount-components))
