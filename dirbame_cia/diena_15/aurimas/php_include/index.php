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



      <?php
        include("./2-php-prisijungimas-prie-db/doctors_functions.php");
        include("./straipsnis.php");
        echo "<div class='container'><main class='row'><article class='col-4'>";
            echo "<h2>".$masyvas[0]."</h2>";
            echo "<p>".$masyvas[1]."</p>";
            echo "<div>".$masyvas[2]."</div>";
            echo "<div>".$vardas.",".$pavarde."</div>";
        echo "</article></main></div>";



        ?>
        <div class="container">
            <main class="row">
              <article class="col-md-4">
                  <?php

                        echo "<h2>",$masyvas[0],"</h2>";
                        echo "<p>",$masyvas[1],"</p>";
                        echo "<div>",$masyvas[2],"</div>";
                        print_r($masyvas);

                   ?>
              </article>
            </main>
        </div>



    <body>

        <h1> MOkomes </h1>
        <!-- // UZDUOTIS
        // 1. suskurti faila:  straipsnis.php
        // 1.1 straipsnis.php afile sukurti 2 kintamuosius ir masyva(antraste, aprasymas, data):
        // $vardas, $pavarde
        // masyvas:  'BMW vel preleke saligatviu',   'Lorem lorem....', '2010-12-01'
        // 2. index.php faile  ideti:
        // include( './straipsnis.php');
        // 2.1 index.php faile sukurti   'container' 'main' 'article'
        // 2.2 sukurti <div> ir jo viduje isvesti su echo $vardas, $pavarde
        // 2.3 'article' videje sukurti:
        // 2.3.1    sukurti 'h2' ir jo viduje isvesti masyve esancia  (antraste)
        // 2.3.2    sukurti 'paragrafa' ir jo viduje isvesti masyve esancia    (aprasymas)
        // 2.3.3    sukurti '<div>' ir jo viduje isvesti masyve esancia  (data)
        // 2.3.4     sukurti '<div>' ir jo viduje isvesti masyve esancia  (data)
 -->



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
