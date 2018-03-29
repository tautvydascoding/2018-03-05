<?php
// konstantos
define('DB_VARDAS', 'hospital3'); // duomenu bazes bardas
define('MYSQL_VARTOTOJO_VARDAS', 'root'); //cia yra MySQL user
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');
// echo DB_VARDAS; //konstantom nereikia $
// echo MYSQL_VARTOTOJO_VARDAS;
// echo MYSQL_SLAPTAZODIS;
// echo DB_HOST;

$connection=mysqli_connect(DB_HOST,MYSQL_VARTOTOJO_VARDAS,MYSQL_SLAPTAZODIS,DB_VARDAS);
//if tikrina ar true
if ($connection) {
  echo "Prisijungete sekmingai<br>";
}else {
  die("ERROR: Jums nepavyko prisijungti prie DB". mysqli_connect_error());
}

function getDBPrisijungimas(){
  global $connection; //padaro, jog matytu reiksme in globla scale, cuz unlike in js, in php, FUNCTIONS cant see global variables.
  //global eiluteje negalima keisti reiksmes, you cant use "=";
  return $connection;
}

//duomenu paemimas is DB
//nr -id,kuri gydytoja paiimam is duomenu bazes
function getDoctor($nr){
  $mano_sql_tekstas="SELECT * FROM doctors WHERE id=$nr";
  //ivykdome SQL
  // global $connection;
  // $rezultatai - visi grize duomenys, siuo atveju, grizo doctors lenteles pirma eilute.
  $rezultatai=mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas); //rezultatas objektas
  if ($rezultatai) {
    echo "Radome duomenis<br>";
    // var_dump($rezultatai);
    $rezultatai=mysqli_fetch_assoc($rezultatai); //pavercia objekta perskaitomu masyvu
    // print_r($rezultatai);
    return $rezultatai;
    mys
  }else {
    echo "Neradome duomenu $nr gydytojo<br>";
  }
}
// $gydytojas1=getDoctor(1); //gaunam masyva;
