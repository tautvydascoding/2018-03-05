<<?php
// objekto receptas - zodelis CLASS - nesukuria objekto
class Zmogus {
  public $ugis = 200;
  private $bankoPin = 1542;
  protected $ligos = "aids";

  public function informacija() {
    echo "mano ugis: $this->ugis";
    echo "mano pin kodas: $this->bankoPin";
    echo "mano ligos: $this->ligos";
  }



  public function eiti() {
        echo "einu einu <br>"; echo "mano ugis: $this->ugis";
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
echo "Jono ugis:" . $Jonas->ugis . "<br/>";
echo "Onutes ugis:" . $Onute->ugis . "<br/>";
$Petras->ugis = 172;
echo "Petro ugis:" . $Petras->ugis . "<br/>";
echo "Jono ugis:" . $Jonas->ugis . "<br/>";
echo "Onutes ugis:" . $Onute->ugis . "<br/>";

$Petras->informacija();
