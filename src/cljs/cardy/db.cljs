(ns cardy.db)

(def default-db
  {:current-panel :auth

    ;; should not be needed?
   :panels '(:auth :home :study :edit)

   :logged-in? false

   :pw-reset-flow-stage :sending-pw-reset-email

   ; :pw-reset-message nil
   ; :code-verified? nil

   ; :cards nil
   ; :current-card nil
   ; :current-deck nil

   :excluded #{}

   :front-flag "/img/german-flag-small.jpg"
   :back-flag "/img/american-flag-medium.jpg"

   :decks {}
   ; :decks {
   ;    :starter #{{:front "Deutsch" :back "German"}
   ;              {:front "Genau" :back "Exactly"}
   ;              {:front "Es tut mir leid" :back "I'm sorry"}
   ;              {:front "Alles klar" :back "Alright"}}
   ;    :one-card-deck #{{:front "das Haus" :back "house"}}
   ; }

})
