(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            ))


 (trace-forms {:tracer (tracer :color "blue")}


; (re-frame/reg-event-db
;   :initialize-db
;   (fn [_ _]
;     db/default-db))

(re-frame/reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :page page)))


; (re-frame/reg-event-db
;   :add-card
;   (fn [db [event-id-to-ignore response]]
;     (assoc db :add-card "WE TRIGGERED THE EVENT TO ADD A CARD!")))


; (re-frame/reg-event-db
;   :set-deck
;   (fn [db [event-id-to-ignore deck-name response]]
;     (assoc db (keyword deck-name) response)))

; (re-frame/reg-event-db
;   :set-deck
;   (fn [db [event-id-to-ignore deck-name response]]
;     (assoc-in db [:decks (keyword deck-name)] response)
;     ))




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
  [[event-id-to-ignore a-string]] ;; note the destructuring of the Event vector!
    (do (println "a-string in input-to-card: " a-string)
      (let [words (map clojure.string/trim (clojure.string/split a-string #";"))]
          {:front (first words) :back (second words)})))

;; this is ridiculous to use just a single time...
(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn drop-nth [n coll]
   (keep-indexed #(if (not= %1 n) %2) coll))


;; ----------------------------------------
;; Associating event-ids with event handler fns
;; ----------------------------------------

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))


;; NAVIGATING CARDS

;; flip between front and back
;; (returns a new app-db)
(re-frame/reg-event-db
  ::flip
  (fn [db]
    (let [current-face (:current-face db)]
      (if (= current-face :front)
          (assoc db :current-face :back)
          (assoc db :current-face :front)))))

;; move to next card
#_(re-frame/reg-event-db
  ::next
  (fn [db]
    (let [current-index (:current db)]
      (assoc db :current (inc current-index)))))


;; using this fn does allow me to continue through :cards,
;; even though somewhere we're hitting an index out of bounds
(re-frame/reg-event-db
  ::next
  (fn [db]
    (let [current-index (:current db)
          next-index (inc current-index)
          cards (:cards db)]
      (if (= next-index (count cards))
        (assoc db :current 0)
        (assoc db :current next-index)))))
;; ah, right, with indexes, the "last indexical" will be n-1 where n = (count coll)
;; fic



;; move to prev card
(re-frame/reg-event-db
  ::prev
  (fn [db]
    (let [current-index (:current db)]
      (assoc db :current (dec current-index)))))


;; ADDING, REMOVING CARDS

(re-frame/reg-event-db
  ::add-card
  (fn [db input]
    (let [current-cards (:cards db)
          new-card (input-to-card input)]
      (assoc db :cards (conj current-cards new-card)))))

;; permanently remove current card from collection
(re-frame/reg-event-db
  ::remove-card
  (fn [db]
    (let [current-index (:current db)
          current-cards (:cards db)]
      (assoc db :cards (drop-nth current-index current-cards)))))


;; EXCLUDING CARDS

(re-frame/reg-event-db
  ::exclude-card
  (fn [db]
    (let [current-index (:current db)
          current-cards (:cards db)
          current-excluded (:excluded db)
          current-card (nth current-cards current-index)]
      (-> db
        (assoc :excluded (conj current-excluded current-card))
        (assoc :cards (drop-nth current-index current-cards))))))


;; separate out this event handler fn,
;; bc you need to use it instead as just a fn in change-deck event hander fn
(defn add-back-excluded
  [db]
  (let [current-excluded (:excluded db)
          current-cards (:cards db)]
      (-> db
        (assoc :cards (flatten (conj current-cards current-excluded)))
        (assoc :excluded '()))))

#_(re-frame/reg-event-db
  ::add-back-excluded
  (fn [db]
    (let [current-excluded (:excluded db)
          current-cards (:cards db)]
      (-> db
        (assoc :cards (flatten (conj current-cards current-excluded)))
        (assoc :excluded '())))))

(re-frame/reg-event-db
  ::add-back-excluded
  add-back-excluded)
;; right -- you just need to provide the function;
;; i.e. you DECLARE (via the function) how the db will change/what happens
;; ... it's re-frame that does the actual calling;
;; i.e. reg-event-db accepts an event-id and a event-handler-fn to
;; associate with that event-id


;; DECKS



;; now, if we add a deck and the only other deck was
(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] '()))



(re-frame/reg-event-db
  ::add-deck
  (fn [db [event-id-to-ignore name-for-new-deck]]
    (add-deck db (input-to-keyword name-for-new-deck))))



#_(re-frame/reg-event-db
  ::add-deck
  (fn [db [event-id-to-ignore name-for-new-deck]]
    (assoc-in db [:decks (input-to-keyword name-for-new-deck)] '())))


;; during this step, :cards changes but :current-deck does not change
(defn put-back-old-deck
  [db]
  (let [current-deck (:current-deck db)] ; a keyword
    (as-> db app-state
      (add-back-excluded app-state) ;; update old deck to include :excluded
      (assoc-in app-state ;; put old deck into :decks storage
        [:decks current-deck] (:cards app-state)))))

;; during this step, :cards changes and :current-deck changes,
;; but user provided 'desired deck' does not change

(defn bring-in-new-deck
  [db user-input]
  (let [desired-deck (input-to-keyword user-input)]
    (as-> db app-state
      (assoc app-state :cards (desired-deck (:decks app-state)))
      (assoc app-state :current-deck desired-deck))))

(re-frame/reg-event-db
  ::change-deck
  (fn [db [event-id-to-ignore user-input]]
    (bring-in-new-deck
      (put-back-old-deck db)
      user-input)))

;; bool
(defn removing-current-deck? [db deck-to-remove]
  "Expects deck-to-remove to be a :keyword."
  (= deck-to-remove (:current-deck db)))


;; needs a little more logic too;
;; if removing last deck, then bring in placeholder deck

;; you have this defined both here and in subs...
;; maybe you need to make a utils.cljs?
;; or common.cljs?
(def placeholder-card
  {:front "This deck has no cards yet. Add one!"
   :back "You can flip me. But you really should add a card!"})

(def placeholder-deck
  {:placeholder-deck '(placeholder-card)})

;; bool
(defn no-decks? [db]
  (empty? (:decks db)))

(defn last-deck? [db]
  (= 1 (count (:decks db))))


;; clearly separe the "parsing of user input" fn
;; from the "event handler fn";
;; ideally, call the "parse user input" before you hand the arg to


(re-frame/reg-event-db
  ::remove-deck
  (fn [db [event-id-to-ignore name-of-deck-to-remove]]
    (let [deck-to-remove (input-to-keyword name-of-deck-to-remove)
          remove-deck (fn [db deck-name]
            (dissoc-in db [:decks deck-name]))]
      (if (last-deck? db)
        (as-> db app-state ;; just use -> here
          (add-deck app-state :placeholder)
          (bring-in-new-deck app-state "placeholder"))
        (if (removing-current-deck? db deck-to-remove)
          (as-> db app-state
            (remove-deck app-state deck-to-remove)
            (bring-in-new-deck app-state (name (first (keys (:decks app-state))))))
          (remove-deck db deck-to-remove))))))


) ;; end of tracer form
