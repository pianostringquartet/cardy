(ns cardy.routes.home
  (:require [cardy.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [cardy.db.core :as db-core]


            ))

; [clojure.java.jdbc :as sql]



; (def dog-card {:deck "Tiere" :front "der Hund" :back "dog"})
; (def cat-card {:deck "Tiere" :front "die Katze" :back "cat"})
; (def spider-card {:deck "Insekten" :front "die Spinne" :back "spider"})


; (defn add-card! [deck front back]
;   (sql/insert! db :cards {:deck deck :front front :back back}))

; ;; what's a unique identifier for a card?
; ;; maybe the front? (for now...)
; ;; in future should be: unique together: "user + deck + front + back"
; (defn remove-card! [front]
;   (sql/delete! db :cards ["front=?" front]))

; ;; your real use will be to pull, update, or delete an entire deck at one time...

; (defn remove-deck! [deck]
;   (sql/delete! db :cards ["deck=?" deck]))

; (defn get-deck [deck]
;   (sql/query db ["select * from cards where deck=?" deck]))
; ;; You'll need to massage this result into a seq of maps ...

; ;; A couple things to keep straight:
; ;; - fns that interact with SQL db
; ;; - what these SQL-interfacing fns return
; ;; - the Clojure data format that flashy uses (a card is a map, a deck is a seq of maps)



; (GET "/add-spider-card" []
  ;     (do
  ;       ;; add a card to db
  ;       (db-core/add-card! "Tiere" "die Spinne" "spider")
  ;       (response/ok "Goood job!")))

(defn home-page []
  (layout/render "home.html"))


(defroutes home-routes
  (GET "/" []
    (home-page))
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

