### Schema

CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos (
	id INTEGER NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
