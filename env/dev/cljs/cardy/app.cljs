(ns ^:figwheel-no-load cardy.app
  (:require [cardy.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
