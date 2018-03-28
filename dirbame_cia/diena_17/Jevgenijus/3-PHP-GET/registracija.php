<h2>Sveikiname užsiregistravus!</h2>

<?php


print_r($_GET); // Globalus


$vard = $_GET['vardas']; //atributo'name' pavadinimas
$pavard = $_GET['pavarde'];
$tel = $_GET['tel'];


echo "Jusu vardas: $vard, pavarde: $pavard , telefonas: $tel <br/>";
