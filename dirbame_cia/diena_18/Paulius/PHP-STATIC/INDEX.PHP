<?php
    function sumuoti(){
        static $x = 0; // SITA EILUTE SUVEIKS TIK VIENA KARTA
        echo "x yra: $x <br /> <br />";
        $x += 2; //$x = $x +2
    }
    sumuoti();
    sumuoti();
    sumuoti();
    sumuoti();

    //MOKOMES REKURSIJA -
    function rekursija(){
    static $z = 0;
      if ($z < 10) {
        echo "dirbu: $z <br />";
        $z++;
        rekursija();

      }

    }
    rekursija();

 ?>
