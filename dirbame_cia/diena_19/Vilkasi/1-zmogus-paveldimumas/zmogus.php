<?php


class Zmogus {
public $ugis = 150;
private $pusryciai = '';
protected $turtai = 'namas';
public function valgyti(){
  echo "valgau";
  }

}

class Vyras extends Zmogus {
  private $testosteronas = 6112;
}

class Moteris extends Zmogus {
  private $estrogenai = 2111;
}

 ?>
