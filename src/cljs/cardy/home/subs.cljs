(ns cardy.home.subs
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


; home views uses:
; decks


(trace-forms {:tracer (tracer :color "brown")}


;; how to source decks
(re-frame/reg-sub
  ::decks
  (fn decks [db]
    (:decks db)))

    )

