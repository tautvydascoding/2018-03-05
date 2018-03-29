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
        <?php include("./2-php-prisijungimas-prie-db/doctors_functions.php");
        $mas=getDoctor(1);
        // print_r(getDoctor(1));
        // print_r($mas['id']);



        ?>
        <section>

          <h2>gydytojo nr: <?php echo $mas['id'] ?></h2>
          <h3>
              <h2>gydytojo nr: <?php echo "vardas: ".$mas['name'].", o pavarde: ".$mas['lname']."<br>" ?></h2>
          </h3>
        </section>

        <div class="">
          <p>
              <!-- Gydytojo vardas pavarde:<br> -->
              <?php
                $manogydytojas = getDoctor(4);
                echo "Gydytojo vardas: $manogydytojas[name]; <br> Gydytojo pavarde: $manogydytojas[lname]; <br>";
                // print_r($manogydytojas);
              ?>
          </p>
        </div>

      <!-- ========================================================================= -->
        <div class="">
            <ul>
            <?php
              for ($i=1; $i <9 ; $i++) :
                $gedgyd=getDoctor($i);
                echo "<li>Gydytojas/Gydytoja: ".$gedgyd['name'][0]."."." ".$gedgyd['lname'].";</br></li>";
              endfor;


             ?>
            </ul>
        </div>



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
