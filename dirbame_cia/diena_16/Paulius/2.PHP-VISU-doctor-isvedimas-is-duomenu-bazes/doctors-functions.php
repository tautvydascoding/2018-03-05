<?php

//konstantos

define('DB_VARDAS', 'hospital10'); //duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root');   //my SQL useris
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

// echo DB_VARDAS; // KONSTANTOM nereik $ zenklo

//PRISIJUNGIMAS PRIE DUOMENU BAZES
$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS, 80); // jeigu port(80) nera 80 irasykite i gala

// ar true
if ( $connection ) {
  echo "Prisijungete sekmingai <br />";
  }
    else {
          die("ERROR:NEPAVYKO PRISIJUNGTI" . mysqli_connect_error() );
    }

  function getDBPrisijungimas(){
    global $connection; // prieinam prie globalaus kintamojo
    return $connection;
  }

// duomenu paemimas is duomenu BAZES
// $nr - id, kuri gydytoja gauname
function getDoctor($nr){
  $mano_sql_tekstas = "SELECT * FROM doctors WHERE id='$nr'; ";

// ivykdome SQL  // query = uzklausa
global $connection;
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas); //$rezultatai array visi gryze duomenys
  if ($rezultatai) {
    echo "Gydytoja radome<br />";
     $rezultatai_masyve = mysqli_fetch_assoc($rezultatai);
     return $rezultatai_masyve;
  } else {
    echo "Gydytojas $nr nerastas!!! <br />";
  }
}

$gydytojas1 = getDoctor(2); // gaunam masyva


// print_r($gydytojas1);    //test 




 ?>
