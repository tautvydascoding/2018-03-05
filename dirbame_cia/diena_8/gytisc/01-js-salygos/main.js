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

var vardas1 = "Tomas";
var vardas2 = "Antanas";
if (vardas1 == vardas2) {
  console.log("Vardai sutampa", vardas1, vardas2);
}
else {
  console.log("Vardai nesutampa", vardas1, vardas2);
}


// B)
// Papildomai patikrinti uzdavini A.
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

var vardas1 = "Tomas";
var vardas2 = "Antanas";
if (vardas1) {
  console.log("Labas Tomai");
}


// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"

var vardas1 = "Tomas";
var vardas2 = "Algis";
if (vardas1 == "Tomas" && vardas2 == "Karolis") {
  console.log("Yra ir Tomas, ir Karolis");
}
else {
  console.log("Vieno iš vardų nėra");
}

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba

if (vardas1 == "Karolis" || vardas1 == "Tomas") {
  console.log("Vienas iš vardų yra Tomas");
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

var age = 16;
if (age <= 7 || age > 65) {
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
  if (age <= 7) {
    console.log("Pliusines varles");
  } else {
    console.log("kelione i Bristona");
  }
} else if (age > 7) {
    console.log("new Music App");
} else if (age > 14) {
  console.log("new Music App");
} else if (age >=18) {
  console.log("Stok i sauliu sajunga");
} else if (age >=24) {
  console.log("Pensijos kaupimas - zusiregistruok");
} else if (age >65) {
  console.log("kelione i Bristona");
} else if (age >= 65) {
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
}

// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
