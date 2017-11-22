(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]
            ))


 (trace-forms {:tracer (tracer :color "blue")}



(def placeholder-card
  {:front "This deck has no cards yet. Add one!"
   :back "You can flip me. But you really should add a card!"})

(def placeholder-deck
  {:placeholder-deck '(placeholder-card)})

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
  ::initialize-test-db
  (fn [_ _]
    db/test-db))


(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
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

;; move to next card
; #_(re-frame/reg-event-db
;   ::next
;   (fn [db]
;     (let [current-index (:current db)]
;       (assoc db :current (inc current-index)))))


; (defn next-card [db]
;   (let [excluded (:excluded db)
;         current-card (:current-card db)
;         cards (:cards db)]
;     (first (shuffle (remove (conj excluded current-card) cards)))))


;; accepts db, returns card
(defn next-card [db]
  (let [ineligible
          (conj
            (clojure.set/union (:excluded db) (:removed db))
            (:current-card db))]
    (first (shuffle (remove ineligible (:cards db))))))

;; accepts db, returns db with new :current-card
; (defn new-current-card [db]
;   (assoc db :current-card (next-card db)))


(defn new-current-card [db]
  (let [new-card (next-card db)]
    (cond

      ; test 1
      (and (nil? new-card)
           (not (empty? (:excluded db))))
      ; return 1
      (new-current-card (add-back-excluded db))
      ;; ^^^ this is recursive, but when we call new-curr-card the 2nd time,
      ;; the db param will have an empty :excluded,
      ;; so test 1 will return false

      ; test 2
      (nil? new-card)
      ; return 2
      (assoc db :current-card placeholder-card)

      ;; else default
      :else (assoc db :current-card new-card)

      )))





(re-frame/reg-event-db
  ::next
  new-current-card)




;; ADDING, REMOVING CARDS

(defn add-card
  ; [db input]
  [db [event-id-to-ignore user-input]]
  (let [current-cards (:cards db)
        ; new-card (input-to-card input)]
        new-card (input-to-card user-input)]
    (assoc db :cards (conj current-cards new-card))))


(re-frame/reg-event-db
  ::add-card
  add-card)

; (re-frame/reg-event-db
;   ::add-card
;   (fn add-card [db input]
;     (let [current-cards (:cards db)
;           new-card (input-to-card input)]
;       (assoc db :cards (conj current-cards new-card)))))




(defn remove-card [db]
  (as-> db app-state
    (assoc app-state :removed (clojure.set/union
                                #{(:current-card app-state)}
                                 (:removed app-state)))
    (new-current-card app-state)))

(re-frame/reg-event-db
  ::remove-card
  remove-card)




;; EXCLUDING CARDS


;; add card to :excluded set
; (re-frame/reg-event-db
;   ::exclude-card
;   (fn exclude-card [db]
;     (let [excluded (:excluded db)
;           current-card (:current-card db)]
;       (as-> db app-state
;         (assoc app-state :excluded (conj excluded current-card))
;         ;; next-card needs updated :excluded set :-)
;         (assoc app-state :current-card (next-card app-state)))
;       )))




(defn exclude-card [db]
  (let [excluded (:excluded db)
        current-card (:current-card db)]
    (as-> db app-state
      (assoc app-state :excluded (conj excluded current-card))
      ;; next-card needs updated :excluded set :-)
      (new-current-card app-state))
    ))


(re-frame/reg-event-db
  ::exclude-card
  exclude-card)


; (re-frame/reg-event-db
;   ::exclude-card
;   (fn exclude-card [db]
;     (let [excluded (:excluded db)
;           current-card (:current-card db)]
;       (as-> db app-state
;         (assoc app-state :excluded (conj excluded current-card))
;         ;; next-card needs updated :excluded set :-)
;         (new-current-card app-state))
;       )))




; (re-frame/reg-event-db
;   ::exclude-card
;   (fn exclude-card [db]
;     (let [current-cards (:cards db)
;           current-excluded (:excluded db)
;           current-card (nth current-cards current-index)]
;       (-> db
;         (assoc :excluded (conj current-excluded current-card))
;         (assoc :cards (drop-nth current-index current-cards))))))



; (re-frame/reg-event-db
;   ::exclude-card
;   (fn exclude-card [db]
;     (let [current-index (:current db)
;           current-cards (:cards db)
;           current-excluded (:excluded db)
;           current-card (nth current-cards current-index)]
;       (-> db
;         (assoc :excluded (conj current-excluded current-card))
;         (assoc :cards (drop-nth current-index current-cards))))))



