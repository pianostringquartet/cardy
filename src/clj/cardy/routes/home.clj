(ns cardy.routes.home
  (:require [cardy.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [cardy.db.core :as db-core]))

(defn home-page []
  (layout/render "home.html"))

; (defn home-page []
;   (layout/render "index.html"))

(defroutes home-routes
  (GET "/" []
    (home-page))
  ; (GET "/docs" []
  ;   (-> (response/ok (-> "docs/docs.md" io/resource slurp))
  ;       (response/header "Content-Type" "text/plain; charset=utf-8")))

  (POST "/update-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])
            deck (get-in req [:params :deck])]
        (do
          (db-core/update-deck! deck-name (into '() deck))
          (response/ok "Nice :-)")))))

 (GET "/get-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])]
        (response/ok (db-core/get-deck deck-name)))))
  (GET "/pull-decks" []
    (fn [req]
      (response/ok (db-core/pull-decks))))

  (POST "/push-decks" []
    (fn [req]
      (let [decks (get-in req [:params :decks])]
        (do
          (println "push-decks received: decks: " decks)
          (db-core/push-decks! decks)
          (response/ok "decks pushed :-)")))))

  (GET "/remove-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])]
        (response/ok (db-core/remove-deck! deck-name)))))

  (POST "/login" []
    (fn [req]
      (let [credentials (:params req)]
        (response/ok (db-core/validate-credentials credentials))
        )))

  (POST "/register-creds" []
    (fn [req]
      (let [credentials (:params req)]
        (response/ok (db-core/register-user! credentials))
        )))


  ;; confirm that user (email) really exists
  (POST "/verify-user-exists" []
    (fn [req]
      (let [email (get-in req [:params :email ])]
        (response/ok (db-core/verify-user-exists email)))))

  (POST "/send-pw-reset-email" []
    (fn [req]
      (let [email (get-in req [:params :email ])]
        (response/ok (db-core/send-password-reset-email email)))))

  (POST "/verify-pw-reset-code" []
    (fn [req]
      (let [email (get-in req [:params :email])
            code (get-in req [:params :code])]
        (response/ok (db-core/verify-pw-reset-code email code)))))

  (POST "/set-new-pw-ajax" []
    (fn [req]
      (let [email (get-in req [:params :email])
            new-pw (get-in req [:params :new-pw])]
        (response/ok (db-core/set-new-pw email new-pw)))))

  )


;; these are Compojure API routes
; (defroutes home-routes
;   (GET "/" []
;        (home-page))
;   (GET "/docs" []
;        (-> (response/ok (-> "docs/docs.md" io/resource slurp))
;            (response/header "Content-Type" "text/plain; charset=utf-8"))))

