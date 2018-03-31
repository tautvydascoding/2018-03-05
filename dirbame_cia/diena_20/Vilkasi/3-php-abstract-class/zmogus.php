<?php
//Zmogus.php


 abstract class Zmogus {
  public $vardas = 'neatsimenu';
  public function valgyti() {
    echo "Valgau:";
  }
  //nesuprogramuota funkcija
  //getPasiekimai privales but suprogramuota klaseje, kuri paveldi klase 'zmogus''
abstract public function getPasiekimai();
}



 ?>
