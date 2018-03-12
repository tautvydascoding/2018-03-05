console.log( " Labas ");

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius
var vardas = " Tadas ";
var pavarde = " Tadukas ";
var klase =  8;

console.log("vardas:",vardas,"pavarde:",pavarde,"klase:",klase);




//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius
///////////////////////////////////
function printName() {
  console.log("vardas:", vardas);
}
printName(vardas);

//////////////////////////////////
function printLastName() {
  console.log("pavarde:", pavarde);
}
printLastName(pavarde);

///////////////////////////////////////
function printClass() {
  console.log("klase:", klase);
}
printClass(klase);

  /////////////////////////////////////
//  03 UZDUOTIS
// parasyti f-ja printVardasPavardeKlase(name, lname, klase)
// kuria iskviesti 3 kartus su skirtingais zmoniu vardasi ir pavardem



function printVardasPavardeKlase(name, lname, clas) {
  console.log("vardas:", name, "pavarde:", lname, "klase:", clas);

}
printVardasPavardeKlase(" Petras ", " Petrukas", 12);
printVardasPavardeKlase(" Antanas ", "Antaniukas", 8);
printVardasPavardeKlase("Giedrius", "Giedraitis", 7);

// =====================CSS Flex=========================

// 1) suzaisti CSS Frog game

// =====================JS zaidimas=========================

// suzaisti JS zaidima Code Combat
