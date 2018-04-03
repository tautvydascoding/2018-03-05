<?php
include_once('zmogus.php');


$Petras = new Vyras();
   echo $Petras->ugis;
   // echo $Petras->pusryciai; error 'private' kintamuju nepaveldime
   // echo $Petras->testosteronas;  ERROR neprieinam ir prie privaciu ir protected reiksmiu
//  jie nepasiekia uz klases

// echo $Petras->turtas; // ERROR "protected" nepasiekami uz klases

$Ona = new Moteris();
echo  $Ona->valgyti();

 ?>
