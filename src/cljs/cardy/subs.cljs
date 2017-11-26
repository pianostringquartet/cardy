(ns cardy.subs
  (:require [re-frame.core :as re-frame]
            [cardy.events :as events]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            ))


(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::current-panel
  (fn current-panel [db]
    (:current-panel db)))




; (re-frame/reg-sub
;   :page
;   (fn [db _]
;     (:page db)))

; (re-frame/reg-sub
;   :docs
;   (fn [db _]
;     (:docs db)))


(re-frame/reg-sub
  ::show-decks
  (fn show-decks [db]
    (:decks db)))


;; how to source the app's cards
(re-frame/reg-sub
  ::cards
  (fn cards [db]
    (:cards db)))





(re-frame/reg-sub
  ::current-card-front
  (fn current-card-front [db]
    (:front (:current-card db))))

(re-frame/reg-sub
  ::current-card-back
  (fn current-card-back [db]
    (:back (:current-card db))))


(re-frame/reg-sub
  ::front-flag
  (fn front-flag [db]
    (:front-flag db)))

(re-frame/reg-sub
  ::back-flag
  (fn back-flag [db]
    (:back-flag db)))


(re-frame/reg-sub
  ::show-back?
  (fn show-back [db]
    (:show-back? db)))


;; still how to source the app's current card,
;; but now the "current card" is a number (i.e. an index position)
;; instead of an actual card
(re-frame/reg-sub
  ::current
  (fn current [db]
    (:current db)))

;; how to source app's current face
;; (i.e. are we supposed to be looking at front or back right now?)
(re-frame/reg-sub
  ::current-face
  (fn current-face [db]
    (:current-face db)))

;; how to source excluded cards
(re-frame/reg-sub
  ::excluded
  (fn excluded [db]
    (:excluded db)))

;; how to source decks
(re-frame/reg-sub
  ::decks
  (fn decks [db]
    (:decks db)))

;; how to source the current deck
(re-frame/reg-sub
  ::current-deck
  (fn current-deck [db]
    (:current-deck db)))

(re-frame/reg-sub
  ::starter-deck
  (fn starter-deck [db]
    (:starter (:decks db))))


;; helper fn..
;; where should this logic go -- in the subs (i.e. data sourcing)
;; or in the views?


(def placeholder-card
  {:front "This deck has no cards yet. Add one!"
   :back "You can flip me. But you really should add a card!"})

;; returns bool
;; is :cards empty?
(defn empty-cards? []
  (empty? @(re-frame/subscribe [::cards])))
;; I have to use the double colon?

;; can we use a sub here? ... well, why not?
;; The re-framers advise against uses subs in event handlers
;; Ah, the re-framers recommend only using subs in views...


;; returns bool
;; is :excluded empty?
(defn cards-excluded? []
  (not (empty? @(re-frame/subscribe [::excluded]))))

;; are there no more cards in this deck ?
(defn all-cards-removed? []
  (and empty-cards? (not (cards-excluded?))))


;; clean this up; use condp?
(defn determine-current-card [db]
  (let [current-index (:current db)
        cards (:cards db)]
      (if (not (empty-cards?))
        (nth cards current-index)
        (if (and (empty-cards?) (cards-excluded?))
            (re-frame/dispatch [::events/add-back-excluded])
            ;; is this weird, to dispatch an event in a subscription?

            {:front "This deck has no cards yet. Add one!"
             :back "You can flip me. But you really should add a card!"}
          ))))


; (re-frame/reg-sub
;   ::current-card
;   (fn current-card [db]
;     (determine-current-card db)))

(re-frame/reg-sub
  ::current-card
  (fn current-card [db]
    (:current-card db)))


;; hmm... can subscriptions refer to each other?
;; how to handle this?
; (re-frame/reg-sub
;   ::current-phrase
;   (fn current-phrase [db]
;     (let [current-face (:current-face db)]
;       (current-face (determine-current-card db)))))

(re-frame/reg-sub
  ::current-phrase
  (fn current-phrase [db]
    (let [current-face (:current-face db)]
      (current-face (:current-card db)))))


(re-frame/reg-sub
  ::removed
  (fn removed-cards [db]
    (:removed db)))


(re-frame/reg-sub
  ::intro-error-message
  (fn intro-error-message [db]
    (:intro-error-message db)))



) ;; end of tracer form

