(ns cardy.db)


(def default-db
  {



    ;; authentication (basics)
   :logged-in false
   :temp-name "temporary name"
   :temp-email "temporary email"
   :temp-pw "temporary pw"


   ; :current-panel :intro ;; i.e. login / signup
   :current-panel :study

   :panels '(:intro :home :study :edit :profile)

   ;; use nil, because empty string is truthy
   :intro-error-message nil

    ;; study-panel's data

    ; :cards #{{:front "Deutsch" :back "German"}
    ;                   {:front "Genau" :back "Exactly"}
    ;                   {:front "Es tut mir leid" :back "I'm sorry"}
    ;                   {:front "Alles klar" :back "Alright"}}

    :cards #{{:front "A BIG CARD"
              :back "A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD"}
              {:front "Genau"
               :back "Exactly"}}

   ; :current-card {:front "Deutsch" :back "German"}
   :current-card {:front "A BIG CARD"
                  :back "A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD A BIG CARD"}
   :current 0
   :current-face :front
   :excluded #{}
   :removed #{}
   :current-deck :starter
   :current-flag "german-flag-small"

   :show-back? false

   ;; i.e. cues
   :front-flag "german-flag-small.jpg"
   :back-flag "american-flag-medium.jpg"

   :decks {:verbs #{{:front "verwenden" :back "to use/utilize"}
                    {:front "sprechen" :back "to speak"}
                    {:front "suchen" :back "to seek/search"}
                    {:front "schicken" :back "to send/drop/dispatch/forward"}
                    {:front "gehen" :back "to go, to walk"}
                    {:front "essen" :back "to eat"}
                    {:front "bedeuten" :back "to matter, to mean, to imply, to involve"}
                    {:front "anzukommen" :back "to arrive"}
                    {:front "kommen" :back "to come"}
                    {:front "können" :back "to be able to (can)"}}
           :adjectives #{{:front "entspannt" :back "relaxed"}
                         {:front "gespannt" :back "curious, excited"}
                         {:front "komisch" :back "funny, odd, curious"}
                         {:front "wichtig" :back "important, vital"}
                         {:front "besser" :back "better"}
                         {:front "kompliziert" :back "complicated"}}
           :other #{{:front "aber" :back "but"}
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
           :misc #{{:front "das Haus" :back "house"}}

           :Common-Verbs-11-23
    #{{:front "abbrechen" :back "o abort, to discontinue"}
        {:front "bleiben" :back "to stay / to remain"}
        {:front "bringen" :back "to bring"}
        {:front "dürfen" :back "may / to be allowed to"}
        {:front "erhalten" :back "to receive / to obtain / to preserve"}
        {:front "erklären" :back "explain"}
        {:front "finden" :back "to find"}
        {:front "geben" :back "to give"}
        {:front "gehen" :back "to go"}
        {:front "haben" :back "have"}
        {:front "halten" :back "hold"}
        {:front "heißen" :back "be called / named"}
        {:front "hören" :back "to hear / to listen"}
        {:front "kommen" :back "to come"}
        {:front "können" :back "can"}
        {:front "lassen" :back "let"}
        {:front "liegen" :back "lay"}
        {:front "machen" :back "do / make"}
        {:front "müssen" :back "must / have to"}
        {:front "nehmen" :back "to take"}
        {:front "sagen" :back "to say / to tell"}
        {:front "sehen" :back "to see"}
        {:front "sein" :back "to be"}
        {:front "sollen" :back "shall"}
        {:front "stehen" :back "to stand"}
        {:front "tun" :back "to do / to make"}
        {:front "werden" :back "become"}
        {:front "wissen" :back "to know"}
        {:front "wollen" :back "to want"}
        {:front "zeigen" :back "to show / demonstrate"}}



    :Tage-11-23
    #{{:front "Mo, der Montag" :back "Mon."}
        {:front "Di, der Dienstag" :back "Tues."}
        {:front "Mi, der Mittwo" :back "Wed."}
        {:front "Do, der Donnerstag" :back "Thurs."}
        {:front "Fr, der Freitag" :back "Fri."}
        {:front "Sa, der Samstag" :back "Sat."}
        {:front "So, der Sonntag" :back "Sun."}
        {:front "am Montag" :back "on Monday"}
        {:front "montags" :back "(on) Mondays"}
        {:front "jeden Montag" :back "every Monday, Mondays "}
        {:front "(am) kommenden Dienstag" :back "this Tuesday"}
        {:front "letzten Mittwoch" :back "last Wednesday"}
        {:front "Heute ist Dienstag." :back "Today is Tuesday."}
        {:front "Morgen ist Mittwoch." :back "Tomorrow is Wednesday. "}
        {:front "Gestern war Montag." :back "Yesterday was Monday."}}

    :Monate-11-23
    #{{:front "der Januar" :back "January"}
        {:front "der Februar" :back "February"}
        {:front "der März" :back "March"}
        {:front "der April" :back "April"}
        {:front "der Mai" :back "May"}
        {:front "der Juni" :back "June"}
        {:front "der Juli" :back "July"}
        {:front "der August" :back "August"}
        {:front "der September" :back "September"}
        {:front "der Oktober" :back "October"}
        {:front "der November" :back "November"}
        {:front "der Dezember" :back "December"}}


    :Jahreszeiten-11-23
    #{{:front "die Jahreszeit, die Jahreszeiten" :back "season"}
        {:front "der Frühling" :back "spring"}
        {:front "im Frühling" :back "in the spring"}
        {:front "der Sommer" :back "summer"}
        {:front "im Sommer" :back "in the summer"}
        {:front "der Herbst" :back "fall"}
        {:front "im Herbst" :back "in the fall/autumn"}
        {:front "der Winter" :back "winter"}
        {:front "im Winter" :back "in the winter"}}



    :Zahlen-null-zehn-11-23
    #{{:front "Null" :back "0"}
        {:front "Eins" :back "1"}
        {:front "Zwei" :back "2"}
        {:front "Drei" :back "3"}
        {:front "Vier" :back "4"}
        {:front "Fünf" :back "5"}
        {:front "Sechs" :back "6"}
        {:front "Sieben" :back "7"}
        {:front "Acht" :back "8"}
        {:front "Neun" :back "9"}
        {:front "Zehn" :back "10"}}

    :Zahlen-elf-neunzehn-11-23
    #{{:front "Elf" :back "11"}
        {:front "Zwölf" :back "12"}
        {:front "Dreizehn" :back "13"}
        {:front "Vierzehn" :back "14"}
        {:front "Fünfzehn" :back "15"}
        {:front "Sechzehn" :back "16"}
        {:front "Siebzehn" :back "17"}
        {:front "Achtzehn" :back "18"}
        {:front "Neunzehn" :back "19"}}

    :Zahlen-zwanzig-11-23
    #{{:front "Zwanzig" :back " 20"}
        {:front "Einundzwanzig" :back "21"}
        {:front "Zweiundzwanzig" :back "22"}
        {:front "Dreiundzwanzig" :back "23"}
        {:front "Vierundzwanzig" :back "24"}
        {:front "Fünfundzwanzig" :back "25"}
        {:front "Sechsundzwanzig" :back "26"}
        {:front "Siebenundzwanzig" :back "27"}
        {:front "Achtundzwanzig" :back "28"}
        {:front "Neunundzwanzig" :back " 29"}
        {:front "Dreißig" :back "30"}
        {:front "Vierzig" :back "40"}
        {:front "Fünfzig" :back "50"}
        {:front "Sechzig" :back "60"}
        {:front "Siebzig" :back "70"}
        {:front "Achtzig" :back "80"}
        {:front "Neunzig" :back "90"}
        {:front "Hundert" :back "100"}}

    :Verben-11-23
    #{{:front "abbrechen" :back "to abort, to discontinue"}
        {:front "reiningen" :back "to clean, to purify, to purge"}
        {:front "wohnen" :back "to live, to stay, to dwell"}
        {:front "lieben" :back "to love"}
        {:front "gelten" :back "to apply, to pertain"}
        {:front "sterben" :back "to die"}
        {:front "malen" :back "to paint, to draw"}}

    :Substantive-11-23
    #{{:front "die Kamera, die Kameras" :back "camera"}
        {:front "die Jagd, die Jagden" :back "hunt, chase"}
        {:front "die Schnäppchen" :back "bargain(s)"}
        {:front "die Tasse, die Tassen" :back "cup"}
        {:front "der Teller, die Teller" :back "plate"}
        {:front "der Löffel, die Löffel" :back "spoon"}
        {:front "die Gabel, die Gabeln" :back "fork"}
        {:front "das Messer, die Messer" :back "knife"}
        {:front "der Computer, die Computer" :back "computer"}
        {:front "das Licht, die Lichter" :back "light, lamp, candle"}
        {:front "die Softwareentwicklung" :back "software development"}
        {:front "das Geschäftshaus" :back "commercial building"}
        {:front "die Kirche, die Kirchen" :back "churn"}
        {:front "die Moschee, die Moscheen" :back "mosque"}
        {:front "die Wohnung, die Wohnungen" :back "apartment"}
        {:front "das Werkzeug, die Werkzeuge" :back "tool"}
        {:front "das Flugzeug, das Flugzeuge" :back "airplane"}
        {:front "die Arbeit" :back "work, job"}
        {:front "die Regierung, die Regierungen" :back "government"}
        {:front "das Verb, die Verben" :back "verb"}
        {:front "das Substantiv, die Substantive" :back "noun"}
        {:front "das Pronomen, die Pronomen" :back "pronoun"}
        {:front "das Adjektiv, die Adjektive" :back "adjective"}
        {:front "das Adverb, die Adverbien" :back "adverbs"}
        {:front "die Präposition, die Präpositionen" :back "prepositions"}
        {:front "die Zahl, die Zahlen" :back "number"}}


    :Adjektive-11-23
    #{{:front "verrückt" :back "crazy"}
        {:front "leicht" :back "easy, light"}
        {:front "leise" :back "quiet, soft"}
        {:front "schwer" :back "difficult, heavy, hard"}
        {:front "kompliziert" :back "complicated"}
        {:front "trotzig" :back "defiant, contrary"}
        {:front "klein" :back "small"}
        {:front "gross" :back "big"}
        {:front "rein" :back "pure, clean"}
        {:front "gründlich" :back "thorough, careful, rigorous"}
        {:front "schmutzig" :back "dirty"}
        {:front "unschön" :back "ugly"}
        {:front "schön" :back "beautiful"}}

         } ;; decks













})




;; this is a hardcoded test db...
;; seems brittle...
(def test-db
  {:cards #{{:front "Deutsch" :back "German"}
            {:front "Genau" :back "Exactly"}
            {:front "Es tut mir leid" :back "I'm sorry"}
            {:front "Alles klar" :back "Alright"}}

   :current-deck :starter
   :current-card {:front "Deutsch" :back "German"}

   :current-face :front
   :current-flag "german-flag-small"

   :excluded #{}
   :removed #{}

   :decks {:big-deck-1 #{{:front "verwenden" :back "to use/utilize"}
                         {:front "sprechen" :back "to speak"}
                         {:front "suchen" :back "to seek/search"}
                         {:front "schicken" :back "to send/drop/dispatch/forward"}
                         {:front "gehen" :back "to go, to walk"}
                         {:front "essen" :back "to eat"}
                         {:front "bedeuten" :back "to matter, to mean, to imply, to involve"}
                         {:front "anzukommen" :back "to arrive"}
                         {:front "kommen" :back "to come"}
                         {:front "können" :back "to be able to (can)"}}
           :big-deck-2 #{{:front "aber" :back "but"}
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
