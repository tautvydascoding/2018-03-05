console.log("labas");

var x, y, z;
x = 5;
y = 2;
z = x + y;

console.log(x);
console.log(y);
console.log("x ir y sumalygi: ", z);

console.log(z * 2);

function sveikintis() {
	var tekstas = "Laba diena";
	console.log( tekstas );
}
sveikintis();
sveikintis();
sveikintis();

//1 uzduotis 
//sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas = "Egidijus";
var pavarde = "Martinkus";
var amzius = 15;
var atlyginimas = 350.32;

console.log(vardas,",", pavarde,",", amzius,",", atlyginimas);

//// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log( typeof(atlyginimas));


//2 uzduotis //  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius() {

	console.log("Vardas :", vardas,"Pavarde :", pavarde,"amzius :", amzius,"Atlyginimas :", atlyginimas);

} 
printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis() {
	var metinisAtlyginimas = atlyginimas * 12;
	console.log("Metines pajamos:",metinisAtlyginimas);

	console.log("Vardas :", vardas,"Pavarde :", pavarde,"amzius :", amzius,"Atlyginimas :", metinisAtlyginimas);
}
printMetinisPajamuDydis();
//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var salis = "Kinija";
var miestas = "Bejing";
var adresas = "Kursiu g. 7";
var pastoKodas = "47227";

function printAddressData() {

	console.log("Salis: ", salis,"  Miestas: ", miestas,"  Adresas: ", adresas,"  Pasto kodas: ", pastoKodas);

} 
printAddressData();

//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {     // x - laikinas kintamasis
	console.log(x);
}
printTekstas("Jokubo Istorija");

//// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"
function printSudauginima(x1, x2) {
	var z = x1 * x2;
	console.log("sudauginus", x1, "su", x2,"gausime",z);
}
printSudauginima(10, 5);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y
function printSakni(x, y) {
	var pitagor = x * x + y * y;
	var saknis = Math.sqrt(pitagor);
	console.log("atsakymas: ", saknis)
}
printSakni(3,4);