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



CREATE DATABASE hospital3; -- naujos  DB sukurimas
SHOW databases;  -- pasitikrinimas ar susikure

use hospital3; -- !!!! nurodome darbine duomenu base (DB)
-- jeigu suveike gausite: 'Database changed'

-- AUTO_INCREMENT - sitam stulpelyje kompiuteris automatiskai didins skaicius
-- 'PRIMARY KEY'  - sitam stulpelyje reiksmes negali buti vienodos!!!
  CREATE TABLE doctors (
     id INT(6) AUTO_INCREMENT PRIMARY KEY,
     name varchar(30),
     lname varchar(30)
     );
-- pasitikrinimas
  show tables;

--duomenu idejimas ilentele
--INSERT INTO lentelesPavadinimas VALUES (1, 'Tim', "Logan");
--INSERT INTO lentelesPavadinimas VALUES ('', 'Tim', "Logan");
--arba
--INSERT INTO lentelesPavadinimas (id, name, lname)  VALUES ('', 'Tim', "Logan");


    INSERT INTO doctors VALUES ('', 'Tim', 'Logan');
    -- pasitikritni
    SELECT * FROM doctors;

    INSERT INTO doctors VALUES ('', 'Paul', 'Elo');
    INSERT INTO doctors VALUES ('', 'Ona', 'Onutaite');
    INSERT INTO doctors VALUES ('', 'Lita', 'Litaite');
    INSERT INTO doctors VALUES ('', 'Karis', 'Pita');

  SELECT * FROM doctors;

-- lenteles kurimas
  CREATE TABLE patients (
     id INT(6) AUTO_INCREMENT PRIMARY KEY,
     name varchar(25),
     lname varchar(30),
     doctor_id INT(6)
     );
-- duomenu i pacientus idejimas
    INSERT INTO patients  VALUES  ('', 'Mark', 'Jonon' , '2' );
    INSERT INTO patients  VALUES  ('', 'Tom', 'Taros' , '2' );
    INSERT INTO patients  VALUES  ('', 'Aris', 'Tido' , '1' );
    INSERT INTO patients  VALUES  ('', 'Tom', 'Kigo' , '3' );
    INSERT INTO patients  VALUES  ('', 'Co', 'Jon' , '1' );
    INSERT INTO patients  VALUES  ('', 'Tom', 'Nano' , '5' );
    INSERT INTO patients  VALUES  ('', 'Jili', 'Jato' , '4' );
    --pasitikrinimas
      SELECT * FROM patients;

      -- lenteles sukurimas
      CREATE TABLE images (
         id INT(6) AUTO_INCREMENT PRIMARY KEY,
         name varchar(120),
         patient_id INT(6)
         );

    --idejimas duomenu i 'images' lentele
     INSERT INTO images  VALUES  ('', 'foto.jpg', 3  );
     INSERT INTO images  VALUES  ('', '3.png', 1  );
     INSERT INTO images  VALUES  ('', '1.jpg', 1  );
     INSERT INTO images  VALUES  ('', '3.gif', 2  );




      UPDATE patients
          SET doctor_id = 1
          WHERE id=3 Limit 1;

     UPDATE patients
              SET name = 'Paul', lname = 'Paulauskas', doctor_id = 3
              WHERE id=5;

 // kaip istrinti 4 pacienta?
 DELETE FROM patients where id = 4;

  // kaip istrinti 2 daktara?
  DELETE FROM doctors WHERE id=2;



  Create TABLE `patients` ( id INT(6) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), lname VARCHAR(35) );
   INSERT INTO patients  VALUES  ('', 'Ari', 'Amon');

   // !!!
   RENAME TABLE paccients TO patients;

     // pervadins lentele
   ALTER TABLE `doctors` CHANGE `pacient_id` `patient_id` int(6); // pervadins stulpeli
   ALTER TABLE `patients` CHANGE `patient_id` `doctor_id` int(6);
   ALTER TABLE doctors DROP COLUMN patient_id;   // istrins stulpeli
   ALTER TABLE patients ADD  patient_id INT(6);  // sukurs stulpeli

   Create TABLE `img` ( id INT(6) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(55), client_id int(6) );

    UPDATE img SET name = 'logo2.jpg' WHERE client_id=4;
	 select * FROM  img;
	 // ` -  db/tables
	 // '  - tekstui/reikmems/values


  //-------------DOCTORS----------
INSERT INTO doctors  VALUES  ('', 'Tom', 'Opsa');
INSERT INTO doctors  VALUES  ('', 'Paul', 'Tor');;
INSERT INTO doctors  VALUES  ('', 'Jo', 'Oto');
INSERT INTO doctors  VALUES  ('', 'Lili', 'Lekso');
INSERT INTO doctors  VALUES  ('', 'Timy', 'So');
//-------------patients---------------
	INSERT INTO patients  VALUES  ('', 'Ari', 'Amon' , '2' );
	INSERT INTO patients  VALUES  ('', 'Tim', 'Taros' , '1' );
	INSERT INTO patients  VALUES  ('', 'Ana', 'Tomson' , '1' );
	INSERT INTO patients  VALUES  ('', 'Tom', 'Alis' , '3' );
	INSERT INTO patients  VALUES  ('', 'Karis', 'Katis' , '2' );
	INSERT INTO patients  VALUES  ('', 'Jo', 'Oporas' , '2' );
//-------------IMG---------------
INSERT INTO img  VALUES  ('', 'pic-46.jpg', '5');
INSERT INTO img  VALUES  ('', 'pic-46.PNG', '1');
INSERT INTO img  VALUES  ('', 'pic-456.jpg', '3');
INSERT INTO img  VALUES  ('', 'pic-4234234.GIF', '2');
INSERT INTO img  VALUES  ('', 'pic-4622.GIF', '4');
