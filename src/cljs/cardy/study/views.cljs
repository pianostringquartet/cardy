(ns cardy.study.views
  (:require [re-frame.core :as re-frame]

            [cardy.subs :as subs]

            [cardy.study.events :as events]

            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [reanimated.core :as anim]
            [re-frame-tracer.core :refer [tracer]]))


(trace-forms {:tracer (tracer :color "gold")}

;; better: a single wrap-text, taking
;; card-text and style-map as parameters
(defn wrap-text [card-text]
  [re-com/p
    {:style
      {:font-size "120%"}
      :width "150px" :min-width "150px"}

    card-text])

(defn show-flag [flag]
  [:img {:src flag}])

;; better?: flag and text display
(defn card-side-display [flag card-text]
  [re-com/h-box
    :children [
      [re-com/box
        :child [show-flag flag]
        :width "120px"
        :height "90px"
        :padding "20px 10px 10px 10px"]
      [re-com/box
        :child [re-com/scroller
          :v-scroll :auto
          :height "110px"
          :child [wrap-text card-text]
        :size "auto"
        :padding "20px 10px 10px 10px"
        :align-self :center]]
      ]
    ]
  )





; this works, you just want different placement now
(defn congrats-message []
  (let [size (reagent/atom 0)
        width (anim/spring size)]
    (fn a-congrats-message []
      [:div

       ;; WORKAROUND: when resizing to 0 (e.g. reset! size 0),
       ;; re-animated intermittently shows full-size image;
       ;; smaller resizing steps avoid this.
       ; [anim/timeout #(reset! size 200) 500]
       [anim/timeout #(reset! size 200)] ;; show immediately
       [anim/timeout #(reset! size 100) 2000]
       [anim/timeout #(reset! size 50) 3000]
       [anim/timeout #(reset! size 25) 4000]
       [anim/timeout
          #(re-frame/dispatch [::events/remove-congrats-message])
          4100]

       [:img
        {:src "good_job.png"
         :width (str @width "px")
         ; User can click the image to kill it
         :on-click #(re-frame/dispatch [::events/remove-congrats-message])}]])))





(def card-style-front-and-back
  {:backface-visibility "hidden"
   :background "lightgrey"
   :position "absolute"
   :top "0"
   :left "0"
   :width "300px"
   :height "150px"

   ; added
   :box-shadow "10px 10px 5px grey"})



(defn card-front []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:z-index "2"
               :transform "rotateY(0deg)"})
    :align-self :start
    :child [
      card-side-display
        @(re-frame/subscribe [::subs/front-flag])
        @(re-frame/subscribe [::subs/current-card-front])]])


(defn card-back []
  [re-com/box
    :style (merge
              card-style-front-and-back
              {:transform "rotateY(180deg)"})
    :align-self :start
    :child [
      card-side-display
        @(re-frame/subscribe [::subs/back-flag])
        @(re-frame/subscribe [::subs/current-card-back])]])



;; works
(defn card [show-back?]
  [re-com/v-box
    :style
    (let [main-style {
      ; :height "90px"
                      ; :width "50px"
                      :transition "0.6s"
                      :transform-style "preserve-3d"
                      :position "relative"}
                      ] ;; added back, was removed by parinfer

              (if @show-back?
                (assoc main-style :transform "rotateY(180deg)")
                main-style))
    :children [
      [card-front]
      [card-back]
      ]
    ]
      )





; alt version, with superimposed congrats-message
(defn flippable-card [] ; true or nil
  (let [show-back? (reagent/atom false)]
    (fn []
      [re-com/v-box
        :size "auto"
        :style {:perspective "1000px"
                :width "300px"
                :height "150px"}
        :attr {:on-click #(reset! show-back? (if @show-back? false true))}
        :children [
          [card show-back?]]])))



(defn display-ex-count [xc]
  [re-com/title :label (str "# of cards excluded: " xc)])


;; i.e. "I don't know this "
(defn next-button []
  [:input
    {:type "button" :value "I don't know it"
     :on-click #(re-frame/dispatch [::events/next])}])

;; i.e. "I know this"
(defn exclude-current-card []
    [:input
      {:type "button" :value "I know it"
       :on-click #(re-frame/dispatch [::events/exclude-card])}])



(defn card-review []
  [re-com/h-box
    ; :size "initial"
    ; :size "auto"
    ; :align-self :center
    :gap "20px"
    :children [
      [exclude-current-card]
      [next-button]]])


(defn study-panel []
  (let [xc (re-frame/subscribe [::subs/excluded-count])
        congrats (re-frame/subscribe [::subs/congrats])]

    (fn []
      [re-com/v-box
          :gap "20px"
          :padding "20px 20px 20px 20px"
          :align :center
          :children [
            [flippable-card]

            ; [flippable-card congrats]

            (when @congrats [congrats-message])

            [card-review]
            ; [home-panel-button]

            [display-ex-count @xc]]])))


) ;; end of tracer form
