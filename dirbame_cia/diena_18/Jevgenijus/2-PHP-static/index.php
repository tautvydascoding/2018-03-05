<?php

function sumuoti() {
  static $x = 0; //sita eilute suveiks tik viena karta atejusiam vartotojui
  // static - is RAM atminties neustrins $x reiksmes funkcijai pabaigus darba
  echo "x yra: $x <br />";
  $x += 2; //$x = $x = 2;
}
sumuoti();
sumuoti();
sumuoti();
sumuoti();

//mokomos rekursija - fukncija kuri iskviecia pati save
function rekursija() {
  static $z = 0;
  if ($z < 10) {
    $z++;
    rekursija();
  }
  echo "dirbu: $z <br>";
}
rekursija();
