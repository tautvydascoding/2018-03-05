
SHOW databases;  -- parodo visas duomenu bases
use duomenuBazesPavadinimas;  -- !!! issirenkate su kuria DB su kuria dirbsisme
SHOW tables;    -- parodo visas Lenteles (DB-es kurioje dirbate)

SELECT * FROM user;  -- paimame visus duomenis/stulpelius "*" is lenteles 'user'
SELECT User, Password, Drop_priv, password_expired   FROM user;

CREATE USER 'tautvis2'@'localhost' IDENTIFIED BY 'sugalvotasSlaptazodis';
GRANT ALL PRIVILEGES ON * . * TO 'tautvis2'@'localhost';

-- ` -  db/tables  pavadinimams
-- '  - tekstui/reikmems/values
-- "" - tekstui/reikmems/values



CREATE DATABASE hospital3; --nauja DB sukurimas
SHOW databases; -- patikrinimas ar susikure

use hospital3; ----!!! nurodome darbine duomenu base jeigu suveike database changed


CREATE TABLE doctors (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name varchar(30),
    lname varchar(30)
);

show tables;
SELECT * FROM doctors;


-- duomenu idejas y lentele
INSERT INTO lentelesPavadinimas VALUES(1,'Tim', "Logan");

INSERT INTO lentelesPavadinimas VALUES('','Tim', "Logan");

-- arba

INSERT INTO lentelesPavadinimas (id, name, lname,)
VALUES ('','Tim', "Logan");

INSERT INTO doctors VALUES('','Tim', "Logan");
--pasitikrinti
SELECT * FROM doctors;
INSERT INTO doctors VALUES('','Paul', "Leo");
INSERT INTO doctors VALUES('','Ona', "Onute");
INSERT INTO doctors VALUES('','Lita', "Litaite");
INSERT INTO doctors VALUES('','Karis', "Pita");
SELECT * FROM doctors;


CREATE TABLE patients (
    id INT(8) AUTO_INCREMENT PRIMARY KEY,
    name varchar(30),
    lname varchar(30),
    doctor_id INT (8)
);

INSERT INTO patients VALUES('','Mark', "John", 2);
INSERT INTO patients VALUES('','Tom', "Karlos", 2);
INSERT INTO patients VALUES('','Aris', "Tido", 1);
INSERT INTO patients VALUES('','Tom', "Kigo", 3);
INSERT INTO patients VALUES('','Co', "Joh", 1);
INSERT INTO patients VALUES('','Tom', "Nano", 5);
INSERT INTO patients VALUES('','Jili', "Jato", 4);


CREATE TABLE images (
    id INT(8) AUTO_INCREMENT PRIMARY KEY,
    name varchar(120),
    patient_id INT (8)
);
INSERT INTO images VALUES('','foto.jpg', 3);
INSERT INTO images VALUES('','3.png', 1);
INSERT INTO images VALUES('','1.jpg', 1);
INSERT INTO images VALUES('','3.gif', 2);
INSERT INTO images VALUES('','8.jog', 4);

-- pakeisim timo pavare i "Timotis"
UPDATE doctors SET lname = 'Timotis'
 WHERE id=1
 Limit 1;
-- !!!! butinai where nurodyti, nes kitaip visa stulpeli pakeis
 -- limit uzdeda limita, kiek keisime puiki apsauga nuo zioplu klaidu


-- Uzduotis
-- atspausdinti/isvesti tik "Onos" eilute

-- SELECT * FROM doctors WHERE name="Ona";
SELECT * FROM doctors WHERE id=3;


INSERT INTO doctors VALUES('','Tomas', "Tomulaitis");

DELETE FROM doctors WHERE id = 6;
DELETE FROM doctors WHERE name='Tomas';

SELECT images.id, images.name FROM images INNER JOIN patients ON  images.patient_id = patients.id
WHERE patient_id = 4;
  -- LIKE Operator	Description
-- WHERE CustomerName LIKE 'a%'	Finds any values that starts with "a"
-- WHERE CustomerName LIKE '%a'	Finds any values that ends with "a"
-- WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
-- WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
-- WHERE CustomerName LIKE 'a_%_%'	Finds any values that starts with "a" and are at least 3 characters in length
-- WHERE ContactName LIKE 'a%o'	Finds any values that starts with "a" and ends with "o"

-- // uzduotis 1: istrinti gydytoja "Karis"
-- // uzduotis 2: Pakeisti "Co" varda i "Karolis"
-- // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
-- // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
-- // uzduotis 4: gauti paciento "Mark" daktaro pavarde
-- 1
DELETE FROM doctors WHERE id = 5;
-- 2
UPDATE patients SET name = 'Karolis'
 WHERE id=5;
 LIMIT 1;
-- 3.1
 UPDATE patients SET name = 'Tomas'
  WHERE name="Tom";

-- 3.2
  UPDATE patients SET  doctor_id = '4'
  WHERE name LIKE 'T%';
--  4
  SELECT doctors.lname FROM doctors
  INNER JOIN patients ON patients.doctor_id = doctors.id
  WHERE patients.name = 'Mark';
  -- doctors.lname atspausdiname
  -- ieskome MArk vardo
  -- INNER JOIN - laikinai sujungia lenteles rysiu pagal ( .doctor_id ir .id stulepli)
-- ////////////////////////////////////////////////////
--  grazinam Ona , lita arba pauliu
SELECT * FROM doctors
WHERE id=3 OR id=4 OR id=2
ORDER BY name ASC
LIMIT 2;
--  ORDER BY - rikiavimas;
-- LIMIT - apriboja kiek grazins duomenu
--  WHERE - rasomos salygos - kaip if sakiniai programavime


-- 3.3 atspausdinti visus gydytojus ir pacientus , kuriu vardas arb pavarde is T raides
SELECT patients.name
FROM patients, doctors;
WHERE patients.name = "Mark" AND patients.doctor_id = doctors.id;
