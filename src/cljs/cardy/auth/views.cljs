(ns cardy.auth.views
  (:require [re-frame.core :as re-frame]
            [cardy.auth.subs :as subs]
            [cardy.auth.events :as events]
            [cardy.events :as core-events]
            [cardy.views :as core-views]
            [cardy.views :refer [tab tab-pane]]
            [cardy.constants :as constants]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]

            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [reanimated.core :as anim]))


;;; ----------------------------------------
;;; Pictures
;;; ----------------------------------------

;; Do not re-frame-trace these animation components;
;; they simply clutter up the developer console.
(defn jingle-picture [img-src img-width img-height]
  (let [tilt (reagent/atom 0)
        rotation (anim/spring tilt)]
    (fn jingle-component []
      [:div
      [anim/interval
        #(reset! tilt (first (shuffle [-7 -5 -2 0 2 5 7])))
        500]
       [:img
          {:src img-src
           :width img-width
           :height img-height
           :on-click #(reset! tilt 270)
           :style (zipmap [:-ms-transform
                           :-moz-transform
                           :-webkit-transform
                           :transform]
                          (repeat (str "rotate(" @rotation "deg)")))}]])))

(defn auth-picture []
  [jingle-picture "/img/intent_bear.png" "300px" "200px"])

(defn pw-reset-picture []
  [jingle-picture "/img/bearstack_right_facing.png" "200px" "300px"])

(defn reset-code-sent-picture []
  [jingle-picture "/img/bearstack_right_facing.png" "200px" "300px"])

(defn code-verified-picture []
  [jingle-picture "/img/bearstack_right_facing_handup.png" "200px" "300px"])

(trace-forms {:tracer (tracer :color "gold")}

;;; ----------------------------------------
;;; Utility components
;;; ----------------------------------------

(defn message-for-user [message]
    [re-com/box
      :align-self :center
      :padding "5px"
      :child [
        core-views/wrap-text
          message
          {:font-size "80%" :width "200px" :min-width "200px" :color "red"}]])

(defn password-input [model placeholder]
    [re-com/input-password
      :model model
      :placeholder placeholder
      :on-change #(reset! model %)
      :change-on-blur? true])

(defn form-submit [submit-name on-click-fn]
  [re-com/button
    :label submit-name
    :class "btn btn-success"
    :on-click on-click-fn])

(defn primary-input [input-name state]
  [re-com/input-text
    :model state
    :placeholder input-name
    :change-on-blur? true
    :on-change #(reset! state %)
    :attr {:auto-focus "true"}])

;;; ----------------------------------------
;;; Logging and registering
;;; ----------------------------------------

;; TODO:
;; Submit forms (login-form, registration-form etc.) on Enter key
;; even when "submit button" is not focused.

;; TODO:
;; Use 'username', not just 'email', so that the email for a given user's
;; account can be changed.
(defn login-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")
        login-failed? (re-frame/subscribe [::subs/login-attempt-failed?])]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password "password"]
          (when @login-failed?
            [message-for-user "Uh oh - login failed. Check email and password?"])
          [form-submit
            "login"
            (fn [] (re-frame/dispatch [::events/login "" @email @password]))]]])))

(defn registration-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")
        password-confirm (reagent/atom "")
        registration-failed-bc (re-frame/subscribe [::subs/registration-failure-reason])]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password "password"]
          [password-input password-confirm "confirm password"]
          (when @registration-failed-bc
            [message-for-user @registration-failed-bc])
          [form-submit
            "register"
            (fn []
              (if (not= @password @password-confirm)
                (re-frame/dispatch
                  [::events/attempt-registration-error constants/PASSWORDS-DO-NOT-MATCH])
                (re-frame/dispatch
                  [::events/register "" @email @password])))]]])))

(def tabs
  [{:menuItem "Login" :render #(reagent/as-element [:> tab-pane [login-form]])}
   {:menuItem "Register" :render #(reagent/as-element [:> tab-pane [registration-form]])}])

(defn login-or-register-form []
  [:> tab {:panes tabs}])

;;; ----------------------------------------
;;; Resetting a forgotten password
;;; ----------------------------------------

(defn go-back-button
  "Return to login/register screen."
  []
  [re-com/button
    :label "go back"
    :on-click #(re-frame/dispatch [::events/exit-pw-reset-flow])
    :class "btn btn-danger"])

(defn request-reset-code-form []
  (let [email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Let's get you a new password!"]
          [primary-input "email" email]
          [re-com/h-box
            :gap "10px"
            :children [
              [form-submit
                "send reset code"
                (fn [] (re-frame/dispatch [::events/verify-user-exists @email]))]
              [go-back-button]]]]])))

(defn verify-reset-code-form []
  (let [code (reagent/atom "")
        email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code sent! Check your email."]
          [primary-input "code" code]
          [re-com/h-box
            :gap "10px"
            :children [
              [form-submit
                "enter password reset code"
                (fn [] (re-frame/dispatch
                          [::events/verify-pw-reset-code
                            @(re-frame/subscribe [::subs/email])
                            @code]))]
              [go-back-button]]]]])))

(defn set-new-password-form []
  (let [password (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code verified! Now let's set your new password."]
          [password-input password "new password"]
          [re-com/h-box
            :gap "10px"
            :children [
              [form-submit
                "save new password"
                (fn [] (re-frame/dispatch [::events/set-new-pw @password]))]
              [go-back-button]]]]])))

;;; ------------------------------------------
;;; Panels (login/register or password reset)
;;; ------------------------------------------

(defn pw-reset-panel []
  (let [flow-stage (re-frame/subscribe [::subs/pw-reset-flow-stage])
        reset-mail-failed? (re-frame/subscribe [::subs/pw-reset-email-sending-failed?])
        code-verification-failed? (re-frame/subscribe [::subs/code-verification-failed?])
        new-pw-not-set? (re-frame/subscribe [::subs/new-pw-not-set?])]
    (fn []
        [re-com/v-box
          :align :center
          :padding "10px"
          :gap "25px"
          :children [
            (case @flow-stage
              :sending-pw-reset-email
                [re-com/v-box
                  :align :center
                  :gap "10px"
                  :children [
                    [pw-reset-picture]
                    [request-reset-code-form]
                    (when @reset-mail-failed?
                      [message-for-user "Hmmm... We couldn't find that email."])]]
              :confirming-pw-reset-code
                [re-com/v-box
                  :align :center
                  :gap "10px"
                  :children [
                    [reset-code-sent-picture]
                    [verify-reset-code-form]
                    (when @code-verification-failed?
                      [message-for-user "That's not the reset code we sent you!"])]]
              :setting-new-pw
                [re-com/v-box
                  :align :center
                  :gap "10px"
                  :children [
                    [code-verified-picture]
                    [set-new-password-form]
                    (when @new-pw-not-set?
                      [message-for-user
                         "Password must be at least 8 characters long,"
                         " and contain one number and one uppercase"
                         " and one lowercase letter."])]])]])))

(defn auth-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [auth-picture]
      [re-com/v-box
        :gap "10px"
        :children [
          [login-or-register-form]
          [re-com/hyperlink
            :label "Forgot password?"
            :on-click #(re-frame/dispatch [::core-events/goto :pw-reset])
            :style {:color "blue"}]]]]])

) ;; end of tracer form

