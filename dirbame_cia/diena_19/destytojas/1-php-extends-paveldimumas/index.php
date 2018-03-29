<?php

include('zmogus.php');

 $Petras = new Vyras();
echo $Petras->ugis;
// echo $Petras->pusryciai; ERROR 'private' - kintamuju nepaveldimi

//echo $Petras->testosteronas;  ERROR 'private' ir 'protected' kintamieji NEPASIEKIAMI uz klases

// echo $Petras->turtas;  // ERROR
// 'protected' nepasiekaimi uz klases

$Ona = new Moteris();
$Ona->valgyti();
