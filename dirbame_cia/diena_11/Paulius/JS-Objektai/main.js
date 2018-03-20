console.log( " Labas ");

var namas={
  aukstuSk:4,
  butuSk:109,
  sildymas:"dujos",
  stoviu: function () {
    console.log( "stoviu stoviu ");
    console.log( "vis dar stoviu ");
  },
  remontas:function () {
    console.log( "jauneju" );

  }
};
      namas.stoviu();
      namas.remontas();


console.log(namas);

console.log("namo aukstu skaicius " + namas.aukstuSk);
console.log("namo butu skaicius " + namas.butuSk);
console.log("namo sildymas " + namas.sildymas);

//prideti daugiau kintamuju
//prideti "kaminuSk - 3"
//spalva -  "geltonas-oranzine"
 namas.kaminuSk = 3;
 namas.spalva = "geltona-oranzine";
 console.log(namas);

//ideti f-ja "stoveti()" kuri isveda i konsole "stoviu"
//ideti f-ja "remontas()" kuri isveda i konsole "jauneju"
// $('h1').click(function(){
//   console.log( " as save isaukiu ");
// }
// );
// arba (kitoks paprastos f-jos kurimo budas)
var kalbeti = function(){
  console.log( " kalbu ");
};
kalbeti();

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
 var dienynas = {
   vardas:"Jonas",
   pavarde:"Jonaitis",
   kelintokas:"Desimtokas",
    pazymiai : [6, 5, 9, 10, 8]
      }; // 1.1 UZDUOTIS
      // atspauzdinti visus duomenis
    console.log("vardas ",dienynas.vardas);
    console.log("Pavarde ",dienynas.pavarde);
    console.log("Kelintokas ",dienynas.kelintokas);
    console.log("is matematikos antras pazymys ",dienynas.pazymiai[1]);



    // 2 UZDUOTIS: sukurti 2-u objektus:
    // 1) tevas : vardas, pavarde, vaikas
    // 2) vaikas: klase, vardas
    // 3) priskirti tevo objekui (kintamajam) vaika

    var tevas = {
      vardas: "Petras",
      pavarde: "Petraitis",
      vaikas: "Petriukas"};
        tevas.vaikas="Jonukas"; // pakeiciu petriukas i Jonukas


var vaikas = {
    klase: 7,
    vardas: "bronius",

};
console.log(vaikas);
console.log(tevas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

  //    var darbuotojas = {
//   numeris: 865532878,
//   vardas: "Karolis",
//   pavarde: "Karalius",
//   alga: 1500,
//    };
 //  console.log("darbuotojo informacija", darbuotojas);

 function darbuotojas(telefonoNr, vardas, pavarde){
   this.telefonoNr = nr;
   this.vardas = vardas;
   this.pavarde = pavarde;
 }

  var naujasDarbuotojas = darbuotojas("22233322", "Petras",
"Petraitis");

console.log("telefonos numeris", darbuotojas.telefonoNr );
