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
          //tuscio masyvo kurimas
          $masyvas = [];
          //pilno masyvo kurimas
          $masyvas = ['Tomas', 21, 1996];
          //duomenu pakeitimas-idejimas
          $masyvas[1] = 22;

          print_r( $masyvas );

          //assoc masyvas - stalciai turi pavadinimus
          $masina = ['spalva' => 'raudona',
           'duruSkaicius' => 4
         ];
         $masina['spalva'] = "juoda";
         print_r( $masina);
?>





  <?php
            //sukurem home,about,contact

$menu = ['home', 'about', 'contact'];
  echo "<nav> <ul>
                   <li> $menu[0] </li>
                   <li> $menu[1] </li>
                   <li> $menu[2] </li>
             </ul>
      </nav>";
  ?>

  <?php
  // uzduotis 2
  // A. susirasti 6 nuotraukas
  // B. susikurti nuotrauku pavadinimu masyva
  // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute


        $foto = ['3 copy.jpg', 'concert copy.jpg', '4 copy.jpg', 'header copy.jpg', 'hhh+ copy.jpg', 'pencil_sharpener copy.jpg'];
    echo     '<img src="foto/'. $foto[0] .' " width="33%" alt=""> ';
    echo     '<img src="foto/'. $foto[1] .' " width="33%" alt=""> ';
    echo     '<img src="foto/'. $foto[2] .' " width="33%" alt=""> ';
    echo     '<img src="foto/'. $foto[3] .' " width="33%" alt=""> ';
    echo     '<img src="foto/'. $foto[4] .' " width="33%" alt=""> ';
    echo     '<img src="foto/'. $foto[5] .' " width="33%" alt=""> ';



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
