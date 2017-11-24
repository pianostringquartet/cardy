CREATE TABLE users
(`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(30) NOT NULL,
`email` varchar(50) NOT NULL,
`password` varchar(128) NOT NULL,
UNIQUE KEY `username` (`username`));
