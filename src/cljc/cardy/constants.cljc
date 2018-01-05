(ns cardy.constants)

;; --------------------------------------
;; Constants shared by server and client
;; --------------------------------------

;; Registration errors:
;; (def ERROR-NAME <message-for-user>)

(def INVALID-EMAIL-FORMAT
  "That's not a valid email address.")
(def EMAIL-ALREADY-EXISTS
  "This email is already in use. Did you forget your password?")
(def INVALID-PASSWORD-FORMAT
  "Password must be at least 8 letters and contain 1 number,
  and 1 uppercase and 1 lowercase letter.")
(def PASSWORDS-DO-NOT-MATCH
  "The passwords do not match!")
