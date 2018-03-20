console.log( " Labas ");


var aprasymas = document.querySelector( " .straipsnis-1" );
console.log(aprasymas);
aprasymas.innerHtml = "Pakeistas su js";

///============== keiciam visus straipsnius========////
var visiStraipsniai = document.querySelectorAll( "p"); // gauname Array
console.log( visiStraipsniai);
 visiStraipsniai[2].innerHTML = "Pakeistas su masyvo pagalba";

 for (var i = 0; i < 3; i++) { //visiStraipsniai.length
   visiStraipsniai[i].innerHTML = "Pakeistas su FOR ciklu" // keiciam tekstus
   visiStraipsniai[i].style.color = "blue"; // keiciam dizainus / css
   visiStraipsniai[i].style.backgroundColor = "#a1a1a1";
 }
//=========================== keiciam spalva h2 ir p========//

var visiTekstai = document.querySelectorAll("h2, p"); // gavom Array
console.log(visiTekstai);

for (var i = 0; i < 6; i++) { // visiTekstai.length
  visiTekstai[i].style.color = "yellow";
}

//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"


//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
