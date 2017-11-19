(ns cardy.db)

; (def default-db
;   {:page :home})

; (def default-db
;   {:page :home
;    :decks '({:front "mon premier carte" :back "my first card"})})


; (def default-db
;   {:page :home
;    :decks
;         {:misc
;             '({:front "mon premier carte" :back "my first card"})}})

(def default-db
  {

  ; :cards '({:front "Deutsch" :back "German"}
  ;           {:front "Genau" :back "Exactly"}
  ;           {:front "Es tut mir leid" :back "I'm sorry"}
  ;           {:front "Alles klar" :back "Alright"})

  ; :cards [{:front "Deutsch" :back "German"}
  ;           {:front "Genau" :back "Exactly"}
  ;           {:front "Es tut mir leid" :back "I'm sorry"}
  ;           {:front "Alles klar" :back "Alright"}]
            ;; using a vector seems fine...

  :cards '({:front "das Haus" :back "house"})

   :current 0
   :current-face :front
   :excluded '()
   ; :current-deck :starter
   :current-deck :misc
   :current-flag "german-flag-small"

    ; :decks {:verbs [{:front "verwenden" :back "to use/utilize"}
    ;                 {:front "sprechen" :back "to speak"}
    ;                 {:front "suchen" :back "to seek/search"}
    ;                 {:front "schicken" :back "to send/drop/dispatch/forward"}
    ;                 {:front "gehen" :back "to go, to walk"}
    ;                 {:front "essen" :back "to eat"}
    ;                 {:front "bedeuten" :back "to matter, to mean, to imply, to involve"}
    ;                 {:front "anzukommen" :back "to arrive"}
    ;                 {:front "kommen" :back "to come"}
    ;                 {:front "können" :back "to be able to (can)"}]
    ;        :adjectives [{:front "entspannt" :back "relaxed"}
    ;                      {:front "gespannt" :back "curious, excited"}
    ;                      {:front "komisch" :back "funny, odd, curious"}
    ;                      {:front "wichtig" :back "important, vital"}
    ;                      {:front "besser" :back "better"}
    ;                      {:front "kompliziert" :back "complicated"}]
    ;        :other [{:front "aber" :back "but"}
    ;                 {:front "auch" :back "too, also"}
    ;                 {:front "als" :back "than (e.g. better than, worse than)"}
    ;                 {:front "immer" :back "always"}
    ;                 {:front "mehr" :back "more, further"}
    ;                 {:front "neben" :back "beside, next to, by, alongside"}
    ;                 {:front "wie" :back "like, similar to"}
    ;                 {:front "bald" :back "soon"}
    ;                 {:front "zusammen" :back "together"}
    ;                 {:front "iche werde + verb" :back "I will + verb"}
    ;                 {:front "Stimmt!" :back "Agreed! Right!"}
    ;                 {:front "Es stimmt" :back "It's true"}]
    ;        :starter [{:front "Deutsch" :back "German"}
    ;                   {:front "Genau" :back "Exactly"}
    ;                   {:front "Es tut mir leid" :back "I'm sorry"}
    ;                   {:front "Alles klar" :back "Alright"}]}


   :decks {:verbs '({:front "verwenden" :back "to use/utilize"}
                    {:front "sprechen" :back "to speak"}
                    {:front "suchen" :back "to seek/search"}
                    {:front "schicken" :back "to send/drop/dispatch/forward"}
                    {:front "gehen" :back "to go, to walk"}
                    {:front "essen" :back "to eat"}
                    {:front "bedeuten" :back "to matter, to mean, to imply, to involve"}
                    {:front "anzukommen" :back "to arrive"}
                    {:front "kommen" :back "to come"}
                    {:front "können" :back "to be able to (can)"})
           :adjectives '({:front "entspannt" :back "relaxed"}
                         {:front "gespannt" :back "curious, excited"}
                         {:front "komisch" :back "funny, odd, curious"}
                         {:front "wichtig" :back "important, vital"}
                         {:front "besser" :back "better"}
                         {:front "kompliziert" :back "complicated"})
           :other '({:front "aber" :back "but"}
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
                    {:front "Es stimmt" :back "It's true"})
           :starter '({:front "Deutsch" :back "German"}
                      {:front "Genau" :back "Exactly"}
                      {:front "Es tut mir leid" :back "I'm sorry"}
                      {:front "Alles klar" :back "Alright"})
           :misc '({:front "das Haus" :back "house"})
         }

})
