<?php

define('DB_VARDAS', 'baigiamasis');
define('MYSQL_VARTOTOJO_VARDAS', 'root');
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

// Prisijungimas prie DB
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

function getContact( $nr = 0) { // default $nr = 0, jeigu nr nepaduotas
    $mano_sql_tekstas = "SELECT * FROM contacts WHERE id='$nr'; ";
    // ivykdome SQL
    // $rezultatai - (objektas) - gydytojo duomenys is DB
    $rezultatai   = mysqli_query( getDBPrisiungimas(),    $mano_sql_tekstas );
    if ( $rezultatai ) {
        // echo "Gygytoja radome<br>";
        // var_dump( $rezultatai );  // test  $rezultatai - objektas
        // mysqli_fetch_assoc - Objekta - pavercia i Masyva (asociatyvu)
        $rezultatai_masyve =  mysqli_fetch_assoc( $rezultatai );

        return $rezultatai_masyve;
    } else {
        echo "Kontaktas nerastas!!! <br>";
    }
}
$gydytojas1 = getContact( 37 ); // gaunam masyva

function createContact($name, $lastname, $email, $phone){
    $name_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $name );
    $lastname_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $lastname );
	$phone_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $phone );
	$email_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $email );

    $mano_sql_tekstas = "INSERT INTO contacts
                                VALUES('', '$name_apdorotas', '$lastname_apdorotas', '$phone_apdorotas', '$email_apdorotas');
                        ";
    $arPavyko = mysqli_query(   getDBPrisiungimas() , $mano_sql_tekstas);

    if ( !$arPavyko ) {
         // '(! )' JEIGU skliaustuose FALSE?
         echo "EROROR: nepavyko uzregistruoti gydytojo." . mysqli_error( getDBPrisiungimas() );
    } else {
//         echo "pavyko sukurti";
    }
}

function createContact2($name, $pet, $phone){
    $name_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $name );
    $pet_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $pet );
	$phone_apdorotas =  mysqli_real_escape_string (getDBPrisiungimas(), $phone );

    $mano_sql_tekstas = "INSERT INTO lotery
                                VALUES('', '$name_apdorotas', '$pet_apdorotas', '$phone_apdorotas');
                        ";
    $arPavyko = mysqli_query(   getDBPrisiungimas() , $mano_sql_tekstas);

    if ( !$arPavyko ) {
         // '(! )' JEIGU skliaustuose FALSE?
         echo "EROROR: nepavyko uzregistruoti" . mysqli_error( getDBPrisiungimas() );
    } else {
//         echo "pavyko sukurti";
    }
}


