<?php

include_once('zmogus.php');

$humanoidas = new Zmogus ();

$Antanas = new Vyras();
// antanas valgys kiausinius

$Antanas->setPusryciai('3kiausiniai');
$Antanas->valgyti();


// UZDUOTIS
// susikurti f-jas:
// 1.kurios pakeicia '$testosteronas' kieki
// 2. isveda 'testosterono'kieki
  echo "<br />";
  $Antanas->setTestosteronas(4000);
  $Antanas->printTestosteronas();



// UZDUOTIS 2 (private - protected skirtumas)
// Moters klases viduje atspausdinti:
// ugi, pusrycius, turta
 // f-ja printMotersDuomenys()
 // ugi, pusrycius, turta

$Ona = new Moteris();

echo "<br />";
$Ona->Ugis();


echo "<br />";
$Ona->Turtas();


echo "<br />";
$Ona->setValgau('duona');
$Ona->Valgau();
 ?>
