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
