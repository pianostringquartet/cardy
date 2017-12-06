CREATE TABLE cards
(id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
 deck VARCHAR(360),
 front TEXT,
 back TEXT,
 email VARCHAR(50),
FOREIGN KEY fk_cat(email) REFERENCES users(email));
