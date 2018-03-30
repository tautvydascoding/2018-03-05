<?php

// VYRAS.PHP


// UZDUOTIS
// sukurti klase 'Vyras', kuri paveldi abstract klase 'Zmogus'
// 1. sukurti faila 'zmogus.php' ir jo viduje klase 'Zmogus'
// 1.1. klaseje Zmogus sukurti f-jas:
// 'valgyti()' - kuri isveda 'valgau'
// abstract f-ja 'getPasiekimai()' - kuri bus nesu

// 2. sukurti faila 'vyras.php' ir jo viduje klase 'Vyras'
// 2.1. klase Vyras paveldi klase 'Zmogus'

// 4. loclahost paliesit 'vyras.php' faila (turi nebuti jokiu klaidu pranesimu)

include('zmogus.php');
class Vyras extends Zmogus {
    public function getPasiekimai() {
        echo "ismokau mokintis";
    }
}


//
