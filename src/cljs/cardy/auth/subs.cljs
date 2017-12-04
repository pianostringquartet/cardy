(ns cardy.auth.subs
  (:require [re-frame.core :as re-frame]
            [cardy.events :as events]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))



; auth views use these subs:

; login-attempt-failed?
; current-email
; pw-reset-flow-stage

; probably should be using this too:
; registration-failure-reason



(trace-forms {:tracer (tracer :color "brown")}


(re-frame/reg-sub
  ::intro-error-message
  (fn intro-error-message [db]
    (:intro-error-message db)))


(re-frame/reg-sub
  ::pw-reset-message
  (fn pw-reset-message [db]
    (:pw-reset-message db)))

(re-frame/reg-sub
  ::code-verified?
  (fn code-verified? [db]
    (:code-verified? db)))



(re-frame/reg-sub
  ::pw-reset-flow-stage
  (fn pw-reset-flow-stage [db]
    (:pw-reset-flow-stage db)))

(re-frame/reg-sub
  ::login-attempt-failed?
  (fn login-attempt-failed? [db]
    (:login-attempt-failed? db)))

(re-frame/reg-sub
  ::registration-failure-reason
  (fn registration-failure-reason [db]
    (:registration-failure-reason db)))


; used during password reset flow
(re-frame/reg-sub
  ::current-email
  (fn current-email [db]
    (:current-email db)))


) ;; end of tracer form
