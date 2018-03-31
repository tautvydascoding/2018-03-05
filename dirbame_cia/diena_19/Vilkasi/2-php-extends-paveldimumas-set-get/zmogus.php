<?php


class Zmogus {
    public $ugis = 0;
    private $pusryciai = 'blynai';
    protected $turtas = 'namas';
    public function valgyti() {
        echo "valgiau: $this->pusryciai";
    }
    public function setPusryciai($x){
      $this->pusryciai = $x;
    }
    public function getPusryciai(){
      return $this->pusryciai;
    }
}
// extends Zmogus:
// pavaldimi visi kintamieji ir f-jos,
// kurie yra 'public' arba 'protected'
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    public function setTestosteronas($y){
    $this->testosteronas = $y;
    }
    public function getTestosteronas(){
      echo " <br/> Testosterono kiekis:  $this->testosteronas";
    }

}


class Moteris  extends Zmogus {
    private $estrogenai = 2111;
    public function setEstrogenai($z){
    $this->estrogenai = $z;
    }
    public function getEstrogenai(){
      echo "<br/> Estrogenu kiekis: $this->estrogenai";
    } public function getUgis(){
      echo "<br/> Ugis: ".$this->ugis;
    }public function getTurtas(){
      echo "<br/> Turtas: ". $this->turtas;
    } public function getPusryciai(){
      getPusryciai();
      echo "<br/> Mano pusryciai: ".$this->pusryciai;
    }

}

//
