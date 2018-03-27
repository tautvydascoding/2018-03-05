<?php

$darbuotojai = [];
$x1 = ['Tomas', 1981, 'Buhalteris'];
$x2 = ['Ona', 1980, 'Programuotoja'];
$x3 = ['Petras', 1975, 'Direktorius'];

$darbuotojai[0] = $x1;
$darbuotojai[1] = $x2;
$darbuotojai[2] = $x3;

echo "Tomo specialybe yra:" . $darbuotojai[0][2] . "<br/>";
echo "Petro gimimo metai:" . $darbuotojai[2][1] . "<br/>";

for ($i=0; $i < 3 ; $i++) {
  echo "Vardas:" . $darbuotojai[$i][0] . "<br/>";
  echo "Metai:" . $darbuotojai[$i][1] . "<br/>";
  echo "Pareigos:" . $darbuotojai[$i][2] . "<br/>";
}

//FOR FOR (Dvigubas ciklas)
for ($i=0; $i< 3; $i++) { // 3 - kiek skirtingu darbuotoju
  for ($g=0; $g < 3; $g++) {  // 3 - tai punktai, vardas, data, pareigos
    echo "FOR Darbuotojai:" . $darbuotojai[$i][$g] . "<br/>";
  }
}

// kiek bus "g" ir "i" ?
echo "g yra: $g <br>";
echo "i yra:" . $i;

for ($i=0; $i < 3; $i++) {
  echo "pasiruosimas <br>";
  for ($g=0; $g <3 ; $g++) {
    echo "dirbu <br>";
  }
}
