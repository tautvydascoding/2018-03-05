<?php

include_once('zmogus.php');
$Petras = new Vyras();
echo  $Petras->ugis;
// echo $Petras-> pusryciai; ERROR "private" - kintamuju nepaveldima
// echo $Petras-> testosteronas; ERROR "private ir protected"- kintamieji nepasiekiami uz klases



  $Ona = new Moteris();
    $Ona->valgyti();




 ?>
