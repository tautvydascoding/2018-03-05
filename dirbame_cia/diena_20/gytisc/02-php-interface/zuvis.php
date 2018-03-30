<?php
//sukuti kintamuosius
// ilgis, svoris. pavadinimas//SUKURTI F-JA:
//plaukti (x, y, z)

// uzduotis 2
// zuvis klasei uzdeti interface

include('zuvu_reikalavimai.php');

class Zuvis implements zuvuReikalavimai{
  public $ilgis = 0;
  public $svoris = 0;
  public $pavadinimas = "bevarde";
  public function plaukti ($x, $y, $z) {
    echo "plaukiu $x, $y, $z";
  }
  // reikalavimai is zuvu_reiklavimai.php
  public function minta($x) {
    echo "valgau $x";
  }
  public function augimoGreitis($x) {
    echo "augu $x";
  }
}
