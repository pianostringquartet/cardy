(ns cardy.routes.home
  (:require [cardy.layout :as layout]
            [compojure.core :refer [routes defroutes GET POST]]
            [compojure.route :as route]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [cardy.db.core :as db-core]
            [cardy.models.users :as users]
            [cardy.models.cards :as cards]))


(defroutes home-routes

  ;;; ----------------------------------------
  ;;; Serving the app itself
  ;;; ----------------------------------------

  (GET "/" []
    (layout/render "home.html"))

  ;;; ----------------------------------------
  ;;; Cards API
  ;;; ----------------------------------------

  (POST "/pull-decks" []
    (fn [req]
      (let [email (get-in req [:params :email])]
        (response/ok (cards/pull-decks email)))))
  (POST "/remove-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])
            email (get-in req [:params :email])]
        (response/ok (cards/remove-deck! deck-name email)))))
  (POST "/update-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])
            deck (get-in req [:params :deck])
            email (get-in req [:params :email])]
          (response/ok (cards/update-deck! deck-name deck email)))))

  ;;; ----------------------------------------
  ;;; Users API
  ;;; ----------------------------------------

  (POST "/login" []
    (fn [req]
      (let [credentials (:params req)]
        (if (users/credentials-valid? credentials)
          (response/ok)
          (response/unprocessable-entity)))))
  (POST "/register" []
    (fn [req]
      (let [credentials (:params req)
            outcome (users/register-user! credentials)]
        (if (= outcome "registered")
          (response/ok)
          (response/unprocessable-entity outcome)))))
  (POST "/verify-user-exists" []
    (fn [req]
      (let [email (get-in req [:params :email])]
        (if (users/user-exists? email)
          (response/ok)
          (response/unprocessable-entity)))))
  (POST "/send-pw-reset-email" []
    (fn [req]
      (let [email (get-in req [:params :email ])]
        (do (users/send-password-reset-email email)
            (response/ok) ))))
  (POST "/verify-pw-reset-code" []
    (fn [req]
      (let [email (get-in req [:params :email])
            code (get-in req [:params :code])]
        (if (users/reset-codes-match? email code)
          (response/ok)
          (response/unprocessable-entity)))))
  (POST "/set-new-pw" []
    (fn [req]
      (let [email (get-in req [:params :email])
            new-pw (get-in req [:params :new-pw])]
        (if (users/set-new-pw email new-pw)
          (response/ok)
          (response/unprocessable-entity))))))
