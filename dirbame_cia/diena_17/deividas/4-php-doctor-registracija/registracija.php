<?php

print_r( $_GET);

require_once('./doctors_functions.php');
$vard = $_GET['vardas'];
$pavard = $_GET['pavarde'];

  
 createDoctor($vard, $pavard);
 echo "Jus uzregistruotas!";
 ?>
