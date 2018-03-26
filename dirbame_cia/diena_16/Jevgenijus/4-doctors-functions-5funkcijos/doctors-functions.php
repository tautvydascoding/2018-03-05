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
  // deleteDoctor(7);


//
function createDoctor($vardas, $pavarde) {
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $vardas); //apsauga nuo hackeriu, isveda jiems teksta, neduoda paleisti kenkejiska koda
  $mano_sql_tekstas = "INSERT INTO doctors VALUES('', '$vardas_apdorotas', '$pavarde');";
  mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
}
// createDoctor('Faustas', 'Gete');

// Update Doctor
// function updateDoctor($nr, $vardas, $pavarde) {
//     $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $vardas); //apsauga nuo hackeriu, isveda jiems teksta, neduoda paleisti kenkejiska koda
//     $mano_sql_tekstas = "UPDATE doctors SET
//     'name'='$vardas_apdorotas',
//     'lname' = $pavarde_apdorotas',
//     WHERE id='$nr'
//     LIMIT 1;";
//     mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
//   }
// updateDoctor(3, 'Ona' , 'Harkauskiene');




function getDoctors($kiekis= 999999) {
  $mano_sql_tekstas = "SELECT * FROM doctors LIMIT $kiekis"; // LIMIT 5 - Limit skaiciai rasomi ne kabutese
  // ORDER BY - surikiuoja pagal stulpeli 'name'
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
//tikrinu ar gryzo duomenys
if ($rezultatai) {
  return $rezultatai; //mysql objektas - grazina rezultata-duomenys
} else {
  return NULL;
} // jeigu negrizo nieko, jeigu nera duomenu bazeje
}
getDoctors(5); // skaicius - kiek gydyytoju paimsime

//testuojam ar veikia
$gydytojai = getDoctors(); // skaicius - kiek gydytoju paimsime
$vienas_gydytojas = mysqli_fetch_assoc($gydytojai); // mysqli_fetch_assoc paima sekanti gydytoja is mysql objekto IR sudeda jo stulpelius i masyva (array)

// tikrinu ar yra gydytojo duomenys
while ($vienas_gydytojas) {
echo "<h2>" . $vienas_gydytojas['name'] . $vienas_gydytojas['lname'] . "</h2>";

//kad to pacio gydytojo neisvestu vel ir vel, imtu kita
$vienas_gydytojas = mysqli_fetch_assoc($gydytojai); // mysqli_fetch_assoc paima sekanti gydytoja is mysql objekto IR sudeda jo stulpelius i masyva (array)
}
