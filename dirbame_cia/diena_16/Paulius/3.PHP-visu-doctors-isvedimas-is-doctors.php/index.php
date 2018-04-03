<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <!-- galimos klaidos -->
        <!-- blogas kelias iki failo -->
        <!-- "/" ne i ta puse -->
        <!-- neuzdarete ">" -->
        <link rel="stylesheet" href="css/master.css">
        <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
    </head>

    <body>
      <?php require_once('./doctors-functions.php'); ?>

<!-- uzduotis2: atspausdinti daktara i <p> </p>, kurio id yra 4 -->
        <p>Gydytojo vardas pavarde:
            <?php
                $manoGydytojas = getDoctor(4); // gryzo array
                  print_r ($manoGydytojas);
                  echo $manoGydytojas ['name'] . " " . $manoGydytojas ['1name'];
                          // . " " .  tarpas tarp vardo ir pavardes

              ?>
        </p>

<!--uzduotis3: visus daktarus "ul li" , kaip list item  -->
           <h3>Uzduotis 3</h3>

              <ul>
                <li>
                  <?php
            $manoGydytojas = getDoctor(2);
            echo $manoGydytojas ['name'] . " " . $manoGydytojas ['1name'];
                  ?>
                </li>



                <li>
                  <?php
            $manoGydytojas = getDoctor(3);
            echo $manoGydytojas ['name'] . " " . $manoGydytojas ['1name'];
                  ?>
                </li>



                <li>
                  <?php
            $manoGydytojas = getDoctor(4);
            echo $manoGydytojas ['name'] . " " . $manoGydytojas ['1name'];
                  ?>
                </li>
              </ul>

            <!-- ARBA SU FOR CIKLU-->
            <h3>SU FOR CIKLU</h3>
            <ul>
              <?php
                for ($i=2; $i<6; $i++):
                  include('./doctor.php');

                endfor; // uzsidaro FOR ciklas
               ?>
              </ul>
                        <!--creat doctor-->
        <?php       function createDoctor($vardas, $pavarde){
                $mano_sql_tekstas = "INSERT INTO doctors VALUES('', '$vardas', '$pavarde');"; //i TERMINALE
                mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
                $arPavyko = mysqli_query( getDBPrisijungimas(), $mano_sql_tekstas);
                if (!$arPavyko){
                  echo "ERROR:nepavyko uzregistruoti gydytojo." . mysqli_error(getDBPrisijungimas() );
                }
                else{
                  echo "pavyko sukurti";
                }
              }
            //  createDoctor ('Faustas','Gete');
// UPDATE doctors
function updateDoctor($nr, $vardas, $pavarde)
{
  $vardas_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $vardas); //apsauga nuo hakeriu
  $pavarde_apdorotas = mysqli_real_escape_string (getDBPrisijungimas(), $pavarde); //apsauga nuo hakeriu
  $mano_sql_tekstas = "UPDATE doctors SET
                       (name=$vardas_apdorotas,
                       1name=$pavarde_apdorotas,
                       WHERE id=$nr
                       LIMIT 1 ;)
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


//
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



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
