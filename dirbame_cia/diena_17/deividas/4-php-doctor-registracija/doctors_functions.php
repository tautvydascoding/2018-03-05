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
// $gydytojas1 = getDoctor( 1 ); // gaunam masyva

// print_r($gydytojas1); // test

//=================== DELET trinti==============//
// $nr - numeris arba id, gydytojo, kuri istrinsime
function deleteDoctor($nr) {
  $mano_sql_tekstas = "DELETE  FROM doctors WHERE id='$nr' LIMIT 1 ";
mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
}
deleteDoctor(8);


//

function createDoctor($vardas, $pavarde) {
$vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas() ,$vardas);
$pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas() ,$pavarde);
$mano_sql_tekstas = "INSERT INTO doctors VALUES('', '$vardas_apdorotas', '$pavarde_apdorotas'); ";

 $arpavyko = mysqli_query(getDBPrisijungimas(),$mano_sql_tekstas);
 if (!$arpavyko) {
   // '(!)' JEIGU skliaustuose FALSE?
   echo "ERROR: nepavyko uzregistruoti gydytojo." .mysqli_error(getDBPrisijungimas());
 } else {
   // echo "pavyko sukurti";
  }
 }
// kuriaaaa daktarus
 // createDoctor('Faustas', 'Gete');


function updateDoctor($nr, $vardas, $pavarde) {
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas() ,$vardas);
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas() ,$pavarde);
  $mano_sql_tekstas = "UPDATE doctors
                      SET
                      name='$vardas_apdorotas' ,
                      lname='$pavarde_apdorotas'
                      WHERE id = '$nr'
                      LIMIT 1;
                      ";

   $arpavyko = mysqli_query(getDBPrisijungimas(),$mano_sql_tekstas);
   if (!$arpavyko) {
     // '(!)' JEIGU skliaustuose FALSE?
     echo "ERROR: nepavyko uzregistruoti gydytojo." .mysqli_error(getDBPrisijungimas());
   } else {
     // echo "pavyko sukurti";
    }
   }

// updateDoctor(3, 'Ona','Harkauskiene');

//////////////////////////
function getDoctors($kiekis = 99999) {
  $mano_sql_tekstas = "SELECT * FROM doctors
                                ORDER BY name DESC
                                LIMIT $kiekis
                                ";
    // LIMIT 5 - limit skaiciai rasomi ne kabutese
    // ORDER BY surikiuoja duomenis pagal stulpeli 'name'
    // $rezultatai - mysql objektas
    $rezultatai = mysqli_query(getDBPrisijungimas(),$mano_sql_tekstas);
    // tikrinu ar gryzo duomenu
    if ($rezultatai) {

      return $rezultatai; // mysql objektas
    } else {

      return NULL;
    }
}

// testuojam ar veikia
// $gydytojai= getDoctors(99999); // skaicius - kiek gydytoju paimsime
// $vienas_gydytojas = mysqli_fetch_assoc($gydytojai); // mysqli_fetch_assoc - paima sekanti gydytoja is mysql obejkto IR sudeda
// // jo stulpelius y masyva (ARRAY)
//
// // tikrinu ar turiu gydytojo duomenis
// while ($vienas_gydytojas) {
// echo "<h2>" . $vienas_gydytojas['name'] .  $vienas_gydytojas['lname'] . "</h2>";
//
// // kad to pacio gydytojo neisvestu vel ir vel imam sekanti
// $vienas_gydytojas = mysqli_fetch_assoc($gydytojai);// mysqli_fetch_assoc - paima sekanti gydytoja is mysql obejkto IR sudeda
// // jo stulpelius y masyva (ARRAY)
//
// }
 ?>
