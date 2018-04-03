<?php

define('DB_VARDAS', 'baigiamasis');
define('MYSQL_VARTOTOJO_VARDAS', 'root');
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS );   // jei PORT ne 80, irasykite i gala

//      AR true
if (   $connection  ) {
    echo "Prisijungete sekmingai <br>";
} else {
    die( "ERRROR: neapvyko prisijungti" .  mysqli_connect_error()  );
}

function getDBPrisiungimas() {
    global $connection; // duodam leidima prieiti pire global kintamojo
    // !!! global eilute ,negali keisti kintamojo:     $connection = 'false';
    return $connection;
}
