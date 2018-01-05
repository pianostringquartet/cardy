(ns cardy.utils)

;; ----------------------------------------
;;
;; ----------------------------------------
(defn str->kw [a-str]
  (-> a-str
    (clojure.string/trim)
    (clojure.string/replace " " "-")
    (keyword)))

(defn kw->str [a-kw]
  (-> a-kw
    (name)
    (clojure.string/replace "-" " ")))
