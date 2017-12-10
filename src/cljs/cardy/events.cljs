(ns cardy.events
  (:require [cardy.db :as core-db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [POST]]))


(trace-forms {:tracer (tracer :color "blue")}


(def ls-auth-key "is-logged-in")

(re-frame/reg-cofx
  :user-session
  (fn is-logged-in-localStorage [cofx _]
    (assoc
      cofx
      :is-logged-in-localStorage?
      (some->>
        (.getItem js/localStorage ls-auth-key)))))

(re-frame/reg-event-db
 ::initialize-db
 (fn initialize-db [_ _]
   core-db/default-db))

;; WORKAROUND:
;; cljs.reader/read-string throws a perplexing error
;; when reading content of localStorage;
;; so for now, we explicitly convert "false" (str) to false (bool)
(defn to-cljs [a-str]
  (if (= "false" a-str)
    false
    a-str))

(re-frame/reg-event-fx
 ::retrieve-user-session
 [(re-frame/inject-cofx :user-session)]
 (fn retrieve-user-session [cofx [_ _]]
   (let [db (:db cofx)
         session (:user-session cofx)]
    {:db (assoc db :session (to-cljs session))})))

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
  (let [words (map
               clojure.string/trim
               (clojure.string/split a-string #";"))]
    {:front (first words) :back (second words)}))

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
  :end-session
  (fn end-session [_]
    (.setItem js/localStorage ls-auth-key (str false))))

(defn logout-app-db
  "Set login-relevant keys in app-db to false."
  [db]
  (-> db
    (assoc :session false)
    (assoc :logged-in? false)))

;; includes ending session in localStorage
(re-frame/reg-event-fx
  ::logout
  (fn logout [cofx [event-id-to-ignore]]
    {:db (change-panel
           (logout-app-db (:db cofx))
           :auth)
     :end-session nil}))

(re-frame/reg-event-fx
  ::resume-active-session
  (fn resume-active-session [cofx [event-id-to-ignore session-email]]
    {:db (go-home (assoc (:db cofx) :email session-email))
     :dispatch [::pull-decks]}))

) ; end of tracer form
