<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libs/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/custom.css">

    <title>jQuesry</title>
  </head>
<body>

<h1>Miskas2</h1>

<?php
  $txt = 'Sveikas Pasauli';
  $x = 8;
  $y = 6.5;
  $z = 5 + 5;
  $h = $x + $y;
  $f = "Mama ejo"." i parduotuve";

  echo $txt;
  echo "<br>";
  echo $x;
  echo "<br>";
  echo $y;
  echo "<br>";
  echo $z;
  echo "<br>";
  echo $h;
  echo "<br>";
  echo $f;

  echo "<div class='jumbotron text-center'>Sveikas Pasauli</div>"; 

  echo "<h2 class='text-center'>Footers $h </h2>";
?>

<?php
  $vardas = 'Petras';
  $pavarde = 'Petraitis';
  $amzius = 66;
  $arVedes = false;

  echo "Sveiki, $vardas. Norejau jus pasveikinti su $amzius gimtadieniu <br>";  

  $vardas2 = $vardas;
  $vardas3 = &$vardas;

  function pakeistiVarda($naujasVardas){
    $vardas = $naujasVardas;
  }

  echo "vardas pries pakeitima $vardas <br>";
  pakeistiVarda('Kazimieras');
  echo "vardas po pakeitimo $vardas <br>";

  function pakeistiVardas2( &$senasVardas, $naujasVardas){
    $senasVardas = $naujasVardas;
  }
  echo "vardas pries pakeitima $vardas <br>";
  pakeistiVardas2($vardas, 'Kazimieras');
  echo "vardas po pakeitimo $vardas <br>";
?>







<!-- Mano JavaScript pats zemiausias (main.js) VISADA -->

<script src="libs/js/bootstrap.min.js"></script>
<script src="libs/js/jquery.min.js"></script>
<script src="js/main.js"></script>
  </body>
</html>
