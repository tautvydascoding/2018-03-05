<?php

function sumuoti() {
  static $x = 0; // sita eilute suveiks viena karta vartotojui
  echo "x yra: $x <br/>";
  $x += 2;
}

sumuoti();
sumuoti();
sumuoti();
sumuoti();


//mokomes rekursija - f-ja kuri iskviecia pati save
function rekursija() {
  static $z = 0;
  if ($z < 10) {
    $z++;
    echo "Dirbu:  $z <br/>";
    rekursija();
  }
}

rekursija();

 ?>
