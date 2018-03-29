<?php

class Zmogus {
      public $ugis=0;
      private $pusryciai= '' ;
      protected $turtas= 'namas';


      public function valgyti() {
        echo "valgiau $this->pusryciai";
      }

    public function setPusryciai($x) {
      $this->pusryciai = $x;

    }

}
class Vyras extends Zmogus {
      private $testosteronas = 10000;


      public function setHormonai($xx) {
        $this->testosteronas = $xx;
      }
      public function printTestosteronas() {
        echo "Testosterono kiekis:".$this->testosteronas;
      }
}
class Moteris extends Zmogus {
  private $estrogenai = 2457;

  public function printDuomenys() {
    echo "Ugis: $this->ugis";
  }
}



 ?>
