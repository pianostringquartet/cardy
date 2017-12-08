(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]))


(trace-forms {:tracer (tracer :color "blue")}

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


;; ----------------------------------------
;; Helper fns for event handler fns
;; ----------------------------------------

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


;; ----------------------------------------
;; Associating event-ids with event handler fns
;; ----------------------------------------

(re-frame/reg-event-db
  ::initialize-test-db
  (fn initialize-test-db [_ _]
    db/test-db))

(re-frame/reg-event-db
 ::initialize-db
 (fn initialize-db [_ _]
   db/default-db))

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

) ; end of tracer form
