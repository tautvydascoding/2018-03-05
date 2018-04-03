<?php

//konstantos
define('DB_VARDAS','aime1'); //duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS','root'); //cia yra mySQL useris
define('MYSQL_SLAPTAZODIS','root');
define('DB_HOST','localhost');

 DB_VARDAS; // konstantom nereikia dolerio $ zenklo


//prisijungimas prie duomenu bazes // DB
$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS, 8888);

//ar true

if ( $connection ) {
// echo "<br> <h3>Prisijungete sekmingai</h3>";
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
  // echo "Gydytoja radome <br>";
  //var_dump($rezultatai);
  //mysqli_fetch_assoc - objekta pavercia i masyva (asociatyvu)
  $array_im_rezultatai = mysqli_fetch_assoc($rezultatai);
  return $array_im_rezultatai;
  print_r($array_im_rezultatai);
} else {
  // echo "Gydytojas $nr nerastas!! <br>";
  }
}

$gydytojas1 = getDoctor(3); //gaunam masyva

// print_r($gydytojas1);// test

//---------------------------------DELETE-----------------------------//
//nr - numeris arba id kuri istrinsime
function deleteDoctor($nr) {
  $mano_sql_tekstas = " DELETE FROM doctors
                                 WHERE id='$nr'
                                 LIMIT 1
                      ";
    mysqli_query(  getDBPrisijungimas()  ,$mano_sql_tekstas);
}

deleteDoctor(5);

//---------------------------------CREATE----------------------------//


function createDoctor($vardas, $pavarde){
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$vardas);
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$pavarde);
  $mano_sql_tekstas = " INSERT INTO doctors
                        VALUES('','$vardas_apdorotas','$pavarde_apdorotas');
                      ";

mysqli_query(  getDBPrisijungimas()  ,$mano_sql_tekstas);

}

// createDoctor('Faustas','Gete');


//---------------------------------UPDATE----------------------------//

function updateDoctor($nr,$vardas,$pavarde){
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$vardas);
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$pavarde);

  $mano_sql_tekstas = " UPDATE doctors SET
                        name='$vardas_apdorotas',
                        lname= '$pavarde_apdorotas'
                        WHERE id = '$nr'
                        LIMIT 1;
                      ";

mysqli_query(  getDBPrisijungimas()  ,$mano_sql_tekstas);
}


// updateDoctor(3,'Ona','Harkauskiene');


//---------------------------------READ----------------------------//



//GET APIE//=======================================

//Duomenu paemimas is db
//$nr - id, kuri gydytoja paimam/surandame
  function getApie($nr = 0){ //default reiksme
$mano_sql_tekstas = "SELECT * FROM apie WHERE id='$nr';";
//ivykdome SQL
//global $connection;
global $connection;
//$rezultatai - objektas - gydytojo duomenys is DB
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
  // echo "Gydytoja radome <br>";
  //var_dump($rezultatai);
  //mysqli_fetch_assoc - objekta pavercia i masyva (asociatyvu)
  $array_im_rezultatai = mysqli_fetch_assoc($rezultatai);
  return $array_im_rezultatai;
  print_r($array_im_rezultatai);
} else {
  // echo "Gydytojas $nr nerastas!! <br>";
  }
}

$gydytojas1 = getApie(2); //gaunam masyva

// print_r($gydytojas1);// test


//GET LOGO//=======================================

//Duomenu paemimas is db
//$nr - id, kuri gydytoja paimam/surandame
function getLogo($nr = 0){ //default reiksme
$mano_sql_tekstas = "SELECT * FROM logo WHERE id='$nr';";
//ivykdome SQL
//global $connection;
global $connection;
//$rezultatai - objektas - gydytojo duomenys is DB
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
  // echo "Gydytoja radome <br>";
  //var_dump($rezultatai);
  //mysqli_fetch_assoc - objekta pavercia i masyva (asociatyvu)
  $array_im_rezultatai = mysqli_fetch_assoc($rezultatai);
  return $array_im_rezultatai;
  print_r($array_im_rezultatai);
} else {
  // echo "Gydytojas $nr nerastas!! <br>";
  }
}

$getLogo1 = getLogo(1); //gaunam masyva
// print_r($getLogo1);// test


//GET KONTAKTAI//=======================================

//Duomenu paemimas is db
//$nr - id, kuri gydytoja paimam/surandame
function getKontaktai($nr = 0){ //default reiksme
$mano_sql_tekstas = "SELECT * FROM kontaktai WHERE id='$nr';";
//ivykdome SQL
//global $connection;
global $connection;
//$rezultatai - objektas - gydytojo duomenys is DB
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
if ($rezultatai) {
  // echo "Gydytoja radome <br>";
  //var_dump($rezultatai);
  //mysqli_fetch_assoc - objekta pavercia i masyva (asociatyvu)
  $array_im_rezultatai = mysqli_fetch_assoc($rezultatai);
  return $array_im_rezultatai;
  print_r($array_im_rezultatai);
} else {
  // echo "Gydytojas $nr nerastas!! <br>";
  }
}

$getKontaktai1 = getKontaktai(1); //gaunam masyva
// print_r($getLogo1);// test




//CREATE UZKLAUSA//=======================================

function createUzklausa($vardas, $pavarde, $pastas,$numeris,$tema,$klausimas){
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$vardas);
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$pavarde);
  $pastas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$pastas);
  $numeris_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$numeris);
  $tema_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$tema);
  $klausimas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(),$klausimas);
  $mano_sql_tekstas = " INSERT INTO uzklausa 
                        VALUES('','$vardas','$pavarde_apdorotas',
                        '$pastas_apdorotas', '$numeris_apdorotas',
                        '$tema_apdorotas','$klausimas_apdorotas'  );
                      ";

mysqli_query(  getDBPrisijungimas()  ,$mano_sql_tekstas);

}
