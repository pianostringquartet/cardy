(ns cardy.utils
  (:require [re-frame.core :as re-frame]))

;; An app-db suitable to test Study and Edit panels.
;; Assumes we've successfully logged in and pulled :decks from external db.
(def edit-and-study-test-db
  {:cards #{{:front "Deutsch" :back "German"}
            {:front "Genau" :back "Exactly"}
            {:front "Es tut mir leid" :back "I'm sorry"}
            {:front "Alles klar" :back "Alright"}}
   :current-deck :starter
   :current-card {:front "Deutsch" :back "German"}
   :excluded #{}
   :decks {:big-deck-2 #{{:front "aber" :back "but"}
                         {:front "auch" :back "too, also"}
                         {:front "als" :back "than (e.g. better than, worse than)"}
                         {:front "immer" :back "always"}
                         {:front "mehr" :back "more, further"}
                         {:front "neben" :back "beside, next to, by, alongside"}
                         {:front "wie" :back "like, similar to"}
                         {:front "bald" :back "soon"}
                         {:front "zusammen" :back "together"}
                         {:front "iche werde + verb" :back "I will + verb"}
                         {:front "Stimmt!" :back "Agreed! Right!"}
                         {:front "Es stimmt" :back "It's true"}}
           :starter #{{:front "Deutsch" :back "German"}
                      {:front "Genau" :back "Exactly"}
                      {:front "Es tut mir leid" :back "I'm sorry"}
                      {:front "Alles klar" :back "Alright"}}
           :one-card-deck #{{:front "das Haus" :back "house"}}
           :two-card-deck #{{:front "das Haus" :back "house"}
                            {:front "der Hund" :back "dog"}}}})


(re-frame/reg-event-db
  ::initialize-edit-and-study-test-db
  (fn initialize-edit-and-study-test-db [_ _]
    edit-and-study-test-db))
