<h2>Sveikinu uzsiregistravus</h2>
<?php

print_r($_GET);
// $_GET['message'] = "Jus sekmingai uzsiregistravot!";
$masyvas=[];
$vard=$_GET['vardas'];
$pavard=$_GET['pavarde'];
$tel=$_GET['tel'];
$masyvas=[$vard,$pavard,$tel];
foreach ($_GET as $key => $value) {
  echo "<br>$key yra: $value;";
}
require_once("./2-php-prisijungimas-prie-db/doctors_functions.php");
// createDoctor($vard,$pavard);

 ?>