;; separate out this event handler fn,
;; bc you need to use it instead as just a fn in change-deck event hander fn
; (defn add-back-excluded
;   [db]
;   (let [current-excluded (:excluded db)
;           current-cards (:cards db)]
;       (-> db
;         (assoc :cards (flatten (conj current-cards current-excluded)))
;         (assoc :excluded '()))))



; #_(re-frame/reg-event-db
;   ::add-back-excluded
;   (fn [db]
;     (let [current-excluded (:excluded db)
;           current-cards (:cards db)]
;       (-> db
;         (assoc :cards (flatten (conj current-cards current-excluded)))
;         (assoc :excluded '())))))


(re-frame/reg-event-db
  ::add-back-excluded
  add-back-excluded)
;; right -- you just need to provide the function;
;; i.e. you DECLARE (via the function) how the db will change/what happens
;; ... it's re-frame that does the actual calling;
;; i.e. reg-event-db accepts an event-id and a event-handler-fn to
;; associate with that event-id



(defn clear-removed [db]
  (assoc db :removed #{}))


;; DECKS



;; now, if we add a deck and the only other deck was
; (defn add-deck [db deck-name]
;   "Assumes deck-name is :keyword"
;   (assoc-in db [:decks deck-name] '()))

(defn add-deck [db deck-name]
  "Assumes deck-name is :keyword"
  (assoc-in db [:decks deck-name] #{}))


(re-frame/reg-event-db
  ::add-deck
  (fn add-deck-handler [db [event-id-to-ignore name-for-new-deck]]
    (add-deck db (input-to-keyword name-for-new-deck))))


#_(re-frame/reg-event-db
  ::add-deck
  (fn [db [event-id-to-ignore name-for-new-deck]]
    (assoc-in db [:decks (input-to-keyword name-for-new-deck)] '())))




;; during this step, :cards changes but :current-deck does not change
; (defn put-back-old-deck
;   [db]
;   (let [current-deck (:current-deck db)] ; a keyword
;     (as-> db app-state
;       (add-back-excluded app-state) ;; update old deck to include :excluded
;       (assoc-in app-state ;; put old deck into :decks storage
;         [:decks current-deck] (:cards app-state)))))


;; when we put back an old deck, we set :excluded to #{}
;; and do not include the "removed" cards
; (defn put-back-old-deck
;   [db]
;   (let [deck-less-removed (clojure.set/difference (:cards db) (:removed db))]
;     (clear-removed
;       (assoc-in
;         (add-back-excluded db) ;; set :excluded to #{}
;         [:decks (:current-deck db)] ;; path: :decks :current-deck
;         deck-less-removed))))


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

; (re-frame/reg-event-db
;   ::change-deck
;   (fn change-deck [db [event-id-to-ignore user-input]]
;     (bring-in-new-deck
;       (put-back-old-deck db)
;       user-input)))

; (re-frame/reg-event-db
;   ::change-deck
;   (fn change-deck [db [event-id-to-ignore user-input]]
;     (bring-in-new-deck
;       (put-back-old-deck db)
;       user-input)))


(defn change-deck
  [db [event-id-to-ignore user-input]]
  (as-> db app-state
    (put-back-old-deck app-state)
    (bring-in-new-deck app-state user-input)
    (assoc app-state :current-card (next-card app-state))))

(re-frame/reg-event-db
  ::change-deck
  change-deck)

; (re-frame/reg-event-db
;   ::change-deck
;   (fn change-deck [db [event-id-to-ignore user-input]]
;     (as-> db app-state
;       (put-back-old-deck app-state)
;       (bring-in-new-deck app-state user-input)
;       (assoc app-state :current-card (next-card app-state)))))



;; bool
(defn removing-current-deck? [db deck-to-remove]
  "Expects deck-to-remove to be a :keyword."
  (= deck-to-remove (:current-deck db)))


;; needs a little more logic too;
;; if removing last deck, then bring in placeholder deck

;; you have this defined both here and in subs...
;; maybe you need to make a utils.cljs?
;; or common.cljs?


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
  (fn remove-deck-handler [db [event-id-to-ignore name-of-deck-to-remove]]
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
            (bring-in-new-deck app-state (name (first (keys (:decks app-state)))))
            (new-current-card app-state))
          (remove-deck db deck-to-remove))))))


) ;; end of tracer form
