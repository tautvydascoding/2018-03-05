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

        <h1> MOkomes </h1>



        <?php

        // ---- -PASIKARTOJIMAS PROGRAMAVIMO PAGRINDU TESTUI-----
        // 1) sukurti masyva : 1981, 1980, 1975, 1995, 1999
        // 1.1) atspausdinti masyva naudojant FOR cikla, While cikla ir FOREACH cikla
        // 1.4 Atspausdinti kas antra data
        // 1.5 Atspasudinti visas datas nuo 3-cios

        // 2) sukurti matirca:
        // Tomas, 1981, Buhalteris
        // Ona 1980 Programuotoja
        // Petras, 1975, Direktorius
        // 2.1) atspausdinti su FOR ciklu
        // 2.2) atspausdinti su FOR FOR ciklu
        // 2.3) atspausdinti su FOREACH

          $masyvas = [1981, 1980, 1975, 1995, 1999];

          // 1.1.1 FOR

          // for ($i=0; $i < sizeof($masyvas); $i++) {
          // }
          // arba
          for ($i=0; $i < count($masyvas); $i++) :
            echo "Gime: " . $masyvas[$i] . "<br />";
          endfor;

          // 1.1.2 FOREACH

          foreach ($masyvas as $stalciausPavad => $stalciausTurinys) {
            echo "Gimimo data su FOREACH $stalciausPavad: " . $stalciausTurinys . "<br />";
          }

          // 1.1.3 WHILE

          $kk = 0;
          while ($kk < count($masyvas)) {
            echo "While gimimo datos: " . $masyvas[$kk] . "<br />";
            $kk++;
            if ($kk > 10000) { // jei skai2iuoja be galo, tiesiog nutraukiu cikla
              break; // nutraukiu while cikla
            }
          }

          // 1.4 atspausdinti kas antra

          for ($i=0; $i < count($masyvas); $i=$i+2) :
            echo "Gime (parodo kas natra data): " . $masyvas[$i] . "<br />";
          endfor;

        // variantas pavyzdziui

        for ($i=0, $tt=100; $i<5; $i++, $tt=$tt+2 ) {
          echo "i:$i ir tt: $tt <br />";
        }
        // kam lygu 'i' ir kam 'tt'

          // 1.5 Atspausdinti visas datas nuo

          $kk = 3;
          while ($kk < count($masyvas)) {
            echo "While gimimo datos nuo trečios: " . $masyvas[$kk] . "<br />";
            $kk++;
            if ($kk > 100) {
              break;
            }
          }

          // arba
          for ($i=3; $i < count($masyvas); $i++) :
            echo "Gime (rodo nuo trečios datos): " . $masyvas[$i] . "<br />";
          endfor;
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
