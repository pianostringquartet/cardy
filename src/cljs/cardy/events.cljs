(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]))


(trace-forms {:tracer (tracer :color "blue")}


;;; PANELS

;; expects panel param to be :keyword
; (defn change-panel [db [event-id-to-ignore panel]]
;   (assoc db :current-panel panel))

(defn change-panel [db panel]
  (assoc db :current-panel panel))

(re-frame/reg-event-db
  ::change-panel
  (fn change-panel-handler [db [event-id-to-ignore panel]]
    (change-panel db panel)))



(def placeholder-card
  {:front "This deck has no cards yet. Add one!"
   :back "You can flip me. But you really should add a card!"})

; (def placeholder-deck
;   {:placeholder-deck '(placeholder-card)})

(defn add-back-excluded
  [db]
  (assoc db :excluded #{}))


;; ----------------------------------------
;; Helper fns for event handler fns
;; ----------------------------------------

#_(defn input-to-keyword
  [a-string]
  (keyword (clojure.string/trim a-string)))

(defn input-to-keyword
  [a-string]
  (do (js/console.log "a-string in input-to-keyword is: " a-string)
    (keyword (clojure.string/trim a-string))))

(defn input-to-card
  "Accepts input (a string), returns a card (a map)."
  ; [[event-id-to-ignore a-string]] ;; note the destructuring of the Event vector!
  [a-string] ;; note the destructuring of the Event vector!
    (do (println "a-string in input-to-card: " a-string)
      (let [words (map clojure.string/trim (clojure.string/split a-string #";"))]
          {:front (first words) :back (second words)})))


;; I'm a change

; ;; this is ridiculous to use just a single time...
; (defn dissoc-in
;   "Dissociates an entry from a nested associative structure returning a new
;   nested structure. keys is a sequence of keys. Any empty maps that result
;   will not be present in the new structure."
;   [m [k & ks :as keys]]
;   (if ks
;     (if-let [nextmap (get m k)]
;       (let [newmap (dissoc-in nextmap ks)]
;         (if (seq newmap)
;           (assoc m k newmap)
;           (dissoc m k)))
;       m)
;     (dissoc m k)))

; (defn drop-nth [n coll]
;    (keep-indexed #(if (not= %1 n) %2) coll))




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


;; DECK SYNCING (client, db)

;; pull (all) decks from external db,
;; and set them as :decks in app-db
;; used when first starting up the app
(re-frame/reg-event-fx
  ::pull-decks
  (fn pull-deck-handler [cofx event]
    {:pull-decks-fx nil})) ;; return a map with just the key :pull-decks-effect

;; can you not do a key like ::my-key?

;; AJAX
; (defn pull-decks-fx-ajax)

;; Effect Handler for :pull-decks-fx effect-id
;; i.e. the AJAX-calling fn
(re-frame/reg-fx
  :pull-decks-fx
  (fn pull-decks-ajax []
    (GET "/pull-decks" {:handler #(re-frame/dispatch [::set-decks %])})))

;; where decks is "decks from server"
(re-frame/reg-event-db
  ::set-decks
  (fn set-decks-handler [db [event-id-to-ignore decks]]
    (assoc db :decks decks)))


;; push client's decks into external db,
;; used regularly (?) when client
(re-frame/reg-event-fx
  ::push-decks
  (fn push-decks-handler [cofx event]
    {:push-decks-fx (:decks (:db cofx))}))

(re-frame/reg-fx
  :push-decks-fx
  ; (fn push-decks-ajax [cofx [effect-id-to-ignore decks]]
  (fn push-decks-ajax [decks]
    (POST "/push-decks"
      {:params {:decks decks}
       :handler #(js/console.log "push-decks-ajax response was: " %)})))
;; no need to do anything with response from server...


; Pressing a button dispatches the “push-decks” event.
; push-decks event handler fn returns {:push-deck-fx (:deck db)}
; The :push-decks-fx effect handler makes sends POST request containing value of app-db’s :decks key to server.
; Server accepts data and stores in db, then responds with 200 OK.





;; NAVIGATING CARDS

;; flip between front and back
;; (returns a new app-db)
(re-frame/reg-event-db
  ::flip
  (fn flip [db]
    (let [current-face (:current-face db)]
      (if (= current-face :front)
          (assoc db :current-face :back)
          (assoc db :current-face :front)))))




(re-frame/reg-event-db
  ::show-back
  (fn show-back-handler [db]
    (let [currently-showing-back? (:show-back? db)]
      (if currently-showing-back?
          (assoc db :show-back? :false)
          (assoc db :show-back? :true)))))


; (defn remove-congrats-message [db]
;   (assoc db :congrats nil))

; (re-frame/reg-event-db
;   ::remove-congrats-message
;   remove-congrats-message)




(defn add-congrats-message [db]
  (assoc db :congrats true))

;; accepts db, returns card
;; returns map or nil
(defn next-card [db]
  (let [ineligible
          (conj
            (clojure.set/union (:excluded db) (:removed db))
            (:current-card db))]
    (first (shuffle (remove ineligible (:cards db))))))
;; ^^ this could probably be handled via dependency graph, no?

(defn new-current-card [db]
  (let [new-card (next-card db)]
    (cond

      ;; i.e. we've successfully gone through the deck!
      ; (and (nil? new-card)
      ;      (not (empty? (:excluded db))))
      ;   (new-current-card (add-back-excluded db))
      ;; should be loop/recur?

      (and (nil? new-card)
           (not (empty? (:excluded db))))
        (new-current-card
          (add-congrats-message
          (add-back-excluded db)))

      (nil? new-card)
        (assoc db :current-card placeholder-card)
      :else
        (assoc db :current-card new-card))))





(re-frame/reg-event-db
  ::add-back-excluded
  add-back-excluded)

(defn clear-removed [db]
  (assoc db :removed #{}))

(defn put-back-old-deck
  [db]
  (let [deck-less-removed (clojure.set/difference (:cards db) (:removed db))]
    (clear-removed
      (assoc-in
        (add-back-excluded db) ;; set :excluded to #{}
        [:decks (:current-deck db)] ;; path: :decks :current-deck
        deck-less-removed))))

;; during this step, :cards changes and :current-deck changes,
;; but user provided 'desired deck' does not change

(defn bring-in-new-deck
  [db user-input]
  (let [desired-deck (input-to-keyword user-input)]
    (as-> db app-state
      (assoc app-state :cards (desired-deck (:decks app-state)))
      (assoc app-state :current-deck desired-deck))))



(defn change-deck
  [db [event-id-to-ignore user-input]]
  (as-> db app-state
    (put-back-old-deck app-state)
    (bring-in-new-deck app-state user-input)
    (new-current-card app-state)))


(re-frame/reg-event-db
  ::change-deck
  change-deck)


) ; end of tracer form
