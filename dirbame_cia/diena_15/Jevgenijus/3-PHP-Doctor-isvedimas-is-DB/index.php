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
     include('./doctors-functions.php');

     $manoGydytojas = getDoctor(1); //array, "3" - gydytojo ID
     // print_r($manoGydytojas);
// konstantos

define('DB_VARDAS', 'hospital3'); //duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root'); // mysql user
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

// echo DB_VARDAS; // !!!!! KONTANTOMS NEREIKIA $ ZENKLO!!!!!


//Prisijungimas prie DB
$connection = mysqli_connect ( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS,
DB_VARDAS); //jeigu PORT ne 80, irasykite i gala
//ar true?
if ($connection) {
  echo "Prisijungete sekmingai </br>";
} else {
  die( "404 nepavyko prisijungti" . mysqli_connect_error() );
}
function getDBPrisijungimas() {
  global $connection; // duodam leidima prieti prie global'aus kintamojo
  // !!! global eiluteje negalima keisti kintamojo !!!
  return $connection;
}

//Duomenu paemimas is duomenu bazes
function getDoctor($nr) {   //$nr - id, kuri gydyto gauname (default reiksme)
  $mano_sql_tekstas = "SELECT * FROM doctors WHERE id='$nr';";
  // ivykdome SQL
  // $rezultatai - objektas - gydytojo duomenys is DB
$rezultatai =  mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
  echo "Gydytoja radome<br>";
  // var_dump($rezultatai); //test $rezultatai - objektas
  // mysqli_fetch_assoc - Objekta - pavercia i Masyva (asociatyvu)
  $rezultatai_masyve = mysqli_fetch_assoc($rezultatai);
  return $rezultatai_masyve;
} else {
  echo "Gydytoja nr: $nr nerastas! <br>";
}
}
$gydytojas1 = getDoctor(3); // gauna masyva
// $gydytojas1 - gydytojo masyvas

  // print_r($gydytojas1); //test





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
