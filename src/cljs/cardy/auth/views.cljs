(ns cardy.auth.views
  (:require [re-frame.core :as re-frame]

            [cardy.auth.subs :as subs]

            [cardy.auth.events :as events]

            [cardy.events :as core-events]


            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "gold")}



(defn home-panel-button []
  [:input
    {:type "button" :value "home"
     :on-click #(re-frame/dispatch [::core-events/change-panel :home])}])


(defn display-pw-reset-note []
  (let [user-error @(re-frame/subscribe [::subs/pw-reset-message])]
        (when user-error
          [re-com/box
            :align-self :center
            :child
              [re-com/title
                :label user-error :level :level3
                :style {:color "red" :font-size "14px"}
                ]
          ]
                )))


(defn display-reset-code-note []
  (let [user-error @(re-frame/subscribe [::subs/code-verified])]
        (when user-error
          [re-com/box
            :align-self :center
            :child
              [re-com/title
                :label user-error :level :level3
                :style {:color "red" :font-size "14px"}
                ]
          ]
                )))


(defn intro-picture []
  [re-com/box
    :max-width "300px"
    :max-height "200px"
    :child [:img {:src "intent_bear.png"}]])

(defn pw-reset-picture []
  [re-com/box
    :max-width "200px"
    :max-height "300px"
    :child [:img {:src "bearstack_right_facing.png"}]])

(defn code-verified-picture []
  [re-com/box
    :max-width "200px"
    :max-height "300px"
    :child [:img {:src "bearstack_right_facing_handup.png"}]])



(defn display-login-failure []
  ; (let [user-error (re-frame/subscribe [::subs/intro-error-message])]
  (let [login-failed? (re-frame/subscribe [::subs/login-attempt-failed?])]
        (when @login-failed?
          [re-com/box
            :align-self :center
            :padding "5px"
            :child
              [re-com/title
                :label "Uh oh - login failed. Check email and password?" :level :level3
                :style {:color "red" :font-size "12px"}]
          ])))


(defn display-registration-failure-reason []
  ; (let [user-error (re-frame/subscribe [::subs/intro-error-message])]
  (let [regisration-failed-bc (re-frame/subscribe [::subs/registration-failure-reason])]
        (when @regisration-failed-bc
          [re-com/box
            :align-self :center
            :padding "5px"
            :child
              [re-com/title
                :label @regisration-failed-bc :level :level3
                :style {:color "red" :font-size "12px"}]])))


; BAD: this is both for login and registration
(defn login-form []
  (let [username (reagent/atom "")
        email (reagent/atom "")
        password (reagent/atom "")]
      (fn []
        [re-com/v-box
              :gap "10px"
              :children [
                [re-com/input-text
                  :model email
                  :placeholder "email"
                  :on-change #(reset! email %)
                  :attr {:auto-focus "true"}
                  :change-on-blur? true]
                [re-com/input-password
                  :model password
                  :placeholder "password"
                  :on-change #(reset! password %)
                  :change-on-blur? true]

                [re-com/h-box
                  :children [
                    [:input
                      {:type "button" :value "login"
                       :on-click #(re-frame/dispatch [::events/login @username
                                                                    @email
                                                                    @password])}]
                    [:input
                      {:type "button" :value "register"
                       :on-click #(re-frame/dispatch [::events/register @username
                                                                    @email
                                                                    @password])}]
                  ]]
                [display-login-failure]
                [display-registration-failure-reason]

                  ]])))



(defn forgot-pw-form []
  ; (let [email (reagent/atom "")]
  (let [email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Let's get you a new password."]

          ;; enter email address
          [re-com/input-text
              :model email
              :placeholder "email"
              :on-change #(reset! email %)
              :change-on-blur? true]
          [:input
              {:type "button" :value "send reset code"

              ; when they request the reset code to be sent,
              ; I want to send the code and move them to the next stage
              ; in the pw-reset-flow
               ; :on-click #(re-frame/dispatch
               ;              [::events/send-pw-reset-email @email])
               :on-click #(re-frame/dispatch
                            [::events/verify-user-exists @email])
               }]

          ;; i.e. only show pw-reset-message
          ;; when there's something to show!

          ]
      ])))


(defn pw-code-reset-form []
  (let [code (reagent/atom "")
        email (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code sent! Check your email."]
          [re-com/input-text
              :model code
              :placeholder "code"
              :on-change #(reset! code %)
              :change-on-blur? true]
          [:input
              {:type "button" :value "enter password reset code"
               :on-click #(re-frame/dispatch
                            [::events/verify-pw-reset-code
                            @(re-frame/subscribe [::subs/current-email] )
                            @code])}]]])))


; you need to decompose these...
(defn new-pw-form []
  (let [new-pw (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [re-com/label :label "Code verified! Now let's set your new password."]
          [re-com/input-password
              :model new-pw
              :placeholder "enter new password"
              :on-change #(reset! new-pw %)
              :change-on-blur? true]
          [:input
              {:type "button" :value "save new password"
               :on-click #(re-frame/dispatch
                            [::events/set-new-pw @new-pw])}]]])))



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
          :label "New password not set. :'(  Make sure it's at least 8 characters long, and contains one number and one uppercase and one lowercase letter."]))))


(defn pw-reset-panel []
  (let [flow-stage (re-frame/subscribe [::subs/pw-reset-flow-stage])]
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
                  :children [
                    [pw-reset-picture]
                    [forgot-pw-form]
                    [pw-reset-email-sending-failed-message]
                    ]]

              :confirming-pw-reset-code
                [re-com/v-box
                  :align :center
                  :children [
                    [pw-reset-picture]
                    [pw-code-reset-form]
                    [code-verification-message]
                    ]]

              :setting-new-pw
                [re-com/v-box
                  :align :center
                  :children [
                    [code-verified-picture]
                    [new-pw-form]
                    [new-pw-not-set-message]
                    ]]
            )
          ]
        ]
      )
    )
)


(defn intro-panel []
  [re-com/v-box
    ; :gap "20px"
    :gap "40px"
    :align :center
    :children [
      [intro-picture]
      [re-com/v-box
        :gap "5px"
        :children [
          [login-form]
          [re-com/hyperlink
            :label "Forgot password?"
            :on-click #(re-frame/dispatch [::core-events/change-panel :pw-reset])
            :style {:color "blue"}]]]
      ]])



) ;; end of tracer form

