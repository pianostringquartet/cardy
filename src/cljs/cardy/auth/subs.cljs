(ns cardy.auth.subs
  (:require [re-frame.core :as re-frame]
            [cardy.events :as events]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "brown")}

(re-frame/reg-sub
  ::pw-reset-message
  (fn pw-reset-message [db]
    (:pw-reset-message db)))

(re-frame/reg-sub
  ::code-verification-failed?
  (fn code-verified? [db]
    (:code-verification-failed? db)))

(re-frame/reg-sub
  ::pw-reset-flow-stage
  (fn pw-reset-flow-stage [db]
    (:pw-reset-flow-stage db)))

(re-frame/reg-sub
  ::login-attempt-failed?
  (fn login-attempt-failed? [db]
    (:login-attempt-failed? db)))

(re-frame/reg-sub
  ::pw-reset-email-sending-failed?
  (fn pw-reset-email-sending-failed? [db]
    (:pw-reset-email-sending-failed? db)))

(re-frame/reg-sub
  ::registration-failure-reason
  (fn registration-failure-reason [db]
    (:registration-failure-reason db)))

(re-frame/reg-sub
  ::email
  (fn email [db]
    (:email db)))

(re-frame/reg-sub
  ::new-pw-not-set?
  (fn new-pw-not-set? [db]
    (:new-pw-not-set? db)))

) ;; end of tracer form
