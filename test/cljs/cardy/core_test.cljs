(ns cardy.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [reagent.core :as reagent :refer [atom]]
            [cardy.core :as rc]

            [re-frame.core :as re-frame]
            [day8.re-frame.test :as rf-test]
            [cardy.events :as events]
            [cardy.subs :as subs]))


; (deftest test-home
;   (is (= true true)))

; (deftest another-test
;   (is (= 2 (+ 1 1))))


; (deftest another-test-2
;   (is (= 4 (+ 3 1))))



; (deftest remove-card
;   (rf-test/run-test-sync
;     ; (test-fixtures) ; what would these be in this case?

;     (re-frame/dispatch [::events/initialize-test-db])

;     (let [removed (re-frame/subscribe [::subs/removed])]

;       ;; Assert "before" state
;       (is (empty? @removed))

;       ;; Trigger the event we're testing
;       (re-frame/dispatch [::events/remove-card])

;       ;; Assert "after" state
;       (is (not (empty? @removed)))
;       (is (not (nil? @removed)))
;       (is (= #{{:front "Deutsch" :back "German"}} @removed)))))


; (deftest add-card
;   (rf-test/run-test-sync

;     (re-frame/dispatch [::events/initialize-test-db])

;     (let [cards (re-frame/subscribe [::subs/cards])
;           user-input "Bayern; Bavaria"
;           added-card {:front "Bayern" :back "Bavaria"}]

;       ;; Assert "before" state
;       (is (not (contains? @cards added-card)))

;       (def before-card-count (count @cards))

;       ;; Trigger the event we're testing
;       (re-frame/dispatch [::events/add-card user-input])

;       ;; Assert "after" state
;       (is (contains? @cards added-card))
;       (is (= (inc before-card-count) (count @cards))))))


; (deftest change-deck
;   (rf-test/run-test-sync

;     (re-frame/dispatch [::events/initialize-test-db])

;     (let [cards (re-frame/subscribe [::subs/cards])
;           current-deck (re-frame/subscribe [::subs/current-deck])
;           current-card (re-frame/subscribe [::subs/current-card])
;           user-input "one-card-deck"
;           ; before-card {:front "Deutsch" :back "German"}
;           expected-card {:front "das Haus" :back "house"}]

;       ;; Assert "before" state
;       (is (not (contains? @cards expected-card)))

;       (def before-current-card @current-card)
;       (def before-current-deck @current-deck)

;       ;; Trigger the event we're testing
;       (re-frame/dispatch [::events/change-deck user-input])

;       ;; Assert "after" state
;       (is (contains? @cards expected-card))
;       (is (= @current-deck (events/input-to-keyword user-input)))
;       (is (not (= before-current-deck @current-deck)))
;       (is (not (= before-current-card @current-card))))))



; (deftest exclude-card
;   (rf-test/run-test-sync

;     (re-frame/dispatch [::events/initialize-test-db])

;     (let [cards (re-frame/subscribe [::subs/cards])
;           excluded (re-frame/subscribe [::subs/excluded])
;           current-card (re-frame/subscribe [::subs/current-card])
;           ; user-input "one-card-deck"
;           ; before-card {:front "Deutsch" :back "German"}
;           ; expected-card {:front "das Haus" :back "house"}
;           ]

;       ;; Assert "before" state
;       ; (is (not (contains? @cards expected-card)))
;       (is (empty? @excluded))

;       (def before-current-card @current-card)

;       ;; Trigger the event we're testing
;       (re-frame/dispatch [::events/exclude-card])

;       ;; Assert "after" state
;       (is (not (empty? @excluded)))
;       (is (not (= before-current-card @current-card))))))



; (deftest remove-last-card
;   (rf-test/run-test-sync

;     (re-frame/dispatch [::events/initialize-test-db])

;     (let [removed (re-frame/subscribe [::subs/removed])
;           current-card (re-frame/subscribe [::subs/current-card])]

;       ;; Assert "before" state
;       (is (empty? @removed))

;       ;; Trigger the event we're testing
;       (re-frame/dispatch [::events/change-deck "one-card-deck"])
;       (def before-current-card @current-card)
;       (re-frame/dispatch [::events/remove-card])

;       ;; Assert "after" state
;       (is (not (empty? @removed)))
;       (is (= #{before-current-card} @removed))
;       (is (= subs/placeholder-card @current-card)))))




; ; (deftest basic--sync
; ;   (rf-test/run-test-sync
; ;     (test-fixtures)
; ;     (rf/dispatch [:initialise-db])

; ;         ;; Define subscriptions to the app state
; ;         (let [showing         (rf/subscribe [:showing])
; ;               sorted-todos    (rf/subscribe [:sorted-todos])
; ;               todos           (rf/subscribe [:todos])
; ;               visible-todos   (rf/subscribe [:visible-todos])
; ;               all-complete?   (rf/subscribe [:all-complete?])
; ;               completed-count (rf/subscribe [:completed-count])
; ;               footer-counts   (rf/subscribe [:footer-counts])]

; ;           ;;Assert the initial state
; ;           (is (= :all @showing))
; ;           (is (empty? @sorted-todos))
; ;           (is (empty? @todos))
; ;           (is (empty? @visible-todos))
; ;           (is (= false (boolean @all-complete?)))
; ;           (is (= 0 @completed-count))
; ;           (is (= [0 0] @footer-counts))

; ;           ;;Dispatch the event that you want to test, remember that `re-frame-test`
; ;           ;;will process this event immediately.
; ;           (rf/dispatch [:add-todo "write first test"])

; ;           ;;Test that the dispatch has mutated the state in the way that we expect.
; ;           (is (= 1 (count @todos) (count @visible-todos) (count @sorted-todos)))
; ;           (is (= 0 @completed-count))
; ;           (is (= [1 0] @footer-counts))
; ;           (is (= {:id 1, :title "write first test", :done false}
; ;                  (first @todos)))
