<?php

class  Zmogus {

public $ugis = 0;
private $pusryciai = '';
protected $turtas = 'namas';
public function valgyti(){
  echo "valgau";
}

}
// extends Zmogus:
// paveldima visi kintamieji ir f-jos
// kurie yra 'public arba protected'
class Vyras extends Zmogus{

private $testosteronas = 6122;

}


class Moteris extends Zmogus{
  private $estrogenai = 2111;
}








 ?>
