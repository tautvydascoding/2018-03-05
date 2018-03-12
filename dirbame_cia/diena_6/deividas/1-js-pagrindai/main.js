console.log( " Labas ");


var x = 10;
var y = 100;

var z = x + y;
console.log(  x  );
console.log(  y  );
console.log(  "suma yra ",  z  );
//

console.log( z * 3);
console.log( z / 3);
console.log( z );


function sveikintis() {
  var tekstas = "Laba diena";
  console.log( tekstas );
}
sveikintis();
sveikintis();




//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas

var vardas = " Deividas ";
var pavarde = " Bartke ";
var amzius = 20 ;
var atlyginimas = 569.9 ;

console.log(vardas, pavarde, amzius, atlyginimas );
console.log( "vardas: ", vardas, "pavarde: ", pavarde, "amzius: " ,amzius, "atlyginimas: ", atlyginimas );
// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log( typeof( atlyginimas ) );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius()  {
      console.log( "=== Vardas: ", vardas, " pavarde: ", pavarde, " amzius: ", amzius, " atlyginimas: ", atlyginimas );
}
printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis() {
  var suma = atlyginimas * 12
  console.log("metines pajamos:", suma);
}
printMetinisPajamuDydis();
//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = " Lietuva ";
var miestas = " Vilnius ";
var adresas = " Jono 13";
var pastoKodas = 56565;

function printAddressData() {
  console.log("salis:", salis, "miestas:", miestas, "adresas:", adresas, "pastoKodas:", pastoKodas);
}
printAddressData();
// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(x) {  //x yra laikinas kintamasis, jis bus sunaikintas funkcijai pabaigus darba.
  console.log(x);
}
printTekstas( " Jokubo istorijos ");
printTekstas( " viso gero ");
// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"


function daugyba( x1,  x2) {
var atsakymas = x1 * x2;
  console.log( "sudauginus", x1 , "ir", x2, "gauname:", atsakymas);
}
daugyba( 2, 0);
// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y - ir istraukti sakni   Math.
function pitagoroTeorema(x, y) {
  var atsakymas = Math.sqrt((Math.pow(x,2) + Math.pow(y,2)));
console.log("Ilgoji trikampio krastine:", atsakymas);
}
pitagoroTeorema(8, 6);
//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
