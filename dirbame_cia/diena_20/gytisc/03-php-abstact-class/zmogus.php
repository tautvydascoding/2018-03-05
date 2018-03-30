<?php
// ZMOGUS.php
abstract class Zmogus {
  public $vardas = 'neatsimenu';
  public function valgyti() {
     // codas
  }
  // neprogramuota f-ja
  // getPasiekimai - privales but suprogramuota klaseje kuri paveldi klase 'Zmogus'
  abstract public function getPasiekimai();
}
