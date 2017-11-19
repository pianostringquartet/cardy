(ns cardy.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [reagent.core :as reagent :refer [atom]]
            [cardy.core :as rc]))

(deftest test-home
  (is (= true true)))

(deftest another-test
  (is (= 2 (+ 1 1))))


(deftest another-test-2
  (is (= 4 (+ 3 1))))
