(ns cardy.events
  (:require [cardy.db :as core-db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]))


(trace-forms {:tracer (tracer :color "blue")}


(def ls-auth-key "is-logged-in")

; (def ls-key
;   "todos-reframe") ;; localstore key

; ; ;; todomvc has a "path" interceptor
; ; ;; that hands the event-handlers the :todos key in the db,
; ; ;; instead of the entire db
; ; (defn todos->local-store
; ;   "Puts todos into localStorage"
; ;   [todos]
; ;   ; (.setItem js/localStorage ls-key (str todos))
; ;   (do
; ;     (js/console.log "todos->local-store todos param is: " todos)
; ;     (.setItem js/localStorage ls-key (str todos))))

; ; (def ->local-store
; ;   (re-frame/after todos->local-store))

; ; ;; this would be for an event
; ; ;; (so far you've not used this anywhere)
; ; (def todo-interceptors
; ;   [->local-store])

; ;; registering a handler for a cofx-id
; (re-frame/reg-cofx
;   :local-store-todos
;   (fn from-local-stroage-cofx [cofx _]
;       ;; put the localstore todos into the coeffect under :local-store-todos

;       ;; Right. Cofx is the actual "world state",
;       ;; of which :db is just a part
;       (assoc cofx :local-store-todos
;              ;; read in todos from localstore, and process into a sorted map
;              (into (sorted-map)
;                    (some->> (.getItem js/localStorage ls-key)
;                             (js/console.log "Here it is: " )
;                             (cljs.reader/read-string)    ;; EDN map -> map
;                             )))))

(re-frame/reg-cofx
  :is-logged-in-localStorage
  (fn is-logged-in-localStorage [cofx _]
    (assoc
      cofx
      :is-logged-in-localStorage?
      (some->>
        (.getItem js/localStorage ls-auth-key)
        ; (cljs.reader/read-string) ;; not needed?
        )
      )))

(re-frame/reg-event-db
  ::initialize-test-db
  (fn initialize-test-db [_ _]
    core-db/test-db))


(re-frame/reg-event-fx
 ::add-local-storage
 [(re-frame/inject-cofx :is-logged-in-localStorage)]
 (fn add-local-storage [cofx [_ _]]
   (let [db (:db cofx)
         is-logged-in-localStorage? (:is-logged-in-localStorage? cofx)]
    {:db (assoc db :is-logged-in-localStorage? is-logged-in-localStorage?)})))

(re-frame/reg-event-db
 ::initialize-db
 (fn initialize-db [_ _]
   core-db/default-db))



(defn input-to-keyword [a-str]
  (-> a-str
    (clojure.string/trim)
    (clojure.string/replace " " "-")
    (keyword)))

(defn keyword-to-display [a-kw]
  (-> a-kw
    (name)
    (clojure.string/replace "-" " ")))

(defn input-to-card [a-string]
    (do
      (println "a-string in input-to-card: " a-string)
      (let [words (map clojure.string/trim (clojure.string/split a-string #";"))]
          {:front (first words) :back (second words)})))

(re-frame/reg-fx
  :ajax-post
  (fn ajax-post [{:keys [uri params handler]}]
    (POST uri {:params params :handler handler})))

(defn post-request [uri params handler]
  "uri: str
   params: map
   handler: fn"
  {:ajax-post {:uri uri :params params :handler handler}})

(defn change-panel [db panel]
  (assoc db :current-panel panel))

(re-frame/reg-event-db
  ::change-panel
  (fn change-panel-handler [db [event-id-to-ignore panel]]
    (change-panel db panel)))

(defn go-home [db]
  (assoc db :current-panel :home))

(re-frame/reg-event-db
  ::go-home
  go-home)

(re-frame/reg-event-fx
  ::pull-decks
  (fn pull-deck-handler [cofx event]
    (post-request
      "/pull-decks"
      {:email (:email (:db cofx))}
      #(re-frame/dispatch [::set-decks %]))))

(re-frame/reg-event-db
  ::set-decks
  (fn set-decks-handler [db [event-id-to-ignore decks]]
    (assoc db :decks decks)))

(re-frame/reg-fx
  :login-false-localStorage
  (fn login-localStorage [_]
    (.setItem js/localStorage ls-auth-key (str false))))

(re-frame/reg-event-fx
  ::logout
  (fn logout [cofx [event-id-to-ignore]]
    {:db (change-panel
            (assoc
              ; db
              ;; Note the "false" str instead of false (bool);
              ;; See "WORKAROUND" in index.cljs
              (assoc (:db cofx) :is-logged-in-localStorage? "false")
              :logged-in?
              false)
            :auth)
     :login-false-localStorage nil}))

(re-frame/reg-event-fx
  ::resume-active-session
  (fn resume-active-session [cofx [event-id-to-ignore session-email]]
    {:db (go-home (assoc (:db cofx) :email session-email))
     :dispatch [::pull-decks]}))

) ; end of tracer form
