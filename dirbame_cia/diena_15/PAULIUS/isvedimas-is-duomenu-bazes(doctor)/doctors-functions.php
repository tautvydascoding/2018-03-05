<?php

                   //konstantos

define('DB_VARDAS', 'hospital10'); //duomenu bazes vardas
define('MYSQL_VARTOTOJO_VARDAS', 'root');   //my SQL useris
define('MYSQL_SLAPTAZODIS', 'root');
define('DB_HOST', 'localhost');

                 // echo DB_VARDAS; // KONSTANTOM nereik $ zenklo

                 //PRISIJUNGIMAS PRIE DUOMENU BAZES
$connection = mysqli_connect( DB_HOST, MYSQL_VARTOTOJO_VARDAS, MYSQL_SLAPTAZODIS, DB_VARDAS, 80); // jeigu port(80) nera 80 irasykite i gala

                 // ar true
if ( $connection ) {
//  echo "Prisijungete sekmingai <br />";
  }
    else {
          die("ERROR:NEPAVYKO PRISIJUNGTI" . mysqli_connect_error() );
    }

  function getDBPrisijungimas(){
    global $connection; // prieinam prie globalaus kintamojo
    return $connection;
  }

                  // duomenu paemimas is duomenu BAZES
                 // $nr - id, kuri gydytoja gauname
function getDoctor($nr){
  $mano_sql_tekstas = "SELECT * FROM doctors WHERE id='$nr'; ";

                 // ivykdome SQL  // query = uzklausa
global $connection;
$rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas); //$rezultatai array visi gryze duomenys
 if ($rezultatai) {
  //  echo "Gydytoja radome<br />";
    $rezultatai_masyve = mysqli_fetch_assoc($rezultatai);
    return $rezultatai_masyve;
  } else {
   echo "Gydytojas $nr nerastas!!! <br />";
 }
}

$gydytojas1 = getDoctor(2); // gaunam masyva


// print_r($gydytojas1);    //test


// ----------------------DELETE function ------------------------ //
    function deleteDoctor($nr){   //nr-numeris kelinta daktara istrinsime
      $mano_sql_tekstas = "DELETE FROM doctors WHERE id='5' LIMIT 1; ";
      mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
    }

      deleteDoctor(5);

      // DELETE FROM doctors WHERE id='5' LIMIT 1; TERMINALE IRASIUS KOMANDA ISTRINS PASIRINKTA daktara
      // LIMIT 1 - UZDEJOM DEL APSAUGOS, KAD TIK VIENA ISTRINTU

// ------------------------CREATE DOCTOR FUNCTION ----------------------------------->

function createDoctor($vardas, $pavarde){
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $vardas); //apsauga nuo hakeriu
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $pavarde); //apsauga nuo hakeriu
  $mano_sql_tekstas = "INSERT INTO doctors VALUES('', '$vardas_apdorotas', '$pavarde_apdorotas');"; //i TERMINALE
  mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
  $arPavyko = mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
  if (!$arPavyko){
    echo "ERROR:nepavyko uzregistruoti gydytojo." . mysqli_error(getDBPrisijungimas() );
  }
  else{
    echo "pavyko sukurti";
  }
}
 // createDoctor ('Faustas','Gete'); // Kiekviena karta perkraunant psl sukurs pernaujo, todel reik uzkomentuoti, kai tau neabereikes


// --------------------------UPDATE DOCTOR FUNCTION--------------------- //

    function updateDoctor($nr, $vardas, $pavarde)
    {
      $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $vardas); //apsauga nuo hakeriu
      $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $pavarde); //apsauga nuo hakeriu
      $mano_sql_tekstas = "UPDATE doctors
                           SET

                           name='$vardas_apdorotas',
                           1name='$pavarde_apdorotas',
                           WHERE id='$nr'
                           LIMIT 1;
                           ";
      mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
      $arPavyko = mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
      if (!$arPavyko){
        echo "ERROR:nepavyko uzregistruoti gydytojo." . mysqli_error(getDBPrisijungimas() );
      }
      else{
        echo "pavyko sukurti";
      }
    }
   updateDoctor(3, 'Ona', 'JauNebeOnute');


   // ===================================

    function getDoctors($kiekis = 99999){
      $mano_sql_tekstas = "SELECT * FROM doctors

                                    ORDER BY name DESC
                                    LIMIT $kiekis
                                    ";
  // $rezultatai - mysql objektas
      $rezultatai = mysqli_query(getDBPrisijungimas(), $mano_sql_tekstas);
      if ($rezultatai) {
        return  NULL; //graziname mysql obejkta
      }
    }

   $gydytojai = getDoctors(5);    //skaicius kiek gydytoju paimsime
   $vienas_gydytojas = mysqli_fetch_asoc($gydytojai);
   while($vienas_gydytojas){
     echo "<h2>" . $vienas_gydytojas['name'] . $vienas_gydytojas['1name'] . "</h2>";

   }


 ?>
