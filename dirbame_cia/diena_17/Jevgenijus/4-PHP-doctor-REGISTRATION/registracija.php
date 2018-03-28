<h2>Sveikiname užsiregistravus!</h2>

<?php

require_once('./doctors_functions.php');




$vard = $_GET['vardas'];
$pavard = $_GET['pavarde'];

// print_r($vard);
// print_r($pavard);

createDoctor($vard, $pavard);
echo "Jus užregistuotas!";
