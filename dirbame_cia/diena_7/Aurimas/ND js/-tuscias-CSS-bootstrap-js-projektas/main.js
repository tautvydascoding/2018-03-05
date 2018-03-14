console.log( " Labas ");
// pasikartoti IF



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

var namelist= ["Matilda", "Darmantas", "Karigailė","Klemensas", "Lukrecija","Tautas", "Tautgintė","Lionginas","Julijonas", "Vaidotas", "Norvaldė","Henrika", "Norvilė","Tautginė","Raigardas","Adeira", "Adelaina", "Adelšoda", "Airilė", "Airistėja", "Alkimena","Amaris", "Amija", "Anisa", "Aramėja", "Astilija", "Atinuke", "Damajanti", "Domila", "Edina", "Eglina", "Egvilina", "Eilina", "Eivija", "Erolina", "Ezekielė", "Feličija", "Fortūnė", "Gudeira", "Gvena", "Heda", "Ijonela", "Ilisa", "Imogen", "Isla", "Ivetė", "Kristabelė", "Lagerta", "Lavinia", "Leora", "Lyrika", "Maisa", "Maitane", "Meivė", "Milaja"];


for (var i=1; i < 51; i=i+2) {
  var name=namelist[i];
  console.log(i+"-as"+" vardas: "+name+";");
}


console.log("======================================");
for (var i = 0; i < 51; i=i+2) {
   var name=namelist[i];
   console.log(i+"-as"+" vardas: "+name+";");
}

for (var i = 0; i <51; i++) {
  
}


// function getvardas(){
//   console.log();
// }



// var vardas = "Tomas";
// // 1
// function getVardas1() {
//   return vardas + "1";
// }
// var x = getVardas1();   // arba  console.log(  getVardas1() );
// console.log(  x );
//
// // 2
// function setVardas2(name) {
//    vardas = name + "2";
// }
// setVardas2("antanas"); // !!!! sugalvoti vis kita zodi
//
// // 3
// function getVardas3() {
//   return vardas + "3";
// }
// x =  getVardas3();  // arba  console.log(  getVardas3() );
// console.log(  x );
//
// // 4
// function setVardas4(name) {
//    vardas = name + "4";
// }
// setVardas2("juozas"); // sugalvoti vis kita zodi
//
// // 5
// ---------------------------------------------------------------------
// 1) pasikartoti java script “return” zodeli
// // 2 UZDUOTIS
// // sukurti kintamuosius: alga = 500; pavarde=“Pietkus”;
// // parasyti f-ja "getPavarde()”, kuri turi "return" zodeli ir grazina pavarde i iskveitimo vieta.
// // patikrinti ar veikia f-ja

var alga=500;
var pavarde="Pietkus";
function getPavarde(){
  return pavarde;
}
console.log(getPavarde());

// 2) pasikartoti isvedima i ekrana ( document.write("Mano tekstas su js");
// // sukurti f-ja, kuri i ekrana isveda “<h2> uz lango singa, kad ir kai pkeista </h2>”

document.write("<h2>uz lango sninga, kad ir kaip keista</h2>");

// 3) pasikartoti elemento aukscio apemima ( var aukstis = document.getElementById('manoDiv').offsetHeight;)

var aukstis=document.getElementById("mano").offsetHeight;
console.log(aukstis);

// // A) sukurti htm elementa “section” su css ji nudazyti raudonai, uzdeti auksti: 50hw, ploti 100vh
// // B) su js paimti jo auksti ir atspausdinti

var sectionHeight=document.getElementById("mano2").offsetHeight;
console.log(sectionHeight);
// // C) sumazinkite ekrana ir perkraukite puslapi. Ar js isvedamas aukstis pasikeite?
// YES IT DID!!!!


// 4) pasiskaityti ir pasidaryt (DOM manipuliavimas):
// plain js
// https://plainjs.com/javascript/manipulation/
