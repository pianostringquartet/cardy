(ns cardy.edit.views
  (:require [re-frame.core :as re-frame]
            [cardy.subs :as subs]

            [cardy.edit.events :as events]

            [reagent.core  :as reagent]
            [re-com.core :as re-com]
            [ajax.core :refer [GET POST]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

; [cardy.events :as events]

(trace-forms {:tracer (tracer :color "gold")}


(defn wrap-edit-text [card-text]
  [re-com/p
    {:style
      {:font-size "90%"
      ; :width "150px" :min-width "150px"
      ; :width "100px" :min-width "100px"
      :width "120px" :min-width "120px"
      }}
    card-text])



(defn card-edit-display [front back]
  [re-com/border
      :border "1px dashed lightgrey"
      ; top, right, bottom, left
      :padding "10px 10px 0px 10px"
      :child [re-com/h-box
          :size "auto"
          :align-self :center
          :children [
            [re-com/scroller
              :v-scroll :auto
              :height "45px"
              :child [wrap-edit-text front]
            ]
            [re-com/scroller
              :v-scroll :auto
              :height "45px"
              :child [wrap-edit-text back]
            ]
          ]
      ]]
        )






(defn clickable-trash-icon [front back]
  [re-com/box
    :child [:img
      {:src "trash_icon.png"
        :style {:max-width "20px" :max-height "20px"}
        :on-click #(re-frame/dispatch [::events/remove-card front back])}
        ]
  ]
      )


(defn trash-and-card [front back]
  [re-com/h-box
    :gap "10px"
    ; :padding "10px"
    ; :padding "0px 10px 10px 0px"
    :children [
      [clickable-trash-icon front back]
      [card-edit-display front back]

    ]])


(defn card-displayer [{:keys [front back]}]
  [re-com/box
    :padding "10px"
    :child [trash-and-card front back]])

;; this whole thing should be in a scroller as well --
;; if there are too many cards too display at once
(defn card-list []
  (let [cards @(re-frame/subscribe [::subs/cards]) ;; will be a set
        removed-cards @(re-frame/subscribe [::subs/removed])]
    [re-com/v-box
      ; :gap "40px"
      :children [
        (for [card (clojure.set/difference cards removed-cards)]
          ^{:key (rand-int 99999)}
          [card-displayer card])
      ]
    ]
))


(defn add-card []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "new card: the front ; the back"
        :on-change
          #(re-frame/dispatch [::events/add-card (reset! text-val %)])])))



;; second, "to do" version of edit-panel
; (defn todos []
(defn edit-panel []
  [re-com/v-box
    :padding "50px 0px 20px 0px"
    :gap "20px"
    :align :center
    :children [
      [add-card] ;; "add todo"
      [card-list]
      ; [home-panel-button]
    ]])




)


