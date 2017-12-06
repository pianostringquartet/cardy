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


;; 4 forms that can likely be made into a single fn that takes different parameters
;; params: the atoms for local state (i.e. local state to inject)

;; local state (ratoms)
;; user-dialogues (e.g. [display login failure])
;; input-forms (which contact to )

;; each local state is associated with an input and maybe a dispatch


;; hmmm, how are you going to do this?
;; how can you have a varying amount of let-binding vars?
;; you also have to think about laziness
;; DO THIS! it will push you to think at a higher level in Clojure!

;; first write a form that accepts two input fields + local state atoms





;; test out on a single, simple form




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


;; a reusable input form
;; accepts ratoms for state
;;

;; hmmm, you want to pass in an atom, right? not just a name
;; you need to be thinking through this in a REPL

;; you'll want to call this like:


;; this is good
(defn password-input [model]
  [re-com/input-password
    :model model
    :placeholder "password"
    :on-change #(reset! model %)
    :change-on-blur? true])

(defn form-submit [submit-name on-click-fn]
  [:input
    {:type "button"
     :value submit-name ;; should be able to provide this, non?
     :on-click on-click-fn}])


; (defn input-form [state1 state2 submitter]
; where submitter is component that accepts a submit-button-name and an on-click-fn


;; a primary (auto-focussed, non-password) input
(defn primary-input [input-name state]
  "input-name: str
   state: Reagent atom"
  [re-com/input-text
          :model state
          :placeholder input-name
          :on-change #(reset! state %)
          :attr {:auto-focus "true"}
          :change-on-blur? true])

(defn input-form [state1 state2 event-to-dispatch]
  (fn []
    [re-com/v-box
      :gap "10px"
      :children [
        ; [re-com/input-text
        ;   :model state1
        ;   :placeholder (str 'state1) ;; literally shows: "state1"
        ;   :on-change #(reset! state1 %)
        ;   :attr {:auto-focus "true"}
        ;   :change-on-blur? true]
        [primary-input "email" state1]

        [password-input state2]

        [display-login-failure]
        [display-registration-failure-reason]

        [form-submit
          "login"
          (fn [] (re-frame/dispatch [::events/login "" @state1 @state2]))]

      ]

    ]))


(defn login-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password]
          [display-login-failure]
          [display-registration-failure-reason]
          [form-submit
            "login"
            (fn [] (re-frame/dispatch [::events/login "" @email @password]))]]])))


(defn registration-form []
  (let [email (reagent/atom "")
        password (reagent/atom "")]
    (fn []
      [re-com/v-box
        :gap "10px"
        :children [
          [primary-input "email" email]
          [password-input password]
          [display-login-failure]
          [display-registration-failure-reason]
          [form-submit
            "register"
            (fn [] (re-frame/dispatch [::events/register "" @email @password]))]]])))

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
            ]

        ]])
  )
  )






;; works!
; (defn login-form []
;   (let [email (reagent/atom "")
;         password (reagent/atom "")]
;     [input-form email password ::events/login]))


; BAD: this is both for login and registration
;; login OR register
#_(defn login-form []
  (let [email (reagent/atom "")
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
                 :on-click #(re-frame/dispatch [::events/login ""
                                                              @email
                                                              @password])}]
              [:input
                {:type "button" :value "register"
                 :on-click #(re-frame/dispatch [::events/register ""
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
          ; [login-form]
          [login-or-register-form]
          [re-com/hyperlink
            :label "Forgot password?"
            :on-click #(re-frame/dispatch [::core-events/change-panel :pw-reset])
            :style {:color "blue"}]]]
      ]])



) ;; end of tracer form

