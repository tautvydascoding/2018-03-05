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

        <!-- // uzduotis2: atspausdinti daktara i <p> </p>, kurio id yra 7
        // uzduotis3: visus daktarus "ul li" , kaip list item
        // uzduotis4: patobulinti uzduotis3,
            kad paspaudus ant daktaro vardo/pavardes   atidarytu doctor.php faila
        // uzduotis5: patobulinti uzduotis4,
            kad   doctor.php faile isvestu info apie - paspausta gydytoja
            HINT: a linke, prideti ?kintamasis=...   ir docotr.php su $_GET pasiimti kintamaji -->

            <?php

             require_once('./doctors_functions.php');

             ?>

        <p>

          Gydytojo vardas pavarde:

          <?php
          $manoGydytojas = getDoctor(4); ///grizo masyvas -- array
          echo $manoGydytojas['name']." ".$manoGydytojas['lname'];
          ?>
  </p>

        <h3> Uzduotis 3 </h3>

        <ul>
            <li>
                  <?php
                  $manoGydytojas = getDoctor(1); ///grizo masyvas -- array
                  echo $manoGydytojas['name']." ".$manoGydytojas['lname'];
                  ?>
            </li>
            <li>
                  <?php
                  $manoGydytojas = getDoctor(2); ///grizo masyvas -- array
                  echo $manoGydytojas['name']." ".$manoGydytojas['lname'];
                  ?>
            </li>
            <li>
                  <?php
                  $manoGydytojas = getDoctor(3); ///grizo masyvas -- array
                  echo $manoGydytojas['name']." ".$manoGydytojas['lname'];
                  ?>
            </li>
            <li>
                  <?php
                  $manoGydytojas = getDoctor(4); ///grizo masyvas -- array
                  echo $manoGydytojas['name']." ".$manoGydytojas['lname'];
                  ?>
            </li>
        </ul>

        <!--====================================================-->

        <h3>Su for Ciklu</h3>

      <ul>
        <?php for ($i=1; $i < 6 ; $i++):
          $manoGydytojas = getDoctor($i);
          echo "<li>
             $manoGydytojas[name] $manoGydytojas[lname]
          </li>";
        endfor;
          ?>
      </ul>




        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
