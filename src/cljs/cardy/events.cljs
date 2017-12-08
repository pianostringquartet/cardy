(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]))


(trace-forms {:tracer (tracer :color "blue")}




;; utility events:


(re-frame/reg-fx
  :ajax-post
  (fn ajax-post [{:keys [uri params handler]}]
    (POST uri {:params params :handler handler})))

; accepts uri, params, handler
; returns {:ajax-post {:uri :params :handler}}
(defn post-request [uri params handler]
  {:ajax-post {:uri uri :params params :handler handler}})

;;; PANELS

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

;; utility event
; (re-frame/reg-event-db
;   ::go-home
;   (fn go-home [db]
;     (assoc db :current-panel :home)))

;; ----------------------------------------
;; Helper fns for event handler fns
;; ----------------------------------------

(defn input-to-keyword
  [a-string]
  (keyword (clojure.string/trim a-string)))

(defn input-to-card
  "Accepts input (a string), returns a card (a map)."
  ; [[event-id-to-ignore a-string]] ;; note the destructuring of the Event vector!
  [a-string] ;; note the destructuring of the Event vector!
    (do (println "a-string in input-to-card: " a-string)
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
    {:pull-decks-fx (:email (:db cofx))})) ;; return a map with just the key :pull-decks-effect

;; should use post-request...
(re-frame/reg-fx
  :pull-decks-fx
  (fn pull-decks-ajax [email]
    (POST
      "/pull-decks"
      {:params {:email email}
        :handler #(re-frame/dispatch [::set-decks %])})))
    ; (GET "/pull-decks" {:handler #(re-frame/dispatch [::set-decks %])})))

(re-frame/reg-event-db
  ::set-decks
  (fn set-decks-handler [db [event-id-to-ignore decks]]
    (assoc db :decks decks)))




) ; end of tracer form
