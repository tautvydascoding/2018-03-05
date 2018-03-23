

// uzduotis 1: istrinti gydytoja "Koris" +
// uzduotis 2: Pakeisti "Co" varda i "Karolis" +
// uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas" +
// uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"

// uzduotis 4: gauti paciento "Mark" daktaro pavarde

// prendimai:
// 1.
SELECT * FROM doctors;
DELETE FROM doctors WHERE id = 5;
SELECT * FROM doctors;

// graziname Ona, Lita, arba Pauliu
SELECT * FROM doctors
 WHERE id = 3 OR id = 4 OR id = 2
 ORDER BY name ASC
 LIMIT 2;
//  ORDER BY - rikiavimas
// LIMIT - apriboja kie kgrazins duomenu
// WHERE - rasomos salygos - kaip If sakiniai programavime

// uzduotis 2: Pakeisti "Co" (paciento) varda i "Karolis" +
SELECT * FROM patients;
SELECT id, name FROM patients;

UPDATE patients SET   name = "Karolis"
WHERE id = 5
LIMIT 1;

SELECT * FROM patients;
/// uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"

UPDATE patients SET   name = "Tomas"
WHERE name = 'Tom' ;
// arba
UPDATE patients SET   name = "Tomas"
WHERE id = 2 OR id = 4 OR id = 6 ;

//// uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  doctor_id pakeisti i "4"
UPDATE patients  SET doctor_id = 4
WHERE name LIKE 'T%';



// uzduotis 4: gauti paciento "Mark" daktaro pavarde
SELECT doctors.lname FROM doctors
INNER JOIN patients ON patients.doctor_id = doctors.id
WHERE patients.name = 'Mark';   // ieskome Mark vardo
// doctors.lname   - atspaudiname
// INNER JOIN  -  laikinai sujungia lenteles rysiu ( pagal .doctor_id  ir .id stulpeli)

// arba
SELECT   doctors.lname
FROM patients, doctors
WHERE patients.name  = 'Mark' AND patients.doctor_id = doctors.id;
