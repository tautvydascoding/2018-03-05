CREATE DABABASE hospital3; -- sukuria DB
SHOW DATABASES; -- Parodo visas DB
USE hospital3; -- pasirenkam hospital3 kaip DB , su kuria dirbsime


--AUTO_INCREMENT  - sitam stulpelyje kompiuteris automatiskai didins skaicius
--PRIMARY KEY - sitam stulpelyje reiksmes negali buti vienodos!!!
CREATE TABLE doctors (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  lname varchar(30)
);

--pasitikrinimas show tables;

--DUomenu idejimas
INSERT INTO doctors VALUES ('','Tim','Lognan');
INSERT INTO doctors VALUES ('','Paul','Leo');
INSERT INTO doctors VALUES ('','Ona','Onute');
INSERT INTO doctors VALUES ('','Lita','Litaite');
INSERT INTO doctors VALUES ('','Karis','Pita');

--pasitikrinimas
SELECT * FROM doctors;

CREATE TABLE patients (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  lname varchar(30),
  doctor_id varchar(6)
);

INSERT INTO patients VALUES ('','Monk','John',2);
INSERT INTO patients VALUES ('','Tom','Karlos',2);
INSERT INTO patients VALUES ('','Aris','Tido',1);
INSERT INTO patients VALUES ('','Tom','Kigs',3);
INSERT INTO patients VALUES ('','Co','Jon',1);
INSERT INTO patients VALUES ('','Tom','Nano',5);
INSERT INTO patients VALUES ('','Jili','Jato',4);

CREATE TABLE images (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name varchar(30),
  patient_id INT(6)
);

INSERT INTO images VALUES ('','foto.jpg',3);
INSERT INTO images VALUES ('','3.png',1);
INSERT INTO images VALUES ('','1.jpg',1);
INSERT INTO images VALUES ('','3.gif',2);
INSERT INTO images VALUES ('','8.jpg',4);


// uzduotis 1: istrinti gydytoja "Koris"

DELETE FROM doctors
WHERE name='Karis';


// uzduotis 2: Pakeisti "Co" varda i "Karolis"

UPDATE patients
SET name = 'Co'
WHERE id = 5;

// uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"

UPDATE patients
SET name='Tomas'
WHERE name='Tom';

// uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"

UPDATE patients
SET doctor_id=4
WHERE name like 'T%';


Surasti 4 paciento nuotrauka

SELECT images.id, images.name FROM images
INNER JOIN patients ON images.patient_id = patients.id
WHERE patient_id=4;

// uzduotis 4: gauti paciento "Mark" daktaro pavarde

SELECT doctors.lname FROM doctors
INNER JOIN doctors ON patients.name = doctors.lname
WHERE patients.name='Mark';
