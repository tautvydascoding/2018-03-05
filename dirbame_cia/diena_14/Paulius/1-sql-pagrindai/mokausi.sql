CREATE DATABASE hospital10; -- naujos duomenu bazes sukurimas

show databases; -- tikrinam ar susiskure duomenu baze

use hospital10; -- nurodom darbine duomenu baze

CREATE TABLE  doctors(
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  1name varchar(30)
);

show tables;

INSERT INTO doctors VALUES (1, 'Tim', 'Logan'); -- idedam i lentele siuos duomenis

SELECT FROM * doctors;    -- pasiziurim lentele ar idejo


CREATE TABLE  patients(
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  1name varchar(30),
  doctor_id varchar(30)
);

CREATE TABLE  images(
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  patient_id varchar(30)
);

--sukurem 3 lenteles

INSERT INTO patient VALUES (1, "name", "1name", 3);
-- idejom i patient lentele duomenis

INSERT INTO images VALUES ("", "name", 5);
-- idejom i images lenteles duomenis
