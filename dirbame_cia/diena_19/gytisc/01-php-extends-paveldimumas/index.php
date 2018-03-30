<?php
include_once('zmogus.php');
  $Petras = new Vyras();
echo $Petras->ugis;
// echo $Petras->pusryciai; ERROR
// 'private'  kintamuju napaveldime

// echo $Petras->testosteronas; ERROR
// 'private' ir 'protected' kintamuju nepasiekiame uz klases

echo $Petras->turtas;

$Ona = new Moteris();
$Ona->valgyti();



?>
