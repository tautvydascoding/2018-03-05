<?php

include('zmogus.php');


$humanoidas = new Zmogus();


$Antanas = new Vyras();
//antanas valgys kiausinius
$Antanas->setPusryciai('3kiausiniai');
$Antanas->valgyti();



$Antanas->setTestosteronas(8000);
$Antanas->getTestosteronas();

$Ona = new Moteris();
$Ona->setEstrogenai(1500);
$Ona->getEstrogenai();


$Ona->getUgis();
$Ona->getTurtas();
$Ona->getPusryciai();
