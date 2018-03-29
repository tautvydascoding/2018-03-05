<?php
//objekto receptas - zodelis class - nesukuria objekto

class Zmogus {
  public $ugis = 200;
  private $bankoPin = 6662;
  protected $ligos = "aids";

  public function informacija(){
    echo "mano ugis: $this->ugis";
    echo "mano banko kodas: $this->bankoPin";
    echo "mano ligos: $this->ligos";
  }

  public function eiti(){
    echo "einu einu <br>";
  }

  public function begu($greitis){
    echo "mano begimo greitis: $greitis <br>";
  }

}


//objekto kurimas

$Petras = new Zmogus();
$Ona = new Zmogus();
$Birute = new Zmogus();

$Petras -> ugis = 184;
$Birute -> ugis = 167;
$Ona -> ugis = 162;



echo "Petro ugis: " . $Petras -> ugis . "<br/>";
echo "Onos ugis: " . $Ona -> ugis . "<br/>";
echo "Birutes ugis: " . $Birute -> ugis . "<br/>";

// echo "Petro banko pin kodas:" . $Petras -> $bankoPin . "<br/>" //ERROR private kintamuju pasiekti neiseina
// / //ERROR protected kintamuju pasiekti neiseina

$Petras->informacija();


 ?>
