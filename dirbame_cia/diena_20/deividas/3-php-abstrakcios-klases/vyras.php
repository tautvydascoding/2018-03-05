<?php


//VYRAS.php

// UZDUOTIS
//Sukurti klase 'Vyras', kuri paveldi  abstract klase ' Zmogus'
//1. Sukurti faila 'zmogus.php' ir jo viduje klase 'Zmogus'
// 1.1 klaseje Zmogus sukurti f-jas:
// 'valgyti()' - kuri isveda 'valgau'
// abstract f-ja 'Lobis()'- kuri bus nesu

//2. sukurti faila 'vyras.php' ir jo viduje klase 'Vyras'
// 2.1 klase Vyras paveldi klase 'Zmogus'

// 4. Localhost paleisti 'vyras.php' faila (turi nebuti jokiu klaidu pranesimu)
include('zmogus.php');
class Vyras extends Zmogus {
  public function getPasiekimai() {
    echo "ismokau mokintis";
  }
}







 ?>
