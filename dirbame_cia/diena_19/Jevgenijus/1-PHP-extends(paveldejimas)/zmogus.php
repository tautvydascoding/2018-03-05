<?php

class Zmogus {
  public $ugis=0;
  private $pusryciai= '' ;
  protected $turtas= 'namas';
  public function valgyti() {
    echo "valgau";
  }
}


// extends Zmogus:
// paveldimi visi kintamieji ir funkcijos,
// kurie yra public arba protected
class Vyras extends Zmogus {
  private $testosteronas = 10000;
}
class Moteris extends Zmogus {
  private $estrogenai = 2457;
}

 ?>
