

//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas = "Tomas";
var pavarde = "Tomauskis";
var amzius = 19;
var atlyginimas = 569.90;

console.log("vardas:", vardas, "pavarde:", pavarde ,"amzius:", amzius, "atlyginimas;", atlyginimas);
// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log( typeof(atlyginimas));


//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius(){
  console.log("vardas:", vardas, "pavarde:", pavarde ,"amzius:", amzius, "atlyginimas;", atlyginimas);
}
printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis() {
  var suma = atlyginimas * 12;
  console.log("metines pajamos:", suma );
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "Lietuva";
var miestas = "Kaunas";
var adresas = "Kursiu g.7";
var pastoKodas = 60266;

function printAddressData(){
  console.log("salis:",salis, "miestas:",miestas, "adresas:",adresas, "pastoKodas:",pastoKodas);
}
printAddressData();
// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas( x ) {  // IDEA: x-laikinas kintamasis
  console.log( x );
}
printTekstas( "Jokubo istorijos");
printTekstas( "Labas as krabas");

// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"
function sumuoti (x,y) {
  var atsakymas = x*y ;
  console.log("sudauginus", x, "ir", y, "gauname", atsakymas);
}

sumuoti(2,10);
// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y - ir istraukti sakni Math.

function pitagoroTeorema (x,y){
  var atsakymas = Math.sqrt(x*x+y*y);
  console.log("atsakymas", atsakymas);
}

pitagoroTeorema(3,4);



//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
