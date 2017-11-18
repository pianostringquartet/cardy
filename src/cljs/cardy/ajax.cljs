(ns cardy.ajax
  (:require [ajax.core :as ajax]))

(defn local-uri? [{:keys [uri]}]
  (not (re-find #"^\w+?://" uri)))



;; hmm... this "x-csrf" stuff again;
;; but I believe you found a solution for it anyway, right?
;; as in, it wasn't the problem afterall.
(defn default-headers [request]
  (if (local-uri? request)
    (-> request
        (update :uri #(str js/context %))
        (update :headers #(merge {"x-csrf-token" js/csrfToken} %)))
    request))


(defn load-interceptors! []
  (swap! ajax/default-interceptors
         conj
         (ajax/to-interceptor {:name "default headers"
                               :request default-headers})))

;; ^^^ I have no fucking idea why this stuff is necessary,
;; but you can probaby leave it alone for now?
