<?php

//konstantos
define('DB_VARDAS','hospital3'); //duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS','root'); //cia yra mySQL useris
define('MYSQL_SLAPTAZODIS','root');
define('DB_HOST','localhost');

echo DB_VARDAS; // konstantom nereikia dolerio $ zenklo


//prisijungimas prie duomenu bazes // DB
$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS, 8888);

//ar true

if ( $connection ) {
echo "<br> <h3>Prisijungete sekmingai</h3>";
} else {
  die("ERROR: Nepavyko prisijungti" . mysqli_connect_error() );
}

function getDBPrisijungimas(){
  global $connection; // duodam leidima prieiti prie globalaus kintamojo
  // !!! global eiluteje negalima keisti kintamojo $connection = 'false'
  return $connection;
}

//Duomenu paemimas is db
//$nr - id, kuri gydytoja paimam/surandame
function getDoctor($nr = 0){ //default reiksme
$mano_sql_tekstas = "SELECT * FROM doctors WHERE id='$nr';";
//ivykdome SQL
//global $connection;
global $connection;
//$rezultatai - objektas - gydytojo duomenys is DB
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
  echo "Gydytoja radome <br>";
  //var_dump($rezultatai);
  //mysqli_fetch_assoc - objekta pavercia i masyva (asociatyvu)
  $array_im_rezultatai = mysqli_fetch_assoc($rezultatai);
  return $array_im_rezultatai;
  print_r($array_im_rezultatai);
} else {
  echo "Gydytojas $nr nerastas!! <br>";
  }
}

$gydytojas1 = getDoctor(3); //gaunam masyva

// print_r($gydytojas1);// test
