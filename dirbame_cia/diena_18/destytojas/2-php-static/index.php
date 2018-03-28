<?php



function sumuoti() {
    static $x = 0;   // sita eilute suveiks TIK viena karta  vartotojui
    // static - is RAM atminteis neistrins $x reiksmes, f-jai pabaigus darba
    echo "x yra: $x <br />";
    $x += 2;  // $x = $x + 2;
}
sumuoti();
sumuoti();
sumuoti();
sumuoti();

// mokomos rekursija - f-ja kuri iskviecia pati save
function rekursija(){
    static $z = 0;
    if ($z < 10) {
        echo "dirbu: $z <br>";
         $z++;
         rekursija();
    }
    echo "dirbu: $z <br>";
}
rekursija();


//
