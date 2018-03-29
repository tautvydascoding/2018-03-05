<?php
  function sumuoti() {
    static $x = 0; // sita eilute suveiks vartotojui TIK viena karta
    // static - is RAM atminties neistrins $x reiksmes, f-jai pabaigus darba
    echo "x yra: $x <br />";
    $x += 2; // $x = $x +2
  }
  sumuoti();
  sumuoti();
  sumuoti();
  sumuoti();

  // mokomos rekursija - f-fa kuri  iskviecia pati save
  function rekursija(){
    static $z=0;
    if ($z < 10) {
      $z++;
      echo "dirbu $z <br />";
      rekursija();
    }
    echo "dirbu $z <br />";
  }
  rekursija();
?>
