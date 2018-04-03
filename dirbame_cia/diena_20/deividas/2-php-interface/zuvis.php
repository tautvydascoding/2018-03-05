<?php

//sukurti kintamuosius:
// ilgis, svoris, pavadinimas
// Sukurti F-ja:
// plaukti(x, y, z)


// Uzduotis 2
// Zuvis klasei uzdeti  interface (reikalavimus)

include('zuvuReikalavimai.php');

class Zuvis implements zuvuReikalavimai {
  public $ilgis = 0;
  public $svoris = 0;
  public $pavadinimas = "bevarde";

  public function plaukti($x, $y, $z) {
    echo "plaukiu $x, $y, $z";
  }
// zuvuReikalavimai
public function minta($x) {
  echo "valgau $x";
}

public function augimoGreitis($x) {
  echo "augu letai $x";
  }
}


 ?>
