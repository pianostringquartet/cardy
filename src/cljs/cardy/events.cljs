(ns cardy.events
  (:require [cardy.db :as core-db]
            [re-frame.core :as re-frame]
            [clairvoyant.core :refer-macros [trace-forms]]
            [medley.core :refer [dissoc-in]]
            [re-frame-tracer.core :refer [tracer]]
            [ajax.core :refer [POST]]))


(def ls-auth-key "session-info")

(trace-forms {:tracer (tracer :color "blue")}

;;; ----------------------------------------
;;; Utility functions and effects
;;; ----------------------------------------

(defn change-panel [db panel]
  (assoc db :current-panel panel))

(defn goto [db panel]
  (assoc db :current-panel panel))

(re-frame/reg-event-db
  ::goto
  (fn goto-handler [db [_ panel]]
    (goto db panel)))

(defn default-error-handler [response]
  (js/console.log "Encountered unexpected error: " response))

(re-frame/reg-fx
  :post-request
  (fn post-request-handler
    [{uri :uri params :params handler :handler error-handler :error-handler
      :or {error-handler default-error-handler}}]
    (POST uri {:params params :handler handler :error-handler error-handler})))

(defn show-preferred-face [db]
  (let [preferred-face (:preferred-face db)]
    (assoc db :show-back? (= preferred-face :back))))

;;; ----------------------------------------
;;; Initializing database
;;; ----------------------------------------

(re-frame/reg-cofx
  :user-session
  (fn user-session [cofx _]
    (assoc cofx :user-session (some->> (.getItem js/localStorage ls-auth-key)))))

(re-frame/reg-event-db
 ::initialize-db
 (fn initialize-db [_ _]
   core-db/default-db))

;; NOTE:
;; Since we use email-address strings in localStorage to
;; indicate an active session, and '@' is not valid Clojure,
;; we don't use (cljs.reader/read-string <localStorage content>).
(defn ls->cljs [a-str]
  (if (= "false" a-str) false a-str))

(re-frame/reg-event-fx
 ::retrieve-user-session
 [(re-frame/inject-cofx :user-session)]
 (fn retrieve-user-session [cofx [_ _]]
   (let [db (:db cofx)
         session (:user-session cofx)]
      {:db (assoc db :session (ls->cljs session))})))

;;; -----------------------------------------------
;;; Setup after auth'ing in
;;; -----------------------------------------------

; WORKS!
(defn pull-decks
  "Retrieve user's decks from external database."
  [email]
  {:post-request
    {:uri "/pull-decks"
     :params {:email email}
     :handler #(re-frame/dispatch [::set-decks %])}})

(re-frame/reg-event-fx
  ::pull-decks
  (fn pull-deck-handler [cofx event]
    (pull-decks (:email (:db cofx)))))

(re-frame/reg-event-db
  ::set-decks
  (fn set-decks-handler [db [_ decks]]
    (assoc db :decks decks)))

(re-frame/reg-event-fx
  ::resume-session
  (fn resume-session [cofx [_ session-email]]
      {:db (-> (:db cofx)
               (assoc :logged-in? true :email session-email)
               (goto :home))
       :dispatch [::pull-decks]}))

;;; -----------------------------------------------
;;; Teardown after logging out
;;; -----------------------------------------------

(re-frame/reg-fx
  :end-session ;; logout of localStorage
  (fn end-session [_]
    (.setItem js/localStorage ls-auth-key false)))

(defn logout-app-db [db]
  (assoc db :session false :logged-in? false))

(re-frame/reg-event-fx
  ::logout
  (fn logout [cofx [_]]
    {:db (-> (:db cofx)
             (logout-app-db)
             (goto :auth))
     :end-session nil}))

) ; end of tracer form
