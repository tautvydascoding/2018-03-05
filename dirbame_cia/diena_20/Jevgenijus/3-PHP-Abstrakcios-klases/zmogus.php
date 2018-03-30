<?php

//Zmogus.php

abstract class Zmogus {
  public $vardas='neatsimenu';
  public function valgyti() {
    // kodas
  }
  // nesuprogramuota funkcija
  // 'getPasiekimai' - privales but suprogramuota, klaseje kuri
  // paveldi klase 'Zmogu'
  abstract public function getPasiekimai();
}
