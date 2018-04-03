 <?php
define('DB_VARDAS', 'PauliausBD'); // duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root'); // mysql user'is
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS );

function getDBPrisiungimas() {
    global $connection;

    return $connection;
}

function getTeam( $nr = 0) {
    $mano_sql_tekstas = "SELECT * FROM darbuotojai WHERE id='$nr'; ";

    $rezultatai   = mysqli_query( getDBPrisiungimas(),    $mano_sql_tekstas );
  if ( $rezultatai ) {

      // var_dump( $rezultatai );
        $rezultatai_masyve =  mysqli_fetch_assoc( $rezultatai );

       return $rezultatai_masyve;
   } else {
       echo "darbuotojas nr: $nr nerastas!!! <br>";
    }
}
$OurTeam = getTeam();





function getPrekes( $nr = 0) {
    $mano_sql_tekstas = "SELECT * FROM prekes WHERE id='$nr'; ";

    $rezultatai   = mysqli_query( getDBPrisiungimas(),    $mano_sql_tekstas );
  if ( $rezultatai ) {

      // var_dump( $rezultatai );
        $rezultatai_masyve =  mysqli_fetch_assoc( $rezultatai );

       return $rezultatai_masyve;
   } else {
       echo "preke nr: $nr nerasta!!! <br>";
    }
}
$OurTeam = getPrekes();


function getPaslaugos( $nr = 0) {
    $mano_sql_tekstas = "SELECT * FROM blog WHERE id='$nr'; ";

    $rezultatai   = mysqli_query( getDBPrisiungimas(),    $mano_sql_tekstas );
  if ( $rezultatai ) {

      // var_dump( $rezultatai );
        $rezultatai_masyve =  mysqli_fetch_assoc( $rezultatai );

       return $rezultatai_masyve;
   } else {
       echo "paslauga nr: $nr nerasta!!! <br>";
    }
}
$OurTeam = getPaslaugos();





 ?>
