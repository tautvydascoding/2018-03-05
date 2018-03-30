<?php


// UZDUOTIS 1
// sukurti kintamuosius:
// ilgis, svoris, pavadinimas
// SUKURTI F-JA:
// plaukti(x, y, z)

// UZDUOTIS 2
// zuvis klasei uzdeti interface
include('zuruReikalavimai.php');
class Zuvis implements zuvuReikalavimai {
    public $ilgis = 0;
    public $svoris = 0;
    public $pavadinimas = "bevarde";

    public function plaukti($x, $y, $z) {
        echo "plaukiu $x, $y, $z";
    }
    // reikalivimai
    public function minta($x) {
        echo "valgau $x";
    }
    public function augimoGreitis($x)  {
        echo "augu letai $x";
    }
}
