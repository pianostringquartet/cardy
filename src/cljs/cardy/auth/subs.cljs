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


; used
(re-frame/reg-sub
  ::code-verification-failed?
  (fn code-verified? [db]
    (:code-verification-failed? db)))

(re-frame/reg-sub
  ::pw-reset-flow-stage
  (fn pw-reset-flow-stage [db]
    (:pw-reset-flow-stage db)))

; used only for LOGIN:
; when a login fails,
; you just want to show a single message;
; so this can be a bool, determining whether we
; we show the "login attempt failed" message
(re-frame/reg-sub
  ::login-attempt-failed?
  (fn login-attempt-failed? [db]
    (:login-attempt-failed? db)))


(re-frame/reg-sub
  ::pw-reset-email-sending-failed?
  (fn pw-reset-email-sending-failed? [db]
    (:pw-reset-email-sending-failed? db)))


; used only for REGISTRATION:
; regis can fail for multiple reasons,
; and we want to a hint to user,
; so we want to show the particular reason
; why the registration failed
(re-frame/reg-sub
  ::registration-failure-reason
  (fn registration-failure-reason [db]
    (:registration-failure-reason db)))

; used during password reset flow
; so we don't have to keep asking user for PW
(re-frame/reg-sub
  ::current-email
  (fn current-email [db]
    (:current-email db)))


(re-frame/reg-sub
  ::new-pw-not-set?
  (fn new-pw-not-set? [db]
    (:new-pw-not-set? db)))
; alternative approach would be to have a single
; db primitive like "auth-failure-reason"
; and any failure at an auth stage will set
; a new value for auth-failure-reason

) ;; end of tracer form
