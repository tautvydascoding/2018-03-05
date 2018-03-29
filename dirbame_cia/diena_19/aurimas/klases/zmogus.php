<?php
class  Zmogus {
  public $ugis=0;
  private $pusryciai='';
  protected $turtai="Pilis";
  public function valgyt(){
    echo "valgom";
  }
}

class Vyras extends Zmogus {
  private $testosteronas=6122;

};
class Moteris extends Zmogus {
  private $estrogenas=5554;
};


 ?>
