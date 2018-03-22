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


      $tekstas = "lorem ipsum. ka darai. pamaparam.kdnfsdnas dfsd sdfsd. sdfsdfsd.dfffff.dfgdfgdfgdf.";
      $masyvas = explode( " ", $tekstas);
      echo $masyvas[0] . "<br />"  ;    // atspausdins tik pirma sakiny iki tasko.
      echo $masyvas[1] . "<br />"    ;  // atspausdins tik pirma sakiny iki tasko.
      echo $masyvas[2] . "<br />"  ;    // atspausdins tik pirma sakiny iki tasko.

    //    for ($i=0; $i < count($masyvas) ; $i++) {
    //      echo $masyvas[$i] . "<br />"  ;
    //    }

      foreach($masyvas as $stalcius){   //stalcius isgalvotas kintamasis
          echo $stalcius . "<br />";    // sutikus "}" foreach ciklas pakeis $stalcius reiksme i sekancio masyvo elemento
      }
  //    foreach ($variable as $key => $value) {
        # code...
  //    }

  $masina = ['spalva' => "geltona", 'maxGreitis' => "550", 'kuras' => "elektra"];
//      var_dump($masina); // parodo kokie duomenys yra ar tai array ar string
  //    print_r($masina); // kaip console.log rodo minimalia informacija

    //  foreach ($masina as $stalcius) { //isveda tik turiny
  //      echo $stalcius . "<br />";

  //    }

//isvesti skaiciu salia, kelinta karta spausdiname

        foreach ($masina as $key ) {
          $skaicius = 0;
          echo "$skaicius $key <br />";// <br /> uzdeda tarpus, kad is naujos eilutes butu
          $skaicius++;
        }

      $tekstas = "Tomas nemegsta kavos. Bet Tomas megsta arbata. <br />"; //isspausdina teksta
      echo $tekstas . "<br />";
      $x = str_replace('Tomas', 'Juste', $tekstas);   // pakeicia tekste varda tomas i juste
      echo $x . '<br />';


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
