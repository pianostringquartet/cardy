(ns cardy.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [cardy.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[cardy started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[cardy has shut down successfully]=-"))
   :middleware wrap-dev})
