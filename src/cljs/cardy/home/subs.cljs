(ns cardy.home.subs
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::decks
  (fn decks [db]
    (:decks db)))

) ;; end of tracer form
