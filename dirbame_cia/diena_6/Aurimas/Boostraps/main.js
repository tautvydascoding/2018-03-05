function sveikintis () {
  var tekstas="Laba diena";
  console.log(tekstas);
}
sveikintis ();



//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas="Aurimas";
var pavarde="Klastauskas";
var amzius=30;
var atlyginimas=3000;
// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log(typeof(vardas));



//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius () {
  console.log("Vardas: ",vardas,";", "Pavarde: ", pavarde,";", "Amzius: ", amzius,";");
}
printVardasPavardeAmzius ();



//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis () {
  var pajamos= 12 * atlyginimas;
  console.log("Menesinis atlyginimas: ", atlyginimas, "eu;", "Metinis atlyginimas: ", pajamos, "eu;");
}
printMetinisPajamuDydis ();



//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis="Lietuva";
var miestas="Kaisiadorys";
var adresas="Gedimino g. 95-2";
var pastoKodas=56146;
function printAddressData () {
  console.log(adresas+", "+ miestas+", "+salis+", Pasto kodas: "+pastoKodas+";");
}
printAddressData();



// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(x,y) {
  console.log(y);
  console.log(x+" "+y);
}
printTekstas("Mielosios", "Jokubo istorijos");


// 6 UZDUOTIS
// sukurti f-ja, kuri sudaugina du  paduotus skaicius "daugyba(x, y)"
function daugyba(x,y){
  var multi=x * y;
  console.log("Daugyba:",x,"*",y,"=",multi);
}
daugyba(12,5);

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y
function pitagoras (a,b){
  var ilgoji= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  console.log("Ilgoji trikampio krastine: ", ilgoji);
}
pitagoras(6,8);


//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
