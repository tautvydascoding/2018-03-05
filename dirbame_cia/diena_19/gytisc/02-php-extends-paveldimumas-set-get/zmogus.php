<?php

// extends Zmogus:
// pavaldimi visi kintamieji ir f-jos,
// kurie yra 'public' arba 'protected'

class Zmogus {
    public $ugis = 0;
    private $pusryciai = 'sumustinis';
    protected $turtas = 'namas';
    public function valgyti() {
        echo "valgiau: $this->pusryciai";
    }
    public function getPusryciai() {
    return $this->pusryciai;
    }

    public function setPusryciai($x) {
      $this->pusryciai = $x;
    }

}
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    public function setTestosteronas($y) {
      $this->testosteronas = $y;
    }
    public function printTestosteronas() {
      echo "Testosteronas; " . $this->testosteronas;
    }
}
class Moteris  extends Zmogus {
    private $estrogenai = 2111;
    public function printMotersDuomenys() {
      echo "Ugis: " . $this->ugis . "<br />" . $this->getPusryciai() . "<br />" . $this->turtas;
    }
}


//
