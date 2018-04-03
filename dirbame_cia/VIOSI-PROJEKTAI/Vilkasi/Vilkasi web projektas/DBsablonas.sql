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

//3.3 atspausdinti gydytojus ir pacientus kuriu vardai prasideda "T"

SELECT patients.name, patients.lname, doctors.name, doctors.lname
FROM patients, doctors
WHERE patients.name like 'T%' OR patients.lname like 'T%';

Surasti 4 paciento nuotrauka

SELECT images.id, images.name FROM images
INNER JOIN patients ON images.patient_id = patients.id
WHERE patient_id=4;

// uzduotis 4: gauti paciento "Monk" daktaro pavarde

SELECT doctors.lname FROM doctors
INNER JOIN patients ON patients.doctor_id = doctors.id
WHERE patients.name='Monk';

==============================MANO PROJEKTAS====================================

CREATE TABLE apie (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  antraste varchar(100),
  tekstas varchar(600)
);

CREATE TABLE nuotraukos (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  pavadinimas varchar(40),
  numeris INT(6)
);

CREATE TABLE uzklausa (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  vardas varchar(30),
  pavarde varchar(30),
  pastas varchar(50),
  telefonas INT(20),
  klausimas varchar(250),
  data date
);

INSERT INTO apie VALUES ('','Apie Aime','Ji bando nešvaistyti, bet rasti kūrybiškus būdus, kaip senus ir nebenešiojamus drabužius, senus papuošalus, karoliukus, plastiko liekanas ir kitas medžiagas panaudoti naujam gyvenimui ir sukurti nešiojamus rankų darbo aksesuarus. Aimė yra lėtos mados, tvarumo, sąžiningos prekybos ir vietinių kūrėjų bei smulkaus verslo entuziastė!');
INSERT INTO apie VALUES ('','Aime atsinaujino','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess.!');
INSERT INTO apie VALUES ('','Apie Aime','Aimė reprezentuoja atsakingą vartojimą ir brandų požiūrį į mus supančią aplinką. Ji labiausiai tiki tuo, kaip viskas buvo kuriama iki vienkartinės mados atsiradimo...<br></br>
Ji bando nešvaistyti, bet rasti kūrybiškus būdus, kaip senus ir nebenešiojamus drabužius, senus papuošalus, karoliukus, plastiko liekanas ir kitas medžiagas panaudoti naujam gyvenimui ir sukurti nešiojamus rankų darbo aksesuarus. Aimė yra lėtos mados, tvarumo, sąžiningos prekybos ir vietinių kūrėjų bei smulkaus verslo entuziastė!');

CREATE TABLE logo (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  pavadinimas varchar(50)
);

INSERT INTO logo VALUES ('','logoheader.svg');
INSERT INTO logo VALUES ('','logopilkas.svg');
INSERT INTO logo VALUES ('','logogeltonas.svg');


CREATE TABLE kontaktai (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  telefonas varchar(30),
  pastas varchar(50),
  fb varchar(50)
);

INSERT INTO kontaktai VALUES ('','+37065234567', 'aime@aime.lt','fb.com/aimė');
INSERT INTO kontaktai VALUES ('','+37061233333', 'papuosalai@aime.lt','fb.com/aimės.papuosalai');
INSERT INTO kontaktai VALUES ('','+37064560000', 'aime.papuosalai@aime.lt','fb.com/aimės.rankdarbiai');

$vard = $_GET['vardas'];
$pavd = $_GET['pavarde'];
$past = $_GET['pastas'];
$tel = $_GET['numeris'];
$tema = $_GET['tema'];
$klaus = $_GET['klausimas'];

CREATE TABLE uzklausa (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  vardas varchar(30),
  pavarde varchar(30),
  pastas varchar(50),
  telefonas INT(20),
  tema varchar(50),
  klausimas varchar(250),
  data date 
);
