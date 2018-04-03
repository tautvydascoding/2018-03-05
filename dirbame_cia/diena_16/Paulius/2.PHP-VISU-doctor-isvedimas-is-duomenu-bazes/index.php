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
                for ($i=1; $i<4; $i++):       // : vietoj {
                  $manoGydytojas = getDoctor($i);
                echo  '<li>'
                      . $manoGydytojas ['name'] . " " . $manoGydytojas ['1name']
                    . '</li>';
                endfor; // uzsidaro FOR ciklas
               ?>
             </ul>
             <!-- SUKURE SU FOR CIKLU UZDETI APSAUGAS, KAD JEIGU ISTRYNUS VIENA daktara
             TAI ISTRYNTU IR JOSEKCIJA LOCALHOST , su ==IF== -->



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
