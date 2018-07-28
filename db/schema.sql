DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (ID)
);