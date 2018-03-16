console.log( " Labas ");

// itvirtinti f-jas

// UZDUOTIS =======ismokti f-jas - sukurti 50x funkciju===============
// A) sukurti kintamaji "vardas" Tomas
// B) sukurti 50 f-ju.
// nelyginiu (1,3,5,...) funkciju pavadinimai getVardas1(), getVardas3(), ...
// nelygines f-jos turi "return" ir iskvietus turi grazinti varda ir jo skaiciu salia pvz: "Tomas1"
// lyginiu (2,4,6,8...) funkciju pavadinimai setVardas2(name), setVardas4(name), ...
// lygines f-jos turi pakeisti varda ir uzdeti skaiciu salia
// NOTE: visas f-jas iskviesti
// pvz.:
var vardas = "Tomas";
// 1
function getVardas1() {
  return vardas + "1";
}
var x = getVardas1();   // arba  console.log(  getVardas1() );
console.log( getVardas1() );

// 2

function setVardas2(name) {
    vardas = name + "2";
    console.log((vardas));
}
setVardas2("antanas"); // !!!! sugalvoti vis kita zodi
setVardas2("petras");
// 3
var vardas = "alus"
function getVardas3() {
  return vardas + "3";
}
x =  getVardas3();  // arba  console.log(  getVardas3() );
console.log( getVardas3()  );

// 4
function setVardas4(name) {
   vardas = name + "4";
   console.log(vardas);
}
setVardas4("juozas"); // sugalvoti vis kita zodi
setVardas4("stalas")
// 5

var vardas = "medis"
function getVardas5() {
  return vardas + "5";
}
console.log(getVardas5());

function setVardas6(name) {
  vardas = name + "6";
  console.log(vardas);
}
setVardas6("sienas");
setVardas6("kava");
