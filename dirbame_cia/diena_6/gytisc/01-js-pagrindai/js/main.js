// console.log("labas");
//
// var x = 10;
// var y = 100;
//
// var z = x + y;
//
// console.log(x);
// console.log(y);
// console.log("suma yra",z);
//
// console.log(z + 1);
// console.log(z * 3);
// console.log(z / 5);
// virsutinius dareme klaseje

// function sveikintis() {
//     var tekstas = "Laba diena";
//     console.log(tekstas);
// }
// sveikintis();
// sveikintis();

//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas

var vardas = "Gytis";
var pavarde = "Cepukenas";
var amzius = 40;
var atlyginimas = 1000;

console.log(vardas);
console.log(pavarde);
console.log(amzius);
console.log(atlyginimas);

// kitas budas eiluteje

// var vardas = "Gytis";
// var pavarde = "Cepukenas";
// var amzius = 10;
// var amzius = 1000;
//
// console.log(vardas, pavarde, amzius, atlyginimas);

// su paaiskinimais

console.log("Vardas:", vardas, "Pavarde:", pavarde, "Amžius:", amzius, "Atlyginimas:", atlyginimas);


// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa


//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  console.log("Vardas:", vardas, "Pavardė:", pavarde, "Amžius:", amzius, "Atlyginimas:", atlyginimas);
}
printVardasPavardeAmzius();


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDidis() {
  var suma = atlyginimas * 12;
  console.log("Metinės pajamos", suma);
}
printMetinisPajamuDidis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Savanorių pr. 1";
var pastoKodas = "LT-01232";

function printAdressData() {
  console.log("Šalis:", salis);
  console.log("Miestas:", miestas);
  console.log("Adresas:", adresas);
  console.log("Šalis:", pastoKodas);
}
printAdressData();

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
//
function printTekstas(x) { // x - laikinas kintmasis
  console.log(x);
}
printTekstas("Vieną kartą nieko nebuvo.");
printTekstas("O kitą kart jau buvo.");

// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"

function daugyba(x1,x2) {
  var atsakymas = x1 * x2;
  console.log("Sudauginus",x1,"ir",x2,"gauname:", atsakymas);
}
daugyba(10,2);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y - ir istraukti sakni

function pitagoroTeorema(x,y) {
  var tarpinisKintamasis = x * x + y * y;
  var z = Math.sqrt(tarpinisKintamasis);
  console.log("z yra:",z);
}
pitagoroTeorema(3,4);


//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
