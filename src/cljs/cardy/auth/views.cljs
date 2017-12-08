(ns cardy.auth.views
  (:require [re-frame.core :as re-frame]
            [cardy.auth.subs :as subs]
            [cardy.auth.events :as events]
            [cardy.events :as core-events]
            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]
            [reanimated.core :as anim]))


(trace-forms {:tracer (tracer :color "gold")}


(defn home-panel-button []
  [:input
    {:type "button" :value "home"
     :on-click #(re-frame/dispatch [::core-events/change-panel :home])}])

(defn intro-picture [img-src ]
  (let [tilt (reagent/atom 0)
        rotation (anim/spring tilt)]
    (fn jingle-component []
      [:div
      [anim/timeout #(reset! tilt 5)]
      [anim/timeout #(reset! tilt -5) 1500]
      [anim/timeout #(reset! tilt 0) 2000]
       [:img
          ; {:src "intent_bear.png"
          {:src "/img/intent_bear.png"
           :width "300px"
           :height "200px"
           :style (zipmap [:-ms-transform
                           :-moz-transform
                           :-webkit-transform
                           :transform]
                          (repeat (str "rotate(" @rotation "deg)")))}]])))

(defn pw-reset-picture []
  [re-com/box
    :max-width "200px"
    :max-height "300px"
    :child [:img {:src "/img/bearstack_right_facing.png"}]])


(defn reset-code-sent-picture []
  (let [tilt (reagent/atom 0)
        rotation (anim/spring tilt)]
    (fn jingle-component []
      [:div
      [anim/timeout #(reset! tilt 30) 1000]
      [anim/timeout #(reset! tilt 0) 2000]
      [anim/timeout #(reset! tilt -30) 3000]
      [anim/timeout #(reset! tilt 0) 4000]
       [:img
          {:src "/img/bearstack_right_facing.png"
           :width "200px"
           :style (zipmap [:-ms-transform
                           :-moz-transform
                           :-webkit-transform
                           :transform]
                          (repeat (str "rotate(" @rotation "deg)")))}]])))




(defn code-verified-picture []
  [re-com/box
    :max-width "200px"
    :max-height "300px"
    :child [:img {:src "/img/bearstack_right_facing_handup.png"}]])

(defn message-for-user [sub message]
  (when @sub
    [re-com/box
      :align-self :center
      :padding "5px"
      :child [re-com/title
                :label message
                :level :level3
                :style {:color "red" :font-size "12px"}]]))

(defn password-input [model]
  [re-com/input-password
    :model model
    :placeholder "password"
    :on-change #(reset! model %)
    :change-on-blur? true])

(defn form-submit [submit-name on-click-fn]
  [:input
    {:type "button"
     :value submit-name
     :on-click on-click-fn}])

(defn primary-input [input-name state]
  [re-com/input-text
          :model state
          :placeholder input-name
          :on-change #(reset! state %)
          :attr {:auto-focus "true"}
          :change-on-blur? true])

(defn login-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")
        login-failed? (re-frame/subscribe [::subs/login-attempt-failed?])
        ]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password]
          [message-for-user
            login-failed?
            "Uh oh - login failed. Check email and password?"]
          [form-submit
            "login"
            (fn [] (re-frame/dispatch [::events/login "" @email @password]))]]])))


(defn registration-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")
        registration-failed-bc (re-frame/subscribe [::subs/registration-failure-reason])]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password]
          [message-for-user
            registration-failed-bc
            @registration-failed-bc]
          [form-submit
            "register"
            (fn [] (re-frame/dispatch [::events/register "" @email @password]))]]])))



(defn request-reset-code-form []
  (let [email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Let's get you a new password!"]
          [primary-input "email" email]
          [form-submit
            "send reset code"
            (fn [] (re-frame/dispatch [::events/verify-user-exists @email]))]
          ]])))


(defn verify-reset-code-form []
  (let [code (reagent/atom "")
        email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code sent! Check your email."] ; i.e. what we just did
          [primary-input "code" code]
          [form-submit
            "enter password reset code"
            (fn [] (re-frame/dispatch
                      [::events/verify-pw-reset-code
                        @(re-frame/subscribe [::subs/email])
                        @code]))]]])))

(defn set-new-password-form []
  (let [password (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code verified! Now let's set your new password."]
          [password-input password]
          [form-submit
            "save new password"
            (fn [] (re-frame/dispatch [::events/set-new-pw @password]))]]])))




(defn pw-reset-email-sending-failed-message []
  (let [reset-mail-failed? (re-frame/subscribe [::subs/pw-reset-email-sending-failed?])]
    (fn []
      (when @reset-mail-failed?
        [re-com/title :label "Hmmm... We couldn't find that email."]))))

(defn code-verification-message []
  (let [code-verification-failed? (re-frame/subscribe [::subs/code-verification-failed?])]
    (fn []
      (when @code-verification-failed?
        [re-com/title :label "That reset code doesn't match."]))))

(defn new-pw-not-set-message []
  (let [new-pw-not-set? (re-frame/subscribe [::subs/new-pw-not-set?])]
    (fn []
      (when @new-pw-not-set?
        [re-com/title
          :label (str "Password must at least 8 characters long,"
                      "and contain one number and one uppercase and one lowercase letter.")]))))

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
                    [message-for-user
                      reset-mail-failed?
                      "Hmmm... We couldn't find that email."]]]

              :confirming-pw-reset-code
                [re-com/v-box
                  :align :center
                  :gap "10px"
                  :children [
                    ; [pw-reset-picture]
                    [reset-code-sent-picture]
                    [verify-reset-code-form]
                    [message-for-user
                      code-verification-failed?
                      "That's not the reset code we sent you!"]]]

              :setting-new-pw
                [re-com/v-box
                  :align :center
                  :gap "10px"
                  :children [
                    [code-verified-picture]
                    [set-new-password-form]
                    [message-for-user
                      new-pw-not-set?
                      (str "Password must be at least 8 characters long,"
                           " and contain one number and one uppercase"
                           " and one lowercase letter.")]]])]])))


;; GET RID OF THIS
(defn item-for-id
  "Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
   Returns nil if id not found"
  [id v & {:keys [id-fn] :or {id-fn :id}}]
  (first (filter #(= (id-fn %) id) v)))

;;
(def tabs-definition
  [{:id ::tab1  :label "Login" :comp [login-form]}
   {:id ::tab2  :label "Register" :comp [registration-form]}])

(defn login-or-register-form []
  (let [selected-tab-id (reagent/atom (:id (first tabs-definition)))     ;; holds the id of the selected tab
        change-tab      #(reset! selected-tab-id %)
        fn-name-width   "240px"]
    (fn []
      [re-com/v-box
        :align :center
        :gap "20px"
        :children [
          [re-com/horizontal-tabs
            :model     selected-tab-id
            :tabs      tabs-definition
            :on-change change-tab]
          ; okay, we should not need this bs "item-for-id" fn
          [re-com/box
            :align :center
            :child (:comp (item-for-id @selected-tab-id tabs-definition))
            ]]])))


(defn intro-panel []
  [re-com/v-box
    :gap "20px"
    :align :center
    :children [
      [intro-picture]
      [re-com/v-box
        :gap "5px"
        :children [
          [login-or-register-form]
          [re-com/hyperlink
            :label "Forgot password?"
            :on-click #(re-frame/dispatch [::core-events/change-panel :pw-reset])
            :style {:color "blue"}]]]]])


) ;; end of tracer form

