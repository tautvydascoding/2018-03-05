<?php

// <!-- Pasikartojimas programavimo pagrindu testui -->
// 1) Sukurti masyva :1981, 1980, 1975, 1995, 1999
// 1.1) Atspausdinti masyva naudojant FOR cikla, while cikla ir FOREACH cikla
// 1.4) Atspausdinti kas antra data
// 1.5) Atspausdinti visus nuo trecio
// 2) Sukurti matrica:
//  Tomas, 1981, Buhalteris
// Ona, 1980, Programuotoja
// Petras, 1975, Direktorius
// 2.1) atspausdinti su FOR ciklu
// 2.2) atspausdinti su FOR FOR ciklu
// 2.3) atspausdinti su FOREACH ciklu
$masyvas = [1981, 1980, 1975, 1995, 1999];

for ($i=0; $i < count($masyvas)  ; $i++) :
 echo "Gime:" . $masyvas[$i] . "<br />";

endfor;




foreach ($masyvas as $stalciausPavad => $stalciausTurinys) {
echo "Gimimo data su FOREACH  $stalciausPavad: $stalciausTurinys  <br />";
}

$kk = 0;
while ( $kk < count($masyvas)) {
  echo "While gimimo datos: " . $masyvas[$kk] . "<br />";
  $kk++;
  // jei skaiciuoju/ dirbu be galo tiesiog nutraukiu cikla su break
  if($kk > 10000) {
    break;
  }
}

// 1.4) Atspausdinti kas antra data


for ($i=0 ; $i < count($masyvas)  ; $i = $i + 2) :
 echo "Kas antra data:" . $masyvas[$i] . "<br />";
  endfor;

//Arba

for ($i=0 ; $i < count($masyvas)  ; $i++) :
 echo "Kas antra data:" . $masyvas[$i] . "<br />";
$i++;
endfor;

// ===============================================
// for ($i=0 , $tt=100 ; $i < 5  ; $i++, $tt = $tt +2) {
//  echo " i: $i ir tt: $tt <br />";
// }
// // isveda
// i: 0 ir tt: 100
// i: 1 ir tt: 102
// i: 2 ir tt: 104
// i: 3 ir tt: 106
// i: 4 ir tt: 108




 // 1.5) Atspausdinti visus nuo trecios datos iskaitant ir trecia data

for ($i=3; $i < count($masyvas); $i++) {
  echo "spausdinam nuo trecios datos:" . $masyvas[$i] . "<br />";
}






 ?>
