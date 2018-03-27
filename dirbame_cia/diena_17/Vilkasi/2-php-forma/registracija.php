<h2>Registracija pavyko</h2>
<?php
  print_r($_GET);
  $vard = $_GET['vardas'];
  $pavd = $_GET['pavarde'];
  $tel = $_GET['tel'];
  echo "Jusu vardas: ", $vard , "Pavarde: ",$pavd, "Telefonas: ", $tel, "<br>";
 ?>
