<?php
include('zuvuReikalavimai.php');

class Zuvis implements zuvuReikalavimai {
public $ilgis = 0;
public $svoris = 0;
public $pavadinimas = 'bevarde';
public function plaukti($x, $y, $z) {
  echo "<br/> mano kordinates:". $x, $y, $z;
  }
  public function minta($x){
    echo "Valgau: ". $x;
  }
  public function augimoGreitis($x){
    echo "Augimo greitis: ". $x;
  }
}

 ?>
