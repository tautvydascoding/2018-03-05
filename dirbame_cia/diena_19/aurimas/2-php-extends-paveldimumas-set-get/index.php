<?php

include('zmogus.php');

 $Petras = new Vyras();
echo $Petras->ugis."<br />";

// echo $Petras->pusryciai; ERROR 'private' - kintamuju nepaveldimi

//echo $Petras->testosteronas;  ERROR 'private' ir 'protected' kintamieji NEPASIEKIAMI uz klases

// echo $Petras->turtas;  // ERROR
// 'protected' nepasiekaimi uz klases

// $Ona->valgyti();


$Antanas= new Vyras();
// echo "$Antanas->pusryciai \n";
$Antanas->setPusryciai('spinatai');
$Antanas->valgyti();
$Antanas->hormonai();
$Antanas->newtest(9999);
$Antanas->hormonai();
// echo $Antanas->turtas."; <br />";
echo $Antanas->ass."; <br />";

$Ona = new Moteris();
$Ona->whatAge();
$Ona->changeAge(12);
$Ona->whatAge();
$Ona->whatWealth();
$Ona->setWealth('Pilis');
$Ona->whatWealth();



$Dany = new Chick();
$Dany->printUgis();
$Dany->printPusryciai();
$Dany->printTurtas();
$Dany->getDuomenys();

echo "=================================================<br />";
$Ivy= new Beauty();
$Ivy->getDuomenys();
