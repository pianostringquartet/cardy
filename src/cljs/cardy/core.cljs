(ns cardy.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [secretary.core :as secretary]
            [goog.events :as go-events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cardy.ajax :refer [load-interceptors!]]
            [re-com.core :as re-com]
            [cardy.events :as events]
            [cardy.views :as views]
            [cardy.subs :as subs])

  (:import goog.History))



(def new-color-deck-2
  '({:deck "die Farben" :front "grau", :back "grey"}
    {:deck "die Farben" :front "gelb", :back "yellow"}
    {:deck "die Farben" :front "rot", :back "red"}
    {:deck "die Farben" :front "violett", :back "purple"}))

(defn show-decks []
  [:div "Current decks are: " @(re-frame/subscribe [::subs/show-decks])])

;; So for each (update-deck, get-deck, remove-deck action) you need:
;; 1. a Component to accept user input
;; 2. an AJAX'ing function to send user input to server and get back response
;; 3. a re-frame event (+ event handler fn) to put response into app-db

;; Note that in L's get-docs example, the AJAX fn (2) actually has
;; the re-frame event dispatch (3) as its (successful response) :handler
;; ... So the Component's on-change fn

; (defn update-deck-ajax! [deck-name deck]
;   )


(defn get-deck-ajax [deck-name]
  (GET "/get-deck"
    {:params
        {:deck-name deck-name}
     :handler
        (fn [response]
          (do
            (js/console.log "response was " response)
            (js/console.log "response type was " (type response))
            (js/console.log "first response" (first response))
            (re-frame/dispatch [::events/set-deck deck-name response])
            ))
        }))

(defn get-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "name of deck to retrieve, eg die Farben"
        :on-change #(get-deck-ajax (reset! text-val %))])))


(defn update-deck-ajax [deck-name deck]
  (POST "/update-deck"
    {:params
        {:deck-name deck-name :deck deck}
     :handler
        (fn [response]
          ;; response should just be 200 OK
          (js/console.log "update-deck-ajax response was " response))}))


;; in flashy, you'll probably be programmatically providing the deck to switch in
;; ... but will depend on how you SYNC decks
;; bc this is really for SYNCING (saving) decks;
(defn update-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "for now just use: die Farben"
        :on-change #(update-deck-ajax "die Farben" new-color-deck-2)])))
;; just have functionality to add back a deck,
;; so you can test the remove-deck stuff too



;; depends on how you will call this...
;; but for now you're not writing the event dispatch;
(defn remove-deck-ajax [deck-name]
  (GET "/remove-deck"
    {:params
        {:deck-name deck-name}
     :handler
        (fn [response]
          ;; response should just be 200 OK
          (js/console.log "remove-deck-ajax response was " response))}))


(defn remove-deck []
  (let [text-val (reagent/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "name of deck to remove, eg die Farben"
        :on-change #(remove-deck-ajax (reset! text-val %))])))





;; ^^^^ these Reagent components should go in a view.cljs file

;; -------------------------
;; Routes
; (secretary/set-config! :prefix "#")

; (secretary/defroute "/" []
;   (re-frame/dispatch [:set-active-page :home]))

; (secretary/defroute "/about" []
;   (re-frame/dispatch [:set-active-page :about]))


;; -------------------------
;; History
; must be called after routes have been defined
; (defn hook-browser-navigation! []
;   (doto (History.)
;     (goog-events/listen
;       HistoryEventType/NAVIGATE
;       (fn [event]
;         (secretary/dispatch! (.-token event))))
;     (.setEnabled true)))


;; -------------------------
;; Initialize app


(defn mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/cardy-app]
                  (.getElementById js/document "app")))


; (defn init! []

;   ;; initializing the db, I know this :-)
;   (re-frame/dispatch-sync [::events/initialize-db])

;   ;; load-interceptors! is defined in ajax.cljs
;   ;; ... seems to be us adding CSRF headers?
;   ;; ... Can leave alone for now...
;   (load-interceptors!)


;   ;; ignore for now; learn about browsing history later
;   ; (hook-browser-navigation!)

;   ;; here we actually render the app
;   (mount-components))



(defn init! []

  ;; initializing the db, I know this :-)
  (re-frame/dispatch-sync [::events/initialize-db])

  ;; load-interceptors! is defined in ajax.cljs
  ;; ... seems to be us adding CSRF headers?
  ;; ... Can leave alone for now...
  (load-interceptors!)


  ;; ignore for now; learn about browsing history later
  ; (hook-browser-navigation!)

  ;; here we actually render the app
  (mount-components))



; (defn ^:export init []

;   ;; initializing the db, I know this :-)
;   (re-frame/dispatch-sync [::events/initialize-db])

;   ;; load-interceptors! is defined in ajax.cljs
;   ;; ... seems to be us adding CSRF headers?
;   ;; ... Can leave alone for now...
;   (load-interceptors!)


;   ;; ignore for now; learn about browsing history later
;   ; (hook-browser-navigation!)

;   ;; here we actually render the app
;   (mount-components))
