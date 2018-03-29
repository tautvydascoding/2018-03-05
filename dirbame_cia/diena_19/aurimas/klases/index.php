<?php
  include_once('zmogus.php');
  $Petras = new Vyras();

  echo $Petras->ugis;
  echo $Petras->valgyt(); // private kintamuju nepaveldime;
  echo $Petras->testosteronas; // objektas neprieina pire recepto privaciu reiksmiu;
  //Private kintamieji nepasiekiami uz klases;
  echo $Petras->turtai; //Protected galima paveldeti, jie nepasiekiami uz klases.
  $Ona = new Moteris();
  echo $Ona->ugis;
  echo $Ona->ugis=159;
  echo $Ona->ugis;




 ?>
