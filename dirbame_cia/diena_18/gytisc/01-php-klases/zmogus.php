<?php
// objekto receptas - zodelis class - nesukuria objekto
  class Zmogus {
    public $ugis = 200;
    private $bankoPin = 6662;
    protected $ligos = "aids";
    public function informacija() {
      echo "mano ugis: $this->ugis";
      echo "mano pinkodas: $this->bankoPin";
      echo "mano ligos: $this->ligos";
    }
    public function eiti() {
      echo "einu einu <br />";
    }
    public function begu($greitis) {
      echo "greit begu mano greitis: $greitis <br />";
    }
  }

// objekto kurimas
  $Petras = new Zmogus();
  $Ona = new Zmogus();
  $Birute = new Zmogus();
  echo "Petro ugis: " . $Petras->ugis . "<br />";
  echo "Onos ugis: " . $Ona->ugis . "<br />";
  echo "Birute ugis: " . $Birute->ugis . "<br />";
  $Petras->ugis = 172;
  echo "Petro ugis: " . $Petras->ugis . "<br />";
  echo "Onos ugis: " . $Ona->ugis . "<br />";
  echo "Birute ugis: " . $Birute->ugis . "<br />";

  $Petras->informacija()

  // echo Petras->bankoPin; ERROR privaciu kintamuju neiseina pasiekti
  // echo Pertas->ligos; ERROR protected kintamuju neiseina pasiekti
?>
