(ns user
  (:require [luminus-migrations.core :as migrations]
            [cardy.config :refer [env]]
            [mount.core :as mount]
            [cardy.figwheel :refer [start-fw stop-fw cljs]]
            cardy.core))

(defn start []
  (mount/start-without #'cardy.core/repl-server))

(defn stop []
  (mount/stop-except #'cardy.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))


