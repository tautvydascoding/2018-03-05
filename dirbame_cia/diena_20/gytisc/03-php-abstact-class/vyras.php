<?php
// VYRAS

// UZDUOTIS
// sukurti klase 'Vyras', kuri paveldi abstract klase 'Zmogus'
// su localhos paleisti 'vyras.php' faila (turi neismesti jokiu klaidu - error pranesimu)

include ('zmogus.php');

class Vyras extends Zmogus {
  public function getPasiekimai() {
    echo "ismokau mokintis";
  }
}

mail('edds.photo@gmail.com', "Registracijos patvirtinimas", 'Sėkmingai prisiregistravote', aditional_headers)
