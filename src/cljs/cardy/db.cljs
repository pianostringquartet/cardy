(ns cardy.db)

(def default-db
  {:current-panel :auth
   :panels '(:auth :home :study :edit)
   :logged-in? false
   :pw-reset-flow-stage :sending-pw-reset-email
   :excluded #{}
   :front-flag "/img/german-flag-small.jpg"
   :back-flag "/img/american-flag-medium.jpg"
   :show-back? false
   :preferred-face :front
   :decks {}})
