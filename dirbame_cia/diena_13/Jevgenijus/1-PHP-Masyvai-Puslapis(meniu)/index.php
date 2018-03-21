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

        <h1> Mokomes </h1>

        <!-- <?php
        //tuscias masyvas
        $masyvas = [];
        //pilno masyvi kurimas
        $masyvas = ['Tomas',21,1996];
        // duomenu pakeitimas - idejimas
        $masyvas[1] = 22;

        //atspausdint masyva (objekta/teksta) - skirta programuotojams, ne vartotojams
        print_r($masyvas);
echo "<br>";

        //asociatyvus masyvas - kurimas (stalciai turi pavadinimus)
        $masina=['spalva'=>'raudona','duruSkaicius'=>4];
        //pakeisti masyvo reiksme
        $masina['spalva'] = 'juoda';

        print_r($masina);

        echo"<br>";

        $menu=['home', 'about', 'gallery', 'contact', 'blog'];
        echo "<nav>
        <ul>
        <li>".$menu[0]."</li>
        <li>".$menu[1]."</li>
        <li>".$menu[2]."</li>
        <li>".$menu[3]."</li>
        <li>".$menu[4]."</li>
        </ul>
        </nav>"
?> -->

<?php
        $nuotraukos = ['1.jpg'];
        echo "<img src='img/1.jpg' width='50%' alt=''>";





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
