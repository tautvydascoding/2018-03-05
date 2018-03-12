console.log( " Pasikartojimas ");
//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas = "Ignas";
var pavarde = "Vilkas";
var amzius = 24;
var atlyginimas = 600;

console.log("Vardas:",vardas,"Pavarde:",pavarde,"Amzius:",amzius,"Atlyginimas:",atlyginimas);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log(typeof (vardas));


//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius() {
console.log("Vardas:",vardas,"Pavarde:",pavarde,"Amzius:",amzius);
}

printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis() {
  var suma = atlyginimas*12;
  console.log("Metinis atlyginimas:",suma)
}

printMetinisPajamuDydis();
//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "Lietuva";
var miestas = "Garliava";
var adresas = "Vasario 16-osios g. 13-41";
var pastoKodas = 60266;

function printAddressData() {
  console.log("Salis:",salis,"Miestas:",miestas,"Adresas:",adresas,"Pasto kodas:",pastoKodas);
}

printAddressData();

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(x){
  console.log(x);
}
printTekstas("Javascript uzduotis");
printTekstas("Pasikartoju dar karta klases darba");
// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"

function daugyba(x,y){
  var suma = x*y;
  console.log("Suma:",suma);
}

daugyba(10,5);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y

function pitagoroTeorema(x,y){
  var saknis = Math.sqrt(x*x+y*y);
  console.log("ilgoji krastine",saknis);
}

pitagoroTeorema(3,4);

//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
