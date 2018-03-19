console.log( " Labas ");
//=================objekto pagrindai=================
// UZDUOTIS 1
var namas = {
     aukstuSk: 4,
     butuSk: 109,
     sildymas: "dujos",
     stoviu: function () {
           console.log( " stoviu stoviu stoviu...");
           console.log( " stoviu  ...");
     } ,
     remontas: function () {
           console.log( " jauneju :) ");
     }
 };
 namas.stoviu();
 namas.remontas();

console.log(  namas );
console.log( "namo aukstu skaicius: " + namas.aukstuSk );
console.log( "namo butu skaicius: " + namas.butuSk );
console.log( "namo sildymo tipas: " + namas.sildymas );


//  UZDUOTIS 2
//   prideti daugiau kintamuju:
//  "kaminuSk" - 3
//   spalva - "geltona-oranzine"
namas.kaminuSk = 3;
namas.spalva = "geltona-oranzine";
console.log(  namas ); // pasitikriinimui
// UZDUOTIS 3
// ideti f-ja "stoveti()" kuri isveda i konsole "stoviu"
// ideti f-ja "remontas()" kuri isveda i konsole "jauneju"


// ---------------------TERORIJA-----------
// anonime f-ja (neturi pavadinimo, todel issaukia pati save, tik kompiuteriui perskaicius ja)

$('h1').click(   function () {
          console.log( " as save issisaukiau" );
} );

//   (kitoks paprastos f-jos kurimo budas)
var kalbeti =  function () {
          console.log( " kalbu" );
};
kalbeti();

//==================================================
//

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis


// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika


// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

//============3=pvz: construktorius =====
// function Car(nr, c, ms) {
//     this.numberOfDoors = nr;
//     this.color = c;
//     this.maxSpeed = m;
// }
//
// // objekto kurimas
// var AudiTT = new Car('AAA000', "red", 280);
