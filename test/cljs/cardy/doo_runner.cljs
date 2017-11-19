(ns cardy.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [cardy.core-test]))

;; this is doo, our test runner library;
;; the doo-tests macro says,
;; "Run every test in provided namespace(s)";
;; each ns needs to be required above
(doo-tests 'cardy.core-test)

