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

function getImages($nr = 0){
$mano_sql_image = "SELECT * FROM images WHERE id='$nr';";


$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_image);
if ($rezultatai) {

  $array_result = mysqli_fetch_assoc($result);
  return $array_result;
  print_r($array_result);
} else {
  }
}
$getImage1 = getImages(1);
