CREATE TABLE users
(`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(30),
`email` varchar(50) NOT NULL,
`password` varchar(128) NOT NULL,
`reset_code` varchar(128),
UNIQUE KEY `email` (`email`));
