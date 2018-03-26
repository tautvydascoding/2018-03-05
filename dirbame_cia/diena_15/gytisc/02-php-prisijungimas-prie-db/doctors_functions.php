<?php
  // konstantos
  define('DB_VARDAS', 'hospital3'); // duomenu bazes vardas
  define('MYSQL_VARTOTOJO_VARDAS', 'root'); // mysql user is
  define('MYSQL_SLAPTAZODIS', 'root');
  define('DB_HOST', 'localhost');

  echo DB_VARDAS; // !! константом нереикиа '$' zenklo

//prisijungimas prie DB

$connection = mysqli_connect(DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS); // jei port ne 80, irasyti porto numeri. Siuo atveju 81

// ar true
if ($connection) {
  echo "Prisijungete sekmingai <br>";
} else {
  die( "ERROR: nepavyko prisijungti" . mysqli_connect_error() );
}

function getDBPrisijungimas() {
  global $connection; // duodame leidima prieiti prie globalaus kintamojo
  // global eiluteje negalima keisti kintamojo, t.y. negalima naudoti =
  return $connection;
}

//duomenu paemimas is duomenu bazes
// $nr - id, kuri gydytoja graziname/paimame
function getDoctor($nr = 0) {
$mano_sql_tekstas = "select * from doctors where id='$nr';";
  // ivykdom SQL komanda
  global $connection;
  // kintamasis - array visi gryze duomenyss
  $rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
  if ($rezultatai) {
    echo "Gydytoja radome <br />";
    // pasitestavimui - var_dump($rezultatai);
    $rezultatai_in_array = mysqli_fetch_assoc($rezultatai);
    return $rezultatai_masyve;
  } else {
    echo "Gydytojas nr: $nr nerastas!!! <br />";
  }
}
$gydytojas1 = getDoctor(1); // gauname masyva su gydytojo duomenimis

print_r($rezultatai_in_array);
?>
