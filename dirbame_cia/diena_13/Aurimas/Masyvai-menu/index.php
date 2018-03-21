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
        <!-- // uzduotis 1
        // A. susikurti meniu masyva: home, about, gallery, contact, blog
        // B. atspausdinti visus meniu punktus i HTML (su html tag'ais) -->


        <?php
          $masyvas1=[];
          $masyvas2=array("home","about","gallery","contact","blog");
          print_r($masyvas2);
          echo "<br>";

          $masyvasPav1=array("Spalva"=>"Red","duruSkaicius"=>4,"Varomiejiratai"=>"Galiniai");
          print_r($masyvasPav1);
          $masyvasPav1["Spalva"]="Juoda";
          echo "<br>";
          print_r($masyvasPav1);
          echo "<br>";
          echo "$masyvas2[0] <br>";
          echo "$masyvas2[1] <br>";
          echo "$masyvas2[2] <br>";
          echo "$masyvas2[3] <br>";
          echo "$masyvas2[4] <br>";




          echo "<ul><li>$masyvas2[0]</li><li>$masyvas2[1]</li><li>$masyvas2[2]</li><li>$masyvas2[3]</li><li>$masyvas2[4]</li></ul>";
         ?>



        <!--
        // uzduotis 2
        // A. susirasti 6 nuotraukas
        // B. susikurti nuotrauku pavadinimu masyva
        // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
        // <img src='./img/1.jpg' alt=''  /> -->
        <?php
          $pictures=[];
          $pictures[0]="<img src='images/1.jpg' alt=''/>";
          $pictures[1]="<img src='images/4.jpg' alt='' width='33.33%'/>";
          $pictures[2]="<img src='images/3.jpg' alt='' width='33.33%'/>";
          $pictures[3]="<img src='images/4.jpg' alt='' width='33.33%'/>";
          $pictures[4]="<img src='images/2.jpg' alt='' width='33.33%'/>";
          $pictures[5]="<img src='images/1.jpg' alt='' width='33.33%'/>";

          // print_r($pictures);
          $MassLength=count($pictures);
          // echo "$MassLength";
          for ($i=0; $i < $MassLength ; $i+=3) {
            $a=$i+1;
            $b=$i+2;
            echo "$pictures[$i]"."$pictures[$a]"."$pictures[$b]"."<br>";
          }

          echo "<container>"."<div class='row'>"."<div class='col-3'>"."$pictures[0]"."</div>"."<div class='col-3'>"."$pictures[1]"."</div>"."<div class='col-3'>"."$pictures[2]"."</div>"."</div>"."</container>";

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
