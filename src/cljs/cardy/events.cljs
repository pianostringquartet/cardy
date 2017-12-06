(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]))


(trace-forms {:tracer (tracer :color "blue")}

;; utility events:


; (re-frame/reg-fx
;   :ajax-post
;   (fn ajax-post [{:keys [uri params handler]}]
;     (POST uri {:params params :handler handler})))



(re-frame/reg-fx
  :ajax-post
  (fn ajax-post [{:keys [uri params handler]}]
    (POST uri {:params params :handler handler})))

; accepts uri, params, handler
; returns {:ajax-post {:uri :params :handler}}
(defn post-request [uri params handler]
  {:ajax-post {:uri uri :params params :handler handler}})




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


;; utility event
(re-frame/reg-event-db
  ::go-home
  (fn go-home [db]
    (assoc db :current-panel :home)))



; (def placeholder-card
;   {:front "This deck has no cards yet. Add one!"
;    :back "You can flip me. But you really should add a card!"})

; (def placeholder-deck
;   {:placeholder-deck '(placeholder-card)})


;; ----------------------------------------
;; Helper fns for event handler fns
;; ----------------------------------------

(defn input-to-keyword
  [a-string]
  (keyword (clojure.string/trim a-string)))

; (defn input-to-keyword
;   [a-string]
;   (do (js/console.log "a-string in input-to-keyword is: " a-string)
;     (keyword (clojure.string/trim a-string))))

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


;; DECK SYNCING (client, db)

;; pull (all) decks from external db,
;; and set them as :decks in app-db
;; used when first starting up the app
(re-frame/reg-event-fx
  ::pull-decks
  (fn pull-deck-handler [cofx event]
    {:pull-decks-fx (:email (:db cofx))})) ;; return a map with just the key :pull-decks-effect

;; can you not do a key like ::my-key?

;; AJAX
; (defn pull-decks-fx-ajax)

;; Effect Handler for :pull-decks-fx effect-id
;; i.e. the AJAX-calling fn

;; REWRITE TO USE post-request...
(re-frame/reg-fx
  :pull-decks-fx
  (fn pull-decks-ajax [email]
    (POST
      "/pull-decks"
      {:params {:email email}
        :handler #(re-frame/dispatch [::set-decks %])})))
    ; (GET "/pull-decks" {:handler #(re-frame/dispatch [::set-decks %])})))


;; where decks is "decks from server"
(re-frame/reg-event-db
  ::set-decks
  (fn set-decks-handler [db [event-id-to-ignore decks]]
    (assoc db :decks decks)))


;; push client's decks into external db,
;; used regularly (?) when client
; (re-frame/reg-event-fx
;   ::push-decks
;   (fn push-decks-handler [cofx event]
;     {:push-decks-fx (:decks (:db cofx))}))
; ; ^^^ grabed all decks
; ; i.e. the :decks map in db

; (re-frame/reg-fx
;   :push-decks-fx
;   ; (fn push-decks-ajax [cofx [effect-id-to-ignore decks]]
;   (fn push-decks-ajax [decks]
;     (POST "/push-decks"
;       {:params {:decks decks}
;        :handler #(js/console.log "push-decks-ajax response was: " %)})))


;; no need to do anything with response from server...

; View just passes deck-name (keyword)
; Event Handler fn also retrieves deck itself (set of maps),
; and sends both to Server
; (re-frame/reg-event-fx
;   ::update-deck
;   (fn update-deck! [cofx [event-id-to-ignore deck-name]]
;     {:update-deck-fx {:deck-name deck-name
;                       :deck (get-in cofx [:db :decks deck-name])}}))
; (re-frame/reg-fx
;   :update-deck-fx
;   ; (fn push-decks-ajax [cofx [effect-id-to-ignore decks]]
;   (fn update-deck-ajax [deck-name-and-deck]
;     (POST "/update-deck"
;       {:params deck-name-and-deck ;; map with :deck-name, :deck keys
;        :handler #(js/console.log "update-deck-ajax response was: " %)})))



; takes db (map), deck-name (keyword)
; fills keys :cards, :curr-card, :curr-face, :curr-deck
; returns db
; (defn set-up-deck [db deck-name]
;   (let [cards (deck-name (:decks db))]
;     (-> db
;       (assoc :cards cards)
;       (assoc :current-card (first cards)) ;; assume no empty decks!
;       (assoc :current-deck deck-name))))
; ; where is this really being used?

; (re-frame/reg-event-db
;   ::set-up-deck
;   (fn setup-deck-handler [db [event-id-to-ignore deck-name]]
;     (set-up-deck db (input-to-keyword deck-name))))


; where deck-name is :keyword

; remove-deck event needs to kick off request to delete deck
; from external db too

; (defn remove-deck [db deck-name]
;   (dissoc-in db [:decks deck-name]))



) ; end of tracer form
