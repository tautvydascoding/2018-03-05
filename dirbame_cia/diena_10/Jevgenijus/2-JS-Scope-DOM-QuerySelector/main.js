console.log( " Labas ");

var aprasymas = document.querySelector(  '.straipsnis-1' );
console.log(  aprasymas  );
aprasymas.innerHTML  = "Pakeistas su js";

//====================keiciam visus straipnsnius
var visiStraipsniai = document.querySelectorAll( 'p'); // gauname Array

console.log( visiStraipsniai );
visiStraipsniai[2].innerHTML = "Pakeistas su masyvo pagalba";

for (var i = 0; i < 3; i++) {  // visiStraipsniai.length
    visiStraipsniai[i].innerHTML  =  "Pakeistas us FOR ciklu"; //keiciam tekstus
    visiStraipsniai[i].style.color = "blue"; // keiciam dizaina / CSS
    visiStraipsniai[i].style.backgroundColor = "f1f1f1";
}
//=========keiciam spalva h2 ir p

var visiTekstai = document.querySelectorAll("h2,p"); //gavom array
console.log(visiTekstai);

for (var i = 0; i<6; i++) {
  visiTekstai[i].style.color = "red";
}
