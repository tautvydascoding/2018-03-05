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
var vardas="Aurimas";
var pavarde="Klastauskas";
var klase= 12;
console.log("vardas:",vardas+";","pavarde:",pavarde+";","klase:",typeof(klase)+";");


//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLastName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius
function printName(x) {
  console.log("vardas:",x+";");
}
printName(vardas);


function printLastName(y) {
  console.log("pavarde:",y+";");
}
printLastName(pavarde);


function printClass(z) {
  console.log("klase:",typeof(z)+";");
}
printClass(klase);


// UZDUOTIS
// parasyti f-ja printVardasPavardeKlase(name, lname, klase)
// kuria iskviesti 3 karClass(klasetingais zmoniu vardasi irklasedemklase=";"
// ============CSS Flex=========================
function printVardasPavardeKlase (name, lname, clas) {
  console.log("vardas:",name+";","pavarde:",lname+";","klase:",typeof(clas)+";");
}
printVardasPavardeKlase ("Jonas", "Jonaitis","Dvylikta");
printVardasPavardeKlase ("Petras", "Petraitis",14);
printVardasPavardeKlase ("Ponas", "Ponaitis",0.000001);

// 1) suzaisti CSS Frog game


// =====================JS zaidimas=========================

// suzaisti JS zaidima Code Combat
