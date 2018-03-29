<?php
  function sumuoti(){
    $x =0;
    echo "x yra: $x <br />";
    $x+=2;
    echo "x po +yra: $x <br />";
  }
sumuoti();
sumuoti();
sumuoti();
sumuoti();

function sumuoti2(){
  static $x =0; //sita eilute svetaineje suveiks TIK viena karta vartotojui.
                // static nebus istrintas is ramu atminties f-jai pabaigus darba.
  echo "x yra: $x <br />";
  $x+=2;
  echo "x po +yra: $x <br />";
}
sumuoti2();
sumuoti2();
sumuoti2();
sumuoti2();
// mokomes rekursijos, tai f-ja, kuri iskviecia pati save
function rekursija(){
  static $z=0;
  echo "pries if dirbu $z <br />";
  if ($z<10) {
    $z++;
    echo "viduje if dirbu $z <br />";
    rekursija();
  }
  echo "dirbu $z <br />";
}
rekursija();

 ?>
