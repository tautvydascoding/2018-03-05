console.log( " Labas ");
// =================if  teorija====================
// if (salyga) {
//     // jei true
//     //
//     //
// } else {
//     // jei false
// }
// if ( salyga ) {
//     // jei salyga tenkinama
// }
//
// if ( salyga ) {
//     // jei salyga tenkinama
// } else {
//     // jei salyga netenkinama  / priesingu atveju
// }
//
// if (salyga) {
//
// } else if (salyga) {
//
// } else {
//     // ?
// }
//=============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

var vardas1 ="Edidijus";
var vardas2 ="Tautvydas";
if (vardas1 == vardas2) {
  console.log("Vardai sutampa boyaaa");
} else {
  console.log("Vardai skirtingi gurlll");
}
if (vardas1 == "Egidijus") {
  console.log( "Labas seniukai" );
}
else {
  console.log("Wrong boyaa");
}
// B)
// Papildomai patikrinti uzdavini A.
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
// C)
// Patikrinti ar vardas1 yra "Tomas", IR butinai vardas2  yra "Karolis"
if (vardas1 == "Tomas" && vardas2 == "Karolis") {
  console.log("You are right Tomas and Karolis is present");
} else {
console.log("One of the boys is missing");
}
// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba

if (vardas1 =="Egidijus" || vardas2 == "Karolis") {
  console.log("vienas is vardu yra Egidijus");
}
else {
  console.log("one of the names aint Egidijus");
}
// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta


// Salygos:

// iki 7 metu
// "Pliusines varles"
//
// nuo 7 iki 14
// "Mini telefonai"
//
// nuo 14 iki 18
// "new Music App"
//
// nuo 18 iki 24
// "Stok i sauliu sajunga"
//
// nuo 24 iki 65
// "Pensijos kaupimas - zusiregistruok"
// nuo 65
// "kelione i Bristona"
// sunkesne:
// iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"



// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
