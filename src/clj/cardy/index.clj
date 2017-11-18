; (ns cardy.index
;   (:require [hiccup.page :refer [include-js include-css html5]]))

; ;; when you hit "/", serve this Hiccup instead of the layout/render "index.html" stuff

; (def head []
;   [:head

;     [:link
;       {:rel "stylesheet"
;        :href "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.css"}]

;     [:link
;       {:rel "stylesheet"
;        :href "assets/css/material-design-iconic-font.min.css"}]

;     [:link
;       {:rel "stylesheet"
;        :href "assets/css/re-com.css"}]

;     [:link
;       {:rel "stylesheet"
;        :href "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
;        :type "text/css"}]


;     [:link
;       {:rel "stylesheet"
;        :href "assets/css/re-com.css"}]

;     [:link
;       {:rel "stylesheet"
;        :href "assets/css/re-com.css"}]



;     ])






; (defn index [identity]
;   (let [json-identity (json/generate-string identity)]
;     (html5
;       (head)
;       [:body
;        (loader)
;        [:div#app]
;        [:script {:src (str "js/compiled/app.js?v=" (version))}]
;        [:script (str "bluegenes.core.init(" json-identity ");")]
;        ]
;       )))







; (defn head []
;   [:head
;    loader-style
;    [:title "InterMine 2.0 bluegenes"]
;    (include-css
;      "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.2.0/gridlex.min.css")
;    (include-css
;      "http://cdn.intermine.org/js/intermine/im-tables/2.0.0/main.sandboxed.css")
;    (include-css "css/site.css")
;    (include-css "vendor/font-awesome/css/font-awesome.min.css")
;    [:meta {:charset "utf-8"}]
;    [:meta {:content "width=device-width, initial-scale=1", :name "viewport"}]
;    [:script "var serverVars={googleAnalytics :'" (:google-analytics env) "'}"]

;    [:link {:rel "shortcut icon" :href "https://cdn.rawgit.com/intermine/design-materials/f5f00be4/logos/intermine/fav32x32.png" :type "image/png"}]

;    [:script {:src
;              "http://cdn.intermine.org/js/intermine/imjs/3.15.0/im.min.js"}]
;    [:script
;     {:crossorigin "anonymous",
;      :integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=",
;      :src "https://code.jquery.com/jquery-3.1.0.min.js"}]
;    [:script {:src "vendor/bootstrap/dist/js/bootstrap.js"}]
;    [:script {:src "vendor/bootstrap/js/tooltip.js"}]
;    [:script {:src "vendor/bootstrap/js/popover.js"}]
;    [:script {:src "https://apis.google.com/js/api.js"}]
;    ]
;   )


; (defn loader []
;   [:div#wrappy
;    [:div "LOADING INTERMINE"]
;    [:div#loader
;     [:div.worm.loader-organism]
;     [:div.zebra.loader-organism]
;     [:div.human.loader-organism]
;     [:div.yeast.loader-organism]
;     [:div.rat.loader-organism]
;     [:div.mouse.loader-organism]
;     [:div.fly.loader-organism]]])


; (defn index [identity]
;   (let [json-identity (json/generate-string identity)]
;     (html5
;       (head)
;       [:body
;        (loader)
;        [:div#app]
;        [:script {:src (str "js/compiled/app.js?v=" (version))}]
;        [:script (str "bluegenes.core.init(" json-identity ");")]
;        ]
;       )))
