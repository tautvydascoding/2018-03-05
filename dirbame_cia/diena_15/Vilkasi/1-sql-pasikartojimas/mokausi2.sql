// UZDUOTIS
// Pasikartoti DB kurima
// 1. Sukurti DB 'blogas'

CREATE DATABES blogas;

// 2. sukurti table/lentele 'straipsniai'  id, title, description, date, author

CREATE TABLE straipsniai (
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  title varchar(255),
  description varchar(150)
  date (date)
  author varchar(30)
);

// 3. ideti pora straipnsiu  (ne Lorem)
