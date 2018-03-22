<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Matricos</title>
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
              //sukurti matrica, kurioje bus saugoma kiekvienos prekes info
              // sukurti masyva preke:Antraste, img pav, prekes aprasymas, kaina)
              // i masyva visosPrekes ideti "preke" masyva
              // atvaizduoti kiekvienoje eilute po 3prekes(naudojant for ar foreach)
              $jonas = ['jonas', 'jonukas', 14];
              $kestas = ['kestas', 'kestukas', 33];
              $tomas = ['tomas', 'tomukas', 19];
              //kuriam matrica

              $matrica[0] = $jonas;
              $matrica[1] = $kestas;
              $matrica[2] = $jonas;
              //pakeisti Kestas i Laimonas
              //pakeisti Tomo amziu i 55
              //pakeisti Jono pavarde i Valinskas

              $matrica[2][1] = "Laimonas";
              $matrica[3][3] =  55;
              $matrica[1][2] =  "Valinskas";
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
