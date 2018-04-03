<?php

class  Zmogus {

public $ugis = 0;
private $pusryciai = '';
protected $turtas = 'namas';

public function valgyti(){
  echo "valgiau: $this->pusryciai";
  // printTestosteronas ERROR tetis nieko nezino apie vaikus
    }

public function setPusryciai($x){
  $this->pusryciai = $x;
    }




}



// extends Zmogus:
// paveldima visi kintamieji ir f-jos
// kurie yra 'public arba protected'
class Vyras extends Zmogus{
private $testosteronas = 6122;

public function setTestosteronas($xx){
$this->testosteronas = $xx;
  }
public function printTestosteronas() {
  echo " Testosteronas:: ".$this->testosteronas;
  }
}








class Moteris extends Zmogus {
  private $estrogenai = 2111;
// ======================================
public function Ugis(){
  echo "ugis: $this->ugis";
    }
// ========================================
public function Turtas(){
  echo "turtras: $this->turtas";
    }
// =======================================
public function setValgau($xxx){
  $this->pusryciai = $xxx;
    }

public function Valgau(){
  echo "valgiau pusryciams: $this->pusryciai";
    }
//===========================================
}







 ?>
