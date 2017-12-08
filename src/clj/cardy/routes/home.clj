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

  (GET "/" []
    (layout/render "home.html"))

  ;; Cards API

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

  ;;; Users API

  (POST "/login" []
    (fn [req]
      (let [credentials (:params req)]
        (response/ok (users/validate-credentials credentials)))))
  (POST "/register-creds" []
    (fn [req]
      (let [credentials (:params req)]
        (response/ok (users/register-user! credentials)))))
  (POST "/verify-user-exists" []
    (fn [req]
      (let [email (get-in req [:params :email ])]
        (response/ok (users/verify-user-exists email)))))
  (POST "/send-pw-reset-email" []
    (fn [req]
      (let [email (get-in req [:params :email ])]
        (response/ok (users/send-password-reset-email email)))))
  (POST "/verify-pw-reset-code" []
    (fn [req]
      (let [email (get-in req [:params :email])
            code (get-in req [:params :code])]
        (response/ok (users/verify-pw-reset-code email code)))))
  (POST "/set-new-pw-ajax" []
    (fn [req]
      (let [email (get-in req [:params :email])
            new-pw (get-in req [:params :new-pw])]
        (response/ok (users/set-new-pw email new-pw))))))
