<?php
  require_once('doctors_functions.php');
  $vard = $_GET['vardas'];
  $pavd = $_GET['pavarde'];
  createDoctor($vard, $pavd);
  echo "Užsiregistravote sėkmingai";
?>
