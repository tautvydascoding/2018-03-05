<?php


//Vyras.php

// Uzduotis
//Sukurti klase 'Vyras', kuri
// paveldi abstract klase 'Zmogus'

// Localhost paleisti vyras.php faila
// (neturi buti ismesta klaidu)

include ('zmogus.php');
class Vyras extends Zmogus {
  public function getPasiekimai() {
    echo "ismokau mokintis";
  }
}
