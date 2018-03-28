<h2>Sveikinu Užsiregistravus</h2>
<?php
  print_r($_GET); // globalus
  $vard = $_GET['vardas']; // atributo 'name="vardas" reiksme'
  $pavd = $_GET['pavarde'];
  $telef = $_GET['tel']; // input type="number" name="tel"
  echo "Jūsų vardas: $vard <br /> Pavardė: $pavd <br /> Telefonas: $telef <br />";
?>
