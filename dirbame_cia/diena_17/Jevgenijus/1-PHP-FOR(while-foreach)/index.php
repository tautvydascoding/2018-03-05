<?php

$masyvas = [1981, 1980, 1975 , 1995, 1999];

for ($i=0; $i < count($masyvas) ; $i++):
echo "Gime:" . $masyvas[$i] . "<br>";
endfor;





foreach ($masyvas as $stalciausPavad => $stalciausTurinys) {
  echo "Gimimo data su FOREACH $stalciausPavad:  $stalciausTurinys  <br>";
}

$kk = 0;
while ( $kk < 5) {
  echo "While gimimo datos:" . $masyvas[$kk] . "<br>";
  $kk++;
  // jei skaiciuoju begalo (nebutina naudoti)
  if($kk > 10000) {
    break; // nutraukiu cikla
  }
}

for ($i=0; $i < count($masyvas) ; $i=$i + 2) {
    echo "Kas antra data:" . $masyvas[$i] . "<br>";
}
