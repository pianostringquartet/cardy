(ns cardy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cardy.ajax :refer [load-interceptors!]]
            [cardy.events]
            [re-com.core :as re-com])

  (:import goog.History))



;; Reagent Component
(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:page])]
    [:li.nav-item
     {:class (when (= page @selected-page) "active")}
     [:a.nav-link
      {:href uri
       :on-click #(reset! collapsed? true)} title]]))

;; Reagent Component
(defn navbar []
  (r/with-let [collapsed? (r/atom true)]
    [:nav.navbar.navbar-dark.bg-primary
     [:button.navbar-toggler.hidden-sm-up
      {:on-click #(swap! collapsed? not)} "☰"]
     [:div.collapse.navbar-toggleable-xs
      (when-not @collapsed? {:class "in"})
      [:a.navbar-brand {:href "#/"} "cardy"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Home" :home collapsed?]
       [nav-link "#/about" "About" :about collapsed?]]]]))



;; the logic here in your full app (flashy) will need to be more complicated;
;; you'll want to be sourcing (via a re-frame sub) the deck to be updated

;; just grey and yellow
; (def old-color-deck
;   '({:front "grau", :back "grey"} {:front "gelb", :back "yellow"}))

; grey, yellow, red and purple
(def new-color-deck
  '({:front "grau", :back "grey"} {:front "gelb", :back "yellow"} {:front "rot", :back "red"} {:front "violett", :back "purple"}))
; problem: this is not a deck of cards as the db expects;
;; db expects a card to be {:deck :front :back}
;; new-color-deck represents a deck as you would pull it from the app db

(def new-color-deck-2
  '({:deck "die Farben" :front "grau", :back "grey"}
    {:deck "die Farben" :front "gelb", :back "yellow"}
    {:deck "die Farben" :front "rot", :back "red"}
    {:deck "die Farben" :front "violett", :back "purple"}))


; (defn show-decks []
;   [:div "Current decks are: " @(rf/subscribe [:show-decks])])


(defn show-decks []
  [:div "Current decks are: " @(rf/subscribe [:show-decks])])


; [:div "Excluded cards: " @(re-frame/subscribe [::subs/excluded])]

;; you want these to make an AJAX request to the server,
;; then put the server's response into app-db.
;; so you want the response to the AJAX request to contain whatever
;; you will be putting back into your app-db.

;; So for each (update-deck, get-deck, remove-deck action) you need:
;; 1. a Component to accept user input
;; 2. an AJAX'ing function to send user input to server and get back response
;; 3. a re-frame event (+ event handler fn) to put response into app-db

;; Note that in L's get-docs example, the AJAX fn (2) actually has
;; the re-frame event dispatch (3) as its (successful response) :handler
;; ... So the Component's on-change fn

; (defn update-deck-ajax! [deck-name deck]
;   )


;; what I don't like about this is how much it's doing; it:
;; 1. describes the call (GET, "/get-deck", :params)
;; 2. makes the call (how? this is basically hidden behind a macro?)
;; 3. AND dispatches an event (the successful-response-handler-fn)
; (defn get-deck-ajax [deck-name]
;   (GET "/get-deck"
;     {:params
;         {:deck-name deck-name}
;      :handler
;         #(rf/dispatch [:set-deck deck-name %])}))

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
            (rf/dispatch [:set-deck deck-name response])
            ))
        }))

(defn get-deck []
  (let [text-val (r/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "name of deck to retrieve, eg die Farben"
        :on-change #(get-deck-ajax (reset! text-val %))])))


; (defn add-spider-card! []
;   (GET "/add-spider-card" {:handler #(js/console.log "add-spider-card! Successful Response was: " %)}))


; (defn update-deck-ajax [deck-name deck]
;   (GET "/update-deck"
;     {:params
;         {:deck-name deck-name :deck deck}
;      :handler
;         (fn [response]
;           ;; response should just be 200 OK
;           (js/console.log "update-deck-ajax response was " response))}))

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
  (let [text-val (r/atom "")]
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
  (let [text-val (r/atom "")]
    (fn []
      [re-com/input-text
        :model text-val
        :change-on-blur? true
        :placeholder "name of deck to remove, eg die Farben"
        :on-change #(remove-deck-ajax (reset! text-val %))])))



(defn incredible-button []
    [:input
      {:type "button" :value "Incredible Button"
       :on-click #(rf/dispatch [:request])}])

; (defn add-spider-card! []
;   (GET "/add-spider-card" {:handler #(js/console.log "add-spider-card! Successful Response was: " %)}))

; (defn add-card-button []
;     [:input
;       {:type "button" :value "Add a Card Button"
;        :on-click #(do
;           (add-spider-card!)
;           (rf/dispatch [:add-card]))
;        }])

; (defn add-card-button []
;     [:input
;       {:type "button" :value "Add a Card Button"
;        :on-click #(rf/dispatch [:add-card])}])


;; Reagent Component
(defn about-page []
  [:div
    ;[:div [incredible-button]]
    ;[:div [add-card-button]]

    [:div [update-deck]]
    [:div [get-deck]]
    [:div [remove-deck]]

    [:div "Guten tag!"]

    ; [:div [show-decks]]
    [:div "Current decks are: " @(rf/subscribe [:show-decks])]

    [:div.container
     [:div.row
      ;[:div.col-md-12
       ;[:img {:src (str js/context "/img/warning_clojure.png")}]]
       ]]])



;; Reagent Component
(defn home-page []
  [:div.container
   (when-let [docs @(rf/subscribe [:docs])]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]])


;; ^^^^ these Reagent components should go in a view.cljs file

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:set-active-page :home]))

(secretary/defroute "/about" []
  (rf/dispatch [:set-active-page :about]))


;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))


;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(rf/dispatch [:set-docs %])}))
;; the "GET" is from "ajax.core"
;; https://github.com/JulianBirch/cljs-ajax

;; GET, POST and PUT accept a URI (basically a URL?)
;; and a map of options

;; :handler specifies the function to be called when the request SUCCEEDS
;; i.e. the value of :handler is a "successful request handler fn";
;; The successful-request-handler-fn must accept a single arg
;;  (which will be the de-serialized(?) response).
;; In this case we're dispatching a re-frame event, where :set-docs is the event-id
;; and % (the param of the anon fn) is the deserialized response we're providing.
;; In events.cljs we've defined an event handler for :set-docs; the deserialized response
;; is named "docs", and we add it to the app-db.


;; this is fine in a core.cljs file,
;; but the earlier-defined Comps should be in a views.cljs file
(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))



(defn init! []

  ;; initializing the db, I know this :-)
  (rf/dispatch-sync [:initialize-db])

  ;; load-interceptors! is defined in ajax.cljs
  ;; ... seems to be us adding CSRF headers?
  ;; ... Can leave alone for now...
  (load-interceptors!)

  ;; see notes on fetch-docs;
  ;; this is a good example of making an async request,
  ;; and adding the response to the app-db :-)
  (fetch-docs!)

  ;; ignore for now; learn about browsing history later
  (hook-browser-navigation!)

  ;; here we actually render the app
  (mount-components))
