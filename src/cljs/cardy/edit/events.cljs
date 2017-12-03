(ns cardy.edit.events
  (:require [cardy.db :as db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [GET POST]]

            [cardy.events :refer [new-current-card input-to-card]]
            ))

(trace-forms {:tracer (tracer :color "blue")}


; edit.views uses these events:

; remove-card
; add-card


;; ADDING, REMOVING CARDS

(defn add-card
  [db [event-id-to-ignore user-input]]
  (let [current-cards (:cards db)
        new-card (input-to-card user-input)]
    (as-> db app-state
      (assoc app-state :cards (conj current-cards new-card))
      (new-current-card app-state))))




(re-frame/reg-event-db
  ::add-card
  add-card)


;; return ONE set;
;; thought set might contain more than one card...
;; set -> set
(defn card-to-remove [cards front back]
  (let [cards-to-remove (clojure.set/select
                        #{{:front front :back back}}
                        cards)]
    (if (empty? cards-to-remove)
      #{}
      cards-to-remove)))


;; now, instead of just removing current card,
;; we want to "find" the card in :cards to remove
;; i.e. we receive a front and a back,
;; and exclude the card with that front and back
(defn remove-card [db front back]
  (as-> db app-state
    (assoc app-state :removed (clojure.set/union
                                (card-to-remove (:cards app-state) front back)
                                (:removed app-state)))
    (new-current-card app-state)))



(re-frame/reg-event-db
  ::remove-card
  (fn remove-card-handler [db [event-id-to-ignore front back]]
    (remove-card db front back)))






)
