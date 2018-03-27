<?php


// ---- -PASIKARTOJIMAS PROGRAMAVIMO PAGRINDU TESTUI-----
// 1) sukurti masyva : 1981, 1980, 1975, 1995, 1999
// 1.1) atspausdinti masyva naudojant FOR cikla, While cikla ir FOREACH cikla
// 1.4 Atspausdinti kas antra data
// 1.5 Atspasudinti visas datas nuo 3-cios

// 2) sukurti matirca:
// Tomas, 1981, Buhalteris
// Ona 1980 Programuotoja
// Petras, 1975, Direktorius
// 2.1) atspausdinti su FOR ciklu
// 2.2) atspausdinti su FOR FOR ciklu
// 2.3) atspausdinti su FOREACH

$masyvas = [ 1981, 1980, 1975, 1995, 1999 ];

// 1.1.1
// for ($i=0; $i < sizeof($masyvas) ; $i++) {
for ($i=0; $i < count($masyvas) ; $i++) :
     echo "Gime:" . $masyvas[$i] . "<br>";
endfor;

// 1.1.2
foreach ($masyvas as $stalciausPavad => $stalciausTurinys) {
    echo "Gimimo data su FOREACH $stalciausPavad:   $stalciausTurinys  <br>";
}
