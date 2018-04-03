<h2>Sveikinu uzsiregistravus</h2>

<?php

print_r( $_GET ); // Globalus

  $vard = $_GET['vardas']; //<input type="text" name="vardas"
  $pavard = $_GET['pavarde'];
  $telef = $_GET['tel']; //        <input type="number" name="tel"
  echo "Jusu vardas: $vard, Pavarde: $pavard , telefonas: $telef  <br /> ";


 ?>
