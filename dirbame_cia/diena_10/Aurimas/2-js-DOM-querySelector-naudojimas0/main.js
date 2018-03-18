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
    visiStraipsniai[i].style.color = 'red';    //keiciam dizaina css7
    visiStraipsniai[i].style.backgroundColor = '#0000FF';
}
var naujas=document.querySelectorAll('h2,p');   //suras visus h2 ir p elementus
console.log(naujas);
