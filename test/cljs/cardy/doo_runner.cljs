(ns cardy.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [cardy.core-test]))

(doo-tests 'cardy.core-test)

