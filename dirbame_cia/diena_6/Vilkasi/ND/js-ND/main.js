console.log( "Namu darbai");

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius
var vardas = "Petriukas";
var pavarde = "Maziukas";
var klase = 5;

console.log("Vardas:",vardas,"Pavarde:",pavarde,"Klase:",klase);



//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLastName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius

function printName(){
  console.log("Vardas:",vardas);
}

function printLastName(){
  console.log("Pavarde:",pavarde);
}

function printClass(){
  console.log("Klase:",klase);
}

printName();
printLastName();
printClass();

//  03 UZDUOTIS
// parasyti f-ja printVardasPavardeKlase(name, lname, klase)
// kuria iskviesti 3 kartus su skirtingais zmoniu vardasi ir pavardem
function printVardasPavardeKlase(name,lname,clas){
console.log("Vardas:",name,"Pavarde:",lname,"Klase:",clas);
}

printVardasPavardeKlase("Ramas","Kilogramas",12);
printVardasPavardeKlase("Rombas","Rombuotas",6);
printVardasPavardeKlase("Vejas","Nupustas",9);


// =====================CSS Flex=========================

// 1) suzaisti CSS Frog game

// =====================JS zaidimas=========================

// suzaisti JS zaidima Code Combat
