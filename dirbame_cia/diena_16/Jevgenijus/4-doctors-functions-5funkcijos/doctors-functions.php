<?php
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
  // echo "Prisijungete sekmingai </br>";
// } else {
//   die( "404 nepavyko prisijungti" . mysqli_connect_error() );
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
  // echo "Gydytoja radome<br>";
  // var_dump($rezultatai); //test $rezultatai - objektas
  // mysqli_fetch_assoc - Objekta - pavercia i Masyva (asociatyvu)
  $rezultatai_masyve = mysqli_fetch_assoc($rezultatai);
  return $rezultatai_masyve;
} else {
  // echo "Gydytoja nr: $nr nerastas! <br>";
}
}
// DAKTARO PAEMIMAS
// $gydytojas1 = getDoctor(3); // gauna masyva
// $gydytojas1 - gydytojo masyvas

  // print_r($gydytojas1); //test


  // --------DELETE trinti-----------
// $nr - numeris arba id, kuri istrinsime
function deleteDoctor($nr) {
  $mano_sql_tekstas = "DELETE FROM doctors
                          WHERE id='$nr'
                          LIMIT 1
                          ";
mysqli_query( getDBPrisijungimas() , $mano_sql_tekstas);
}
  deleteDoctor(7);
