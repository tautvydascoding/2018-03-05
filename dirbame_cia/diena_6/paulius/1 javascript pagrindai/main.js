console.log("labas");



var x = 10;
var y = 100;

var z = x + y;

console.log(  x  );
console.log(  y  );
console.log( "suma yra",  z  );

console.log(  z * 3); //daugyba//
console.log(  z + 1); //sudetis//
console.log( z / 3); //dalyba//
console.log( z - 14); //atimtis//

function sveikinti(){
   var tekstas = "Laba diena";
   console.log( tekstas );
}
sveikinti();

//1 uzduotis
function naujas(){}
var Vardas="Paulius";
var Pavarde="Ke";
var Amzius=25;
var Atlyginimas=5000;
console.log(Vardas,Pavarde,Amzius,Atlyginimas);

naujas();

//2 uzduotis
function printVardasPavardeAmzius(){
  console.log( "Vardas: ", Vardas, "Pavarde: ", Pavarde,
  "Amzius: ", Amzius, "Atlyginimas: ", Atlyginimas );
}

printVardasPavardeAmzius();

//3 uzduotis
function printMetinisPajamuDydis(){
  var suma = Atlyginimas * 12;
  console.log( "metines pajamos: ", suma);
}
printMetinisPajamuDydis();

//4 UZDUOTIS

var salis = "lietuva";
var miestas = "kaunas";
var adresas= "kursiu 7g";
var pastoKodas = 56147;
function printAddressData(){
  console.log(salis,miestas,adresas,pastoKodas);
}


printAddressData();

//5 uzduotis
function printTekstas(x){
console.log ( x );}

 printTekstas("Jokubos istorijos istorijos");
 printTekstas("nekenciu matematikos");
 printTekstas("Jokubos istorijos istorijos");

 //6 UZDUOTIS

 function dauginti(x1, y2){
   var atsakymas = x1 * y2;
   console.log("sudauginus",x1, "ir", y2,"gauname", atsakymas);
   }
dauginti(23, 78);

//7 UZDUOTIS

function pitagoras(a, b) {
  var atsakymas = a*a + b*b;
  var z = Math.sqrt(atsakymas);
  console.log("c yra:", atsakymas);
}
pitagoras(20, 10);
