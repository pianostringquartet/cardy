(ns cardy.routes.home
  (:require [cardy.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [cardy.db.core :as db-core]



            ))


(defn home-page []
  (layout/render "home.html"))

; (defn home-page []
;   (layout/render "index.html"))

;;; hmmm...
(defroutes home-routes
  (GET "/" []
    (home-page))

  ; (GET "/" []
  ;   "index.html")
  ; (route/resources "/")
  ; (GET "/" []
  ;   (response/ok "public/index.html" io/resource slurp)))

  (GET "/docs" []
    (-> (response/ok (-> "docs/docs.md" io/resource slurp))
        (response/header "Content-Type" "text/plain; charset=utf-8")))
  ; (GET "/update-deck" []
  ;   (fn [req]
  ;     (let [deck-name (get-in req [:params :deck-name])
  ;           deck (get-in req [:params :deck])]
  ;       (response/ok (db-core/update-deck! deck-name deck)))))
; (GET "/update-deck" []
;     (fn [req]
;       (let [deck-name (get-in req [:params :deck-name])
;             deck (get-in req [:params :deck])]
;         (do
;           (println "update-deck route received this deck: " deck)
;           (println "update-deck route received this deck, TYPE: " (type deck))
;           (response/ok (db-core/update-deck! deck-name deck))))))
  (POST "/update-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])
            deck (get-in req [:params :deck])]
        (do
          (println "update-deck route received this deck: " deck)
          (println "update-deck route received this deck, TYPE: " (type deck))
          (println "update-deck route received this deck, FIRST: " (first deck))
          (println "update-deck route received this deck, FIRST TYPE: " (type (first deck)))
          (println "update-deck route received this deck, FIRST DECK: " (:deck (first deck)))
          (println "update-deck route received this deck, FIRST DECK TYPE: " (type (:deck (first deck))))
          ; (db-core/update-deck! deck-name deck)
          (db-core/update-deck! deck-name (into '() deck))
          (response/ok "Nice :-)")))))

 (GET "/get-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])]
        (response/ok (db-core/get-deck deck-name)))))
  (GET "/remove-deck" []
    (fn [req]
      (let [deck-name (get-in req [:params :deck-name])]
        (response/ok (db-core/remove-deck! deck-name))))))

;; do I need to respond with 200 OK too?








;; these are Compojure API routes
; (defroutes home-routes
;   (GET "/" []
;        (home-page))
;   (GET "/docs" []
;        (-> (response/ok (-> "docs/docs.md" io/resource slurp))
;            (response/header "Content-Type" "text/plain; charset=utf-8"))))






;; what is ring util's http-response library?

; (defroutes home-routes
;   (GET "/" []
;        (home-page))
;   (GET "/docs" []
;         (response/ok "I've replaced docs.md with this silly message.")
;         ;(response/ok (-> "docs/docs.md" io/resource slurp))
;         ))

;; perfect

