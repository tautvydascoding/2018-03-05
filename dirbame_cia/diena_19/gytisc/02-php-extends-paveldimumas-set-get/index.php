<?php

include('zmogus.php');

$humanoidas = new Zmogus();

$Antanas = new Vyras();
// antanas valgys kiausinius
$Antanas->setPusryciai('3kiausiniai');
$Antanas->valgyti();

// UZDUOTIS
// sukurti f-fas
// 1. kurios pakeicia 'testosterono' kieki
// 2. isveda 'testosterono' kieki

echo "<br />";
$Antanas->setTestosteronas(2222);
$Antanas->printTestosteronas();

// UZDUOTIS 2 (private-protected skirtumai)
// MOTERIS klases viduje atspausdinti:
// f-fa printMotersDuomenys()
// ugi, pusrycius, turta

echo "<br />";
$Ona = new Moteris();
$Ona->printMotersDuomenys();
