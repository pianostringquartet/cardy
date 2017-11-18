(ns cardy.events
  (:require [cardy.db :as db]
            [re-frame.core :refer [dispatch reg-event-db reg-sub]]))

;;dispatchers

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :page page)))

(reg-event-db
  :set-docs
  (fn [db [_ docs]]
    (assoc db :docs docs)))


(reg-event-db
  :request
  (fn [db [event-id-to-ignore response]]
    (assoc db :incredible "INCREDIBLE BUTTON WAS PRESSED!")))
;; this worked :-)


(reg-event-db
  :add-card
  (fn [db [event-id-to-ignore response]]
    (assoc db :add-card "WE TRIGGERED THE EVENT TO ADD A CARD!")))


; (reg-event-db
;   :set-deck
;   (fn [db [event-id-to-ignore deck-name response]]
;     (assoc db (keyword deck-name) response)))

(reg-event-db
  :set-deck
  (fn [db [event-id-to-ignore deck-name response]]
    (assoc-in db [:decks (keyword deck-name)] response)
    ))



;;subscriptions

(reg-sub
  :page
  (fn [db _]
    (:page db)))

(reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(reg-sub
  :show-decks
  (fn [db]
    (:decks db)))
