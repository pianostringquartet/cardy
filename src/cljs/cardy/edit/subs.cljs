(ns cardy.edit.subs
  (:require [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


; edit views uses:
; cards
; removed


(trace-forms {:tracer (tracer :color "brown")}

;; how to source the app's cards

; (re-frame/reg-sub
;   ::cards
;   (fn cards [db]
;     (:cards db)))

; i hate the "setup cards, sometimes mutate it (add-card),
; sometimes filter it (remove-card)"

; so have add-card and remove-card directly affect the :current-deck in :decks
; and make :cards a layer 3 query fn that receives (:curr-deck :decks) as input,
; and so-by updates whenever we add- or remove-card


; add really, you'll want to use this :cards sub in the study panel too

;; SEE main subs.cljs


(re-frame/reg-sub
  ::removed
  (fn removed-cards [db]
    (:removed db)))


)
