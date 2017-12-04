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


;; how to source app's current face
;; (i.e. are we supposed to be looking at front or back right now?)
(re-frame/reg-sub
  ::current-face
  (fn current-face [db]
    (:current-face db)))

;; how to source excluded cards
; (re-frame/reg-sub
;   ::excluded
;   (fn excluded [db]
;     (:excluded db)))
;; just bc it's in db doesn't mean it needs to
;; be a node in the sub graph


; probly better to use this + :front vs. :back,
; than separate nodes for front-card, back-card
(re-frame/reg-sub
  ::current-card
  (fn current-card [db]
    (:current-card db)))


; will likely be used by both Study and Edit panels
(re-frame/reg-sub
  ::current-deck
  (fn current-deck [db]
    (:current-deck db)))


(re-frame/reg-sub
  ::decks
  (fn decks [db]
    (:decks db)))


;; LAYER 3 SUBS

; layer 3 subs do not pull directly from db;
; they simply accept input from layer 2 subs,
; and calculate some result
(re-frame/reg-sub
  ::cards
  ;; inputs:
  :<-[::current-deck]
  :<-[::decks]
  ;;
  (fn cards [[current-deck decks]]
    (current-deck decks)))





) ;; end of tracer form

