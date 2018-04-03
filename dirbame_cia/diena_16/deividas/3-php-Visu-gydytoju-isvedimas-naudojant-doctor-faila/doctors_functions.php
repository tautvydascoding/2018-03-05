<?php

// konstantos
define('DB_VARDAS', 'hospital3'); // duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root'); // cia yra mysql user'is
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

// echo DB_VARDAS; // !! konstantom nereik '$' zenklo


// Prisijungimas prie //

$connection = mysqli_connect(DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS); // jeigu PORT ne 80, irasykite y gala
//     AR true
if ( $connection ) {
  // echo "Prisijungete sekmingai <br />";
} else {
    die("ERROR: nepavyko prisijungti" . mysqli_connect_error() );
}

function getDBPrisijungimas() {
  global $connection; //duodam leidima prieiti prie global kintamojo
  /// !!!!! global eilute, negali keisti kintamojo
    return $connection;

}


// Duomenu paemimas is duomenu bazes
// $nr - id , kuri gydytoja gauname
function getDoctor ( $nr = 0 ){ // default $nr = 0
$mano_sql_tekstas = "SELECT * FROM doctors WHERE id='$nr'; ";
// ivykdom SQL
// $rezultatai - (objektas) - gydytojo duomenys is DB
$rezultatai = mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
    //  echo "Gydytoja radome <br />";
      // var_dump($rezultatai);
      $rezultatai_masyve= mysqli_fetch_assoc( $rezultatai );
      // mysqli_fetch_assoc - objekta - pavercia i masyva (asociatyvu)


      return $rezultatai_masyve;
    } else {
      echo "Gydytojas $nr nerastas!!! <br />";
    }
}
$gydytojas1 = getDoctor( 1 ); // gaunam masyva

// print_r($gydytojas1); // test

 ?>
