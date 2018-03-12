console.log( " Labas ");


var x = 10;
var y = 100;

var z = x + y;

console.log(   x    );
console.log(   y   );
console.log( "suma yra ",  z   );
//

console.log(   z * 3 );
console.log(   z / 3 );
console.log( z  );

function sveikintis() {
    var tekstas = "Laba diena";
    console.log(  tekstas );
}
sveikintis();
sveikintis();
sveikintis();
sveikintis();



//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas = 'Tomas';
var pavarde = "Tomauskis";
var amzius = 19;
var atlyginimas = 569.90;

console.log( vardas, pavarde, amzius, atlyginimas );
// ARBA
console.log( "vardas: ", vardas, " pavarde: ", pavarde, " amzius: ", amzius, " atlyginimas: ", atlyginimas );
// arba "+" sudeda tekstus/string


// teo:
//  typeof( k )  f-ja kuri isveda kintamojo tipa
console.log(  typeof( atlyginimas )   );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
    console.log( "=== Vardas: ", vardas, " pavarde: ", pavarde, " amzius: ", amzius, " atlyginimas: ", atlyginimas );
}
printVardasPavardeAmzius();
printVardasPavardeAmzius();
printVardasPavardeAmzius();


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis() {
  var suma = atlyginimas * 12;
  console.log("metines pajamos", suma);
}
printMetinisPajamuDydis();
//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
function printAdressData() {
console.log(salis,miestas,adresas,pastoKodas);
}
var salis = "Paragvajus";
var miestas = "Abluba";
var adresas = "Tonkin 24";
var pastoKodas = "4524789";

printAdressData(); //funkcijos iskvietimas
// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(x) { // x - yra laikinas kintamasis, jis bus sunaikintas kai funkcija baigs darba
  console.log(x);
}
printTekstas("Labas, kaip sekasi tau?");
printTekstas("Labas, kaip reikalai?");
printTekstas("Labas, kaip tevai?");


// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"
function daugyba(x1,x2) {
var atsakymas=x1 * x2;
console.log("sudauginus", x1, "ir", x2, "gauname:", atsakymas);
}
daugyba(2, 10);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y - ir istraukti sakni Matc.
function pitagoroTeorema(x,y) //nebaigta


//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
