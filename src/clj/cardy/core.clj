(ns cardy.core
  (:require [cardy.handler :as handler]
            [luminus.repl-server :as repl]
            [luminus.http-server :as http]
            [luminus-migrations.core :as migrations]
            [cardy.config :refer [env]]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

;; this is defstate http-sever
(mount/defstate ^{:on-reload :noop}
                http-server
                :start
                (http/start
                  (-> env
                      (assoc :handler (handler/app))
                      (update :io-threads #(or % (* 2 (.availableProcessors (Runtime/getRuntime)))))
                      (update :port #(or (-> env :options :port) %))))
                :stop
                (http/stop http-server))

;; this is defstate repl-server
(mount/defstate ^{:on-reload :noop}
                repl-server
                :start
                (when-let [nrepl-port (env :nrepl-port)]
                  (repl/start {:port nrepl-port}))
                :stop
                (when repl-server
                  (repl/stop repl-server)))

;; and before we've



(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))


;; think about what component's form evals to...
(defn start-app [args]
  (doseq [component (-> args
    ;; we parse the args, then
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  ;; for now, ignore this line below...
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))


;; I'm not sure when / where exactly this is called,
;; but it's a rather impressive function :)


;; main is passed any commandline args in "args"
(defn -main [& args]

  ;; (cond & clauses) where a clause is a pair: a test-expr and a return-expr
  ;; If the test-expr evals to true, then the return-expr is eval'd and returned,
  ;; and we don't move on to any of the other expressions.
  (cond

    ;; (some pred args)
    ;; the set is our pred;
    ;; expr evals to true just if "init" is in args


    ;; if the we pass in "init" as a command line arg,
    ;; then we'll call the :start method of


    ;; TEST EXPR 1
    (some #{"init"} args)

    ;; RETURN EXPR 1
    (do
      (mount/start #'cardy.config/env)

      ;; (select-keys env [:database-url :init-script]) means
      ;; from the map env, return a map containing just the k/vs for
      ;; the keys :database-url, :init-script
      (migrations/init (select-keys env [:database-url :init-script]))
      (System/exit 0)) ;; hmm why System/exit 0? "exit, everything's okay"?

    ;; TEXT EXPR 2
    (some #{"migrate" "rollback"} args)

    ;; RETURN EXPR 2
    (do
      (mount/start #'cardy.config/env)
      (migrations/migrate args (select-keys env [:database-url]))
      (System/exit 0))

    ;; if neither of the two text-exprs above eval to true,
    ;; then we simply do this:
    :else
    (start-app args))
  )
