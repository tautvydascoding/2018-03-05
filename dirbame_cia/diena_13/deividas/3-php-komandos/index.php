<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <!-- galimos klaidos -->
        <!-- blogas kelias iki failo -->
        <!-- "/" ne i ta puse -->
        <!-- neuzdarete ">" -->
        <link rel="stylesheet" href="css/master.css">
        <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
    </head>

    <body>

        <h1> MOkomes </h1>
<?php

$tekstas = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
$masyvas = explode(" ", $tekstas); //return array

echo $masyvas[0] . "<br />";
echo $masyvas[1] . "<br />";
echo $masyvas[2] . "<br />";

for ($i=0; $i < count($masyvas) ; $i++) {
  echo $masyvas[ $i ] . "<br />";
}
// ======================
// foreach ($masyvas as $stalcius) { //$stalcius - isgalvotas kintamasis
//   echo $stalcius . "<br />";
  //
// sutikus "}" foreach ciklas pakeis "$stalcius" reiksme i sekancio masyvo elemento
// =======================
// foreach ($masyvas as $stalciausPavadinimas => $stalciausTurinys) {
//   # code...
// }

$masina = ['spalva'=>"raudona", 'makGreitis'=>220.5, 'kuras'=>'benzinas'];
print_r( $masina);
// var_dump($masina);
$sk = 0;
foreach ($masina as $stalcius) {  //$stalcius - stalciaus turinys
  echo "$sk $stalcius <br />";
    $sk++;
}
 ?>

<?php


$tekstas = "Tomas megsta kava. Bet Tomas nemegsta arbatos.";
echo $tekstas . "<br />";
$x = str_replace('Tomas', 'Juste', $tekstas);
echo $x . "<br />";

 ?>



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
