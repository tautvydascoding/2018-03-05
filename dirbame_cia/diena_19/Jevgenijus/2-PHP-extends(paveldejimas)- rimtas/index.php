<?php

include('zmogus.php');

$humanoidas = new Zmogus();

$Antanas = new Vyras();
// Antanas valgys kiausiunius
$Antanas->setPusryciai('3kiausiniai');
$Antanas->valgyti();


$Jonas = new Vyras();
$Jonas->setHormonai(1457);
$Jonas->printTestosteronas();







//UZDUOTIS
//Susikurti funkcijas
// 1. Kurios pakeicia "testesterono" kieki
// 2. ivesti testerono kieki


//UZDUOTIS 2 (private-protected) skirtukmai
// Moters klases viduje atspausdinti:
//funkcija printMotersDuomenys()
//ugi, pusrycius, turta

$Ona = new Moteris();




$Ona->printDuomenys();


?>
