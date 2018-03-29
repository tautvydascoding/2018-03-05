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

        <?php $masyvas=[1981,1980,1975,1995,1999];
              echo "<b>Spausdinam su FOR ciklu:</b> <br>";
              for ($i=0; $i < count($masyvas) ; $i++) :
                echo "$i masyvo elementas yra: ".$masyvas[$i].";<br>";
              endfor;
              echo "<b>Spaudinam su FOR kas antra el.:</b> <br>";
              for ($i=0; $i < count($masyvas) ; $i+=2) :
                echo "$i masyvo elementas yra: ".$masyvas[$i].";<br>";
              endfor;
              echo "<b>Spaudinam su FOR ciklu nuo 3el.:</b> <br>";
              for ($i=2; $i < count($masyvas) ; $i++) :
                echo "$i masyvo elementas yra: ".$masyvas[$i].";<br>";
              endfor;

              echo "<b>Spaudinam su WHILE ciklu:</b> <br>";
              $a=0;
              while ($a < count($masyvas)) {
                echo "$a MASYVO elementas yra: ".$masyvas[$a].";<br>";
                $a++;
                if ($a>5000) {
                  break;
                }
              }
              echo "<b>Spaudinam su FOREACH ciklu:</b> <br>";
              foreach ($masyvas as $masnr=> $masreiks) {
                echo "$masnr MASYVO ELEMENTAS YRA: ".$masreiks.";<br>";
              }

              // ========================================================

              // 2) sukurti matirca:
              // Tomas, 1981, Buhalteris
              // Ona 1980 Programuotoja
              // Petras, 1975, Direktorius
              // 2.1) atspausdinti su FOR ciklu
              // 2.2) atspausdinti su FOR FOR ciklu
              // 2.3) atspausdinti su FOREACH

              $matrica=[['Tomas',1981,'Buhalteris'],['Ona',1980,'Programuotoja'],['Petras',1975,'Direktorius']];
              echo "<b>Matrica atspausdinam su FOR FOR ciklu:</b><br>";
              for ($i=0; $i < count($matrica) ; $i++) {
                for ($j=0; $j < count($matrica); $j++) {
                  echo "Matricos $i-os eilutes, ir $j-o stulpelio reiksme: ".$matrica[$i][$j].";<br>";
                }
              }
              echo "<b>Matrica atspausdinam su FOR ciklu:</b><br>";
              for ($i=0; $i < count($matrica); $i++) {
                echo $matrica[$i][0].";<br>";
                echo $matrica[$i][1].";<br>";
                echo $matrica[$i][2].";<br>";
              }
              echo "<b>Matrica atspausdinam su FOREACH ciklu:</b><br>";
              foreach ($matrica as $eilute => $reiksme) {
                foreach ($reiksme as $stulpelis => $val) {
                  echo "Matricos <b>$eilute</b>-os eilutes, <b>$stulpelis</b>-o stulpelio reiksme yra: $val ;<br>";
                }
              }
              echo "<b>Iteraciju reiksmes yra padidinamos tikrinant cikla, ir lieka tokios kai salyga tampa 'false':</b><br>";
              for ($i=0, $t=100; $i < 5; $i++,$t+=3) {
                echo "i: $i and t: $t<br>";
              }
              echo "<b>Po ciklo</b> i: $i and t: $t<br>";
              $a=0;
              $s=0;
              for ($i=0; $i < 3; $i++) {
                $s++;
                for ($g=0; $g < 3 ; $g+=2) {
                  $a++;
                  echo "$a dirbu<br>";
                }
              }
              echo "g: $g<br>";
              echo "i: $i<br>";
              echo "dirbu: $a<br>"; //
              echo "pasiruosiau darbui: $s<br>"; //

              foreach ($masyvas as $va) { //jeigu nutylime $var=>$va (stalciaus pavad $var), vienintelis rasomas kintamasis $va is considered stalciaus value.
                echo "-as elementas yra $va<br>";
              }



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
