<?php


// objekto receptas - zodelis class - nesikuria objekto
class Zmogus {
  public $ugis = 200;
  private $bankoPin = 6662;
  protected $ligos ="aids";

  public function informacija() {
    echo "mano ugis: $this->ugis";
    echo "mano pin kodas: $this->bankoPin";
    echo "mano ligos: $this->ligos";
  }


public function eiti () {
  echo "einu einu <br />";
}

public function begu ($greitis) {
  echo "greit begu mano greitis: $greitis <br />";
    echo "mano ugis: $this->ugis";

  }
}

// objekto kurimas
$Petras = new Zmogus();
$Ona = new Zmogus();
$Birute = new Zmogus();
// objekto duomenu paemimas
echo "Petro ugis:" . $Petras ->ugis . "<br />";
echo "Onos ugis:" . $Ona ->ugis . "<br />";
echo "Birutes ugis:" . $Birute ->ugis . "<br />";
// objekto pakeitimas
$Petras->ugis  =172;
echo "Petro ugis:" . $Petras ->ugis . "<br />";
echo "Onos ugis:" . $Ona ->ugis . "<br />";
echo "Birutes ugis:" . $Birute ->ugis . "<br />";


$Petras ->informacija();
// echo  $Petras->bankoPin;  // Eroras privaciu kintamuju negalima pasiekti
// echo $Petras->ligos; // Eroras PROTECTED kintamuju negalima pasiekti
 ?>
