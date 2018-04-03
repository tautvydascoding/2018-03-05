-- // UZDUOTIS
-- // Pasikartoti DB kurima
-- // 1. Sukurti DB 'blogas'
-- // 2. sukurti table/lentele 'straipsniai' :
-- // strulpeliai: id (INT), title(varchar(255)), description (text), date (date), author(varchar(60))
-- // 3. ideti pora straipnsiu  (ne Lorem)
CREATE DATABASE blogas;

use blogas;

CREATE TABLE straipsniai (
    id INT(200) AUTO_INCREMENT PRIMARY KEY,
    title varchar(225),
    description text,
    date date,
    author varchar(225)
);

INSERT INTO straipsniai VALUES('','Amerika', 'vakar buvo geras', '2014.02.21', 'Antanas');
INSERT INTO straipsniai VALUES('','Japanese', 'vakar buvo yangying', '2074.02.27', 'Tomas');
