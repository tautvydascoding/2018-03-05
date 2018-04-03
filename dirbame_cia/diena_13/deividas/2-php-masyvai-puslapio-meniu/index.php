
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
          // tuscio masyvo kurimas
          $masyvas = [];
          $masyvas = ['Tomas', 21, 1996];

          // duomenu pakeitimas - idejimas
          $masyvas[1] = 22;

          print_r( $masyvas );
          echo "<br>";


//assoc masyvas - stalciai turi pavadinimus
$masina = ['spalva' => 'raudona',
            'duruSkaicius' => 4
          ];

print_r( $masina );
$masina ['spalva'] = 'juoda';
print_r( $masina );


// uzduotis 1
// A. susikurti meniu masyva: home, about, gallery, contact, blog
// B. atspausdinti visus meniu punktus i HTML (su html tag'ais)
$menu = ['home', 'about', 'gallery', 'contact', 'blog'];
  echo " <nav>
  <ul>
    <li>" . $menu[0] . " </li>
    <li>" . $menu[1] . " </li>
    <li>" . $menu[2] . " </li>
    <li>" . $menu[3] . " </li>
    <li>" . $menu[4] . " </li>
  </ul>
</nav> ";
  ?>

  <!-- // arba ============ -->
  <nav>
    <ul>
      <li> <?php echo $menu[0]  ?> </li>
      <li> <?php echo $menu[1]  ?> </li>
    </ul>
  </nav>

<!-- // uzduotis 2
// A. susirasti 6 nuotraukas
// B. susikurti nuotrauku pavadinimu masyva
// C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
// <img src='./img/1.jpg' alt=''  /> -->


<?php
$nuotraukos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
echo "<img src='./img/1.jpg' width='30%' alt=''  />
      <img src='./img/2.jpg' width='30%' alt=''  />
      <img src='./img/3.jpg' width='30%' alt=''  />

      <img src='./img/4.jpg' width='30%' alt=''  />
      <img src='./img/5.jpg' width='30%' alt=''  />
      <img src='./img/6.jpg' width='30%' alt=''  />"

 ?>



<!-- <?php

 //  $nuotraukos = ['1.jpg'];
 //  echo ' <img src="./img/1.jpg'. $nuotraukos[0] .' "width="33%" alt="" /> ';
 // ?> -->
<!-- BEST answer  -->
<img src="img/<?php echo $nuotraukos[0]  ?>"  width="33%" alt="" />
<img src="img/<?php echo $nuotraukos[1]  ?>"  width="33%" alt="" />
<img src="img/<?php echo $nuotraukos[2]  ?>"  width="33%" alt="" />


        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
