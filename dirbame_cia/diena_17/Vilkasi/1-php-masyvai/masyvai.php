<?php

//su for ciklu atspausdinam

$masyvas = [1981, 1980, 1975, 1995, 1999];

for ($i=0; $i < count($masyvas) ; $i++) {
echo "Gime:" . $masyvas[$i] . "<br>";
}



//su foreach



foreach ($masyvas as $stalciausPavad => $stalciausTurinys) {
  echo "Gimimo data su foreach: ". $stalciausTurinys. "<br>";
}


//su while

$kk = 0;

while ($kk < count($masyvas)) {
  echo "Gimimo data su while:" . $masyvas[$kk]. "<br>";
  $kk++;
}



//atspausdinti kas antra

for ($i=0; $i < count($masyvas) ; $i+=2) {
echo "Kas antra gimino data:" . $masyvas[$i] . "<br>";
}


//atspausdinti nuo trecio

for ($i=2; $i < count($masyvas) ; $i++) {
echo "Gimimo data nuo trecio:" . $masyvas[$i] . "<br>";
}


//matricos kurimas

$darbuotojai = [];
$x1 = ['Tomas',1981,'Buhalteris'];
$x2 = ['Ona', 1980, 'Programuotoja'];
$x3 = ['Petras', 1975, 'Direktorius'];

$darbuotojai[0] = $x1;
$darbuotojai[1] = $x2;
$darbuotojai[2] = $x3;

echo "Tomo specialybe:". $darbuotojai[0][2]. "<br>";

//for ciklas
for ($i=0; $i< count($darbuotojai) ; $i++) {
  echo "Vardas:" . $darbuotojai[$i][0] . "<br>" ;
  echo "Gimimo metai:" . $darbuotojai[$i][1] . "<br>" ;
  echo "Pareigos:" . $darbuotojai[$i][2] . "<br>" ;
}

//for for

for ($i=0; $i < count($darbuotojai) ; $i++) {
  for ($g=0; $g < 3; $g++) {
    echo "FOR FOR :" . $darbuotojai[$i][$g] . "<br>" ;
  }
}

for ($i=0; $i < 3 ; $i++) {
  echo "pasiruosiam darbui". "<br>";
  for ($g=0; $g < 3 ; $g = $g+2) {
  echo "dirbui". "<br>";

}
}
