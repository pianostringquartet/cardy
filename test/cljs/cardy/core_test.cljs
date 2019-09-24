(ns cardy.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [re-frame.core :as re-frame]
            [day8.re-frame.test :as rf-test]
            [cardy.subs :as subs]
            [cardy.edit.events :as edit-events]
            [cardy.study.events :as study-events]
            [cardy.study.subs :as study-subs]
            [cardy.utils :as utils]))

;; TODO:
;; Create test setup for POST requests, external db and localStorage;
;; Significant functionality of the app, including authentication,
;; cannot be tested until then.

;; --------------------
;; Edit panel tests
;; --------------------

(deftest remove-card
  (rf-test/run-test-sync
    (re-frame/dispatch [::utils/initialize-edit-and-study-test-db])
    (let [cards (re-frame/subscribe [::subs/cards])
          card-to-remove {:front "Deutsch" :back "German"}]
      ;; Assert "before" state
      (is (not (empty? (clojure.set/intersection #{card-to-remove} @cards))))
      ;; Trigger the event we're testing
      (re-frame/dispatch [::edit-events/remove-card card-to-remove])
      ;; Assert "after" state
      (is (empty? (clojure.set/intersection #{card-to-remove} @cards))))))

(deftest add-card
  (rf-test/run-test-sync
    (re-frame/dispatch [::utils/initialize-edit-and-study-test-db])
    (let [cards (re-frame/subscribe [::subs/cards])
          user-input "die Zahlen; numbers"
          card-to-add {:front "die Zahlen" :back "numbers"}]
      ;; Assert "before" state
      (is (empty? (clojure.set/intersection #{card-to-add} @cards)))
      ;; Trigger the event we're testing
      (re-frame/dispatch [::edit-events/add-card user-input])
      ;; Assert "after" state
      (is (not (empty? (clojure.set/intersection #{card-to-add} @cards)))))))

;; TODO: proper testing of 'removing last card and returning home'
;; requires test setup for POST requests and external db
(deftest remove-last-card
  (rf-test/run-test-sync
    (re-frame/dispatch [::utils/initialize-edit-and-study-test-db])
    (let [cards (re-frame/subscribe [::subs/cards])
          cards-to-remove #{{:front "Deutsch" :back "German"}
                            {:front "Genau" :back "Exactly"}
                            {:front "Es tut mir leid" :back "I'm sorry"}}]
      ;; Assert "before" state
      (is (not (empty? (clojure.set/intersection cards-to-remove @cards))))
      ;; Trigger the event we're testing
      (doseq [card cards-to-remove]
        (re-frame/dispatch [::edit-events/remove-card card]))
      ;; Assert "after" state
      (is (empty? (clojure.set/intersection cards-to-remove @cards))))))


;; --------------------
;; Study panel tests
;; --------------------

(deftest exclude-card
  (rf-test/run-test-sync
    (re-frame/dispatch [::utils/initialize-edit-and-study-test-db])
    (let [excluded (re-frame/subscribe [::study-subs/excluded])
          current-card (re-frame/subscribe [::study-subs/current-card])
          old-current-card @current-card]
      ;; Assert "before" state
      (is (empty? @excluded))
      ;; Trigger the event we're testing
      (re-frame/dispatch [::study-events/exclude-card])
      ;; Assert "after" state
      (is (not (empty? @excluded)))
      (is (not (empty? (clojure.set/intersection #{old-current-card} @excluded))))
      (is (not (= old-current-card @current-card))))))

;; TODO: Update exclude-card event handler to exclude provided card,
;; not simply the :current-card
(deftest add-back-excluded
  (rf-test/run-test-sync
    (re-frame/dispatch [::utils/initialize-edit-and-study-test-db])
    (let [excluded (re-frame/subscribe [::study-subs/excluded])
          cards (re-frame/subscribe [::subs/cards])
          cards-to-exclude @cards]
      ;; Assert "before" state
      (is (empty? @excluded))
      ;; Trigger the event we're testing
      (doseq [card cards-to-exclude]
        (re-frame/dispatch [::study-events/exclude-card]))
      ;; Assert "after" state
      (is (empty? @excluded))
      (is (= cards-to-exclude @cards)))))
