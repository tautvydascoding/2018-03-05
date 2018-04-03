CREATE TABLE prekes(
  id INT(9) AUTO_INCREMENT PRIMARY KEY,
  Paslauga varchar(30),
  Kaina varchar(30)
);

INSERT INTO prekes VALUES(1, 'masina', 2000);
INSERT INTO prekes VALUES(2, 'dviratis', 500);
INSERT INTO prekes VALUES(3, 'valtis', 1200);
INSERT INTO prekes VALUES(4, 'sodyba', 20000);
INSERT INTO prekes VALUES(5, 'sketis', 20);
INSERT INTO prekes VALUES(6, 'namas', 200000);
INSERT INTO prekes VALUES(7, 'suo', 250);
INSERT INTO prekes VALUES(8, 'kate', 5);
INSERT INTO prekes VALUES(9, 'kelione', 320);

CREATE TABLE darbuotojai(
id INT(3) AUTO_INCREMENT PRIMARY KEY,
Vardas varchar(30),
Pavarde varchar(30),
Pareigos varchar(30)
);

INSERT INTO darbuotojai VALUES('', 'Lorem', 'Ipsum', 'Web Developer');
INSERT INTO darbuotojai VALUES('', 'Lorem1', 'Ipsum1', 'Web Designer');
INSERT INTO darbuotojai VALUES('', 'Lorem2', 'Ipsum2', 'CEO');

 /* blog */
CREATE TABLE blog(
  id INT(30) AUTO_INCREMENT PRIMARY KEY,
  Straipsnis varchar(30),
  Tema varchar(30),
  Data datetime
);


INSERT INTO blog VALUES('', 'Lorem Ipsum 1', 'nature',  NOW()  );
INSERT INTO blog VALUES('', 'Lorem Ipsum 2', 'travel',  NOW()  );
INSERT INTO blog VALUES('', 'Lorem Ipsum 3', 'business',  NOW()  );
INSERT INTO blog VALUES('', 'Lorem Ipsum 4', 'business',  NOW()  );
INSERT INTO blog VALUES('', 'Lorem Ipsum 5', 'travel',  NOW()  );
INSERT INTO blog VALUES('', 'Lorem Ipsum 6', 'business',  NOW()  );
