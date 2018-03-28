<<?php
// objekto receptas - zodelis CLASS - nesukuria objekto
class Zmogus {
  public $ugis = 200;
  private $bankoPin = 1542;
  protected $ligos = "aids";

  public function eiti() {
        echo "einu einu <br>";
  }
  public function begu($greitis) {
        echo "greit begu mano greitis: $greitis <br>";
  }
}

// objekto kurimas
$Petras = new Zmogus();
$Jonas = new Zmogus();
$Onute = new Zmogus();

echo "Petro ugis:" . $Petras->ugis . "<br/>";
