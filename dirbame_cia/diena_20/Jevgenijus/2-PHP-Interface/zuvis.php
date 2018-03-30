<?php

//Uzduotis
//sukurti kintasius
// ilgis, svoris, pavadinimas
//Sukurti funkcija:
//plaukti (x,y,z)

//Uzduotis 2
// zuvies klasei uzdeti interface
include ('./zuviesnustatymai.php');

class Zuvis implements zuvuReikalavimai {
  public $ilgis = 0;
  public $svoris = 0;
  public $pavadinimas = "bevarde";

  public function plaukti($x, $y, $z) {
    echo "plaukiu $x, $y, $z";
  }
  //reikalavimai
  public function minta($x); {
    echo "valgau $x";
  }
  public function augimoGreitis($x); {
    echo "augu letai $x";
}
