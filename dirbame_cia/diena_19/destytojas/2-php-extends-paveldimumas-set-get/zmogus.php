<?php

// extends Zmogus:
// pavaldimi visi kintamieji ir f-jos,
// kurie yra 'public' arba 'protected'

class Zmogus {
    public $ugis = 0;
    private $pusryciai = 'blynai';
    protected $turtas = 'namas';

    public function valgyti() {
        echo "valgiau: $this->pusryciai";
        // printTestosteronas(); ERROR tetis nieko nezino apie vaikus
    }
    public function getPusryciai() {
        return $this->pusryciai;
    }

    public function setPusryciai($x){
        $this->pusryciai = $x;
    }
}
class Vyras  extends Zmogus {
    private $testosteronas = 6122;

    public function setTestosteronas($xx) {
        $this->testosteronas = $xx;
    }
    public function printTestosteronas() {
        echo "Testosteronas:: ".$this->testosteronas;
    }
}
class Moteris  extends Zmogus {
    private $estrogenai = 2111;

    public function printDuomenys(){
        echo "Ugis: $this->ugis  <br />";
        echo "Turtas: $this->turtas <br />";

        echo "Pusryciai::".  $this->getPusryciai();
    }
}


//
