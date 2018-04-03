<?php

define('DB_VARDAS', 'eddsphoto'); // duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root'); // mysql user'is
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS );

function getDBPrisiungimas() {
    global $connection;
    return $connection;
}

function getText($nr = 0){
$mano_sql_text = "SELECT * FROM foto_aprasymai WHERE id='$nr';";


$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_text);
if ($rezultatai) {

  $array_result = mysqli_fetch_assoc($result);
  return $array_result;
  print_r($array_result);
} else {
  }
}
$getImage1 = getText(1);
