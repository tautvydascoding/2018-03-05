<?php

include('zmogus.php');

$humanoidas = new Zmogus();

$Antanas = new Vyras();

// antanas valgys kiausinius
$Antanas->setPusryciai('3kiausiniai');
$Antanas->valgyti();

// UZDUOTIS 1.
// susikurti f-jas:
// 1. kurios pakeicia 'testosterono' kieki
// 2. isvada 'testosrerono' kieki
echo "<br />";
$Antanas->setTestosteronas(4000);
$Antanas->printTestosteronas();

// UZDUOTIS 2  (private-protected skirtumas)
// MOTERS klases viduje atspausdinti:
// f-ja printMotersDuomenys()
// ugi, pusrycius, turta

$Ona = new Moteris();


$Ona->printDuomenys();
//
