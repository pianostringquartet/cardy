(ns cardy.subs
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::logged-in?
  (fn logged-in? [db]
    (:logged-in? db)))

;; TO DO?:
;; Disambiguate :session --
;; currently, :session can be either
;; false (bool) or an email (string)
(re-frame/reg-sub
  ::session
  (fn session [db]
    (:session db)))

(re-frame/reg-sub
  ::current-panel
  (fn current-panel [db]
    (:current-panel db)))

(re-frame/reg-sub
  ::current-deck
  (fn current-deck [db]
    (:current-deck db)))

(re-frame/reg-sub
  ::decks
  (fn decks [db]
    (:decks db)))

(re-frame/reg-sub
  ::cards
  :<-[::current-deck]
  :<-[::decks]
  (fn cards [[current-deck decks]]
    (current-deck decks)))

) ;; end of tracer form
