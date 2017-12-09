(ns cardy.edit.subs
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::removed
  (fn removed-cards [db]
    (:removed db)))

) ;; end of tracer form
