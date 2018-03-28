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
        ?>

        <?php

          $matrica_zmones = [];
            $x1 = ['Tomas', 1981, 'Buhalteris'];
            $x2 = ['Ona', 1980, 'Programuotoja'];
            $x3 = ['Petras', 1975, 'Direktorius'];
            $matrica_zmones[0] = $x1;
            $matrica_zmones[1] = $x2;
            $matrica_zmones[2] = $x3;
            for ($i=0; $i < count($matrica_zmones); $i++) :
              echo "Vardas: " . $matrica_zmones[$i][0] . "<br />";
              echo "Gimimo metai: " . $matrica_zmones[$i][1] . "<br />";
              echo "Pareigos: " . $matrica_zmones[$i][2] . "<br />";
            endfor;

            // FOR FOR
            for ($i=0; $i < 3 ; $i++) {
              for ($g=0; $g < 3 ; $g++) {
                //echo "FOR FOR $i: " . $matrica_zmones[$i][$g] . "<br />";
                if ($g==0) {
                  echo "FOR FOR Vardas: " . $matrica_zmones[$i][$g] . "<br />";
                } if ($g==1) {
                  echo "FOR FOR Gimimo metai: " . $matrica_zmones[$i][$g] . "<br />";
                  } else {
                    echo "FOR FOR Pareigos: " . $matrica_zmones[$i][$g] . "<br />";
                    }
                  }
                }

                // teste
                for ($i=0; $i < 2 ; $i++) {
                  for ($g=0; $g < 5 ; $g++) {
                    echo "Labas<br />"; // kiek kartu isves Labas? 10 kartu
                  }
                }
                // kiek bus 'g' ir 'i'?
                echo "g yra: $g <br />";
                echo "i yra: " .  $i;

                for ($i=0; $i < 3 ; $i++) {
                  echo "pasiruosimas <br />";
                  for ($g=0; $g < 3 ; $g++) {
                    echo "dibu <br />";
                  }
                }

                // 1. kam lygu $i?
                // 2. kam lygu $g?
                // 3. kiek kartu atspausdins 'pasiruosimas'?
                // 4. kiek kartu atspausdins 'dirbu'?

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
