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

        <?php


          $antraste = " Mokomes PHP";
          echo "<h1>  $antraste </h1>";


          $vardas = 'Tomis'; // String
          $pavarde = 'Tomson';
          $amzius = 21; // integer
          $arVedes = false; // boolean


        ?>

        <section>

            <?php

            echo "Sveiki, $vardas. Norejau jus pasveikinti su $amzius gimtadieniu <br>";
            // kitos kabutes
            echo 'Sveiki, $vardas. Norejau jus pasveikinti su $amzius gimtadieniu <br>';


            $vardas2 = $vardas;
            $vardas3 = &$vardas; //

            function pakeistiVarda( $naujasVardas ) { // $naujasVardas - naujas laikinas local
                $vardas = $naujasVardas; // $naujasVardas - naujas laikinas local
            }

            echo  " vardas pries pakeitima $vardas <br />";
            pakeistiVarda("Kazimieras");
            echo  " vardas po pakeitimo $vardas <br />";

///////////////////////////////////////////////////
 //// & kintamuju panaudojimas
            function pakeistiVarda2( &$senasVardas ) { // globalus kintamas
              $senasVardas ="Kazimieras";
            }
            echo  " vardas pries pakeitima $vardas <br />";
            pakeistiVarda2( $vardas, "Kazimieras");
            echo  " vardas po pakeitimo $vardas <br />";

             ?>

        </section>

      



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
