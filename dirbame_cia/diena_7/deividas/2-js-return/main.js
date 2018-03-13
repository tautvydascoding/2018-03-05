console.log( " Labas ");
//=====================PASIKARTOJIMAS==================

//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);
function printKaina(kaina) { // kaina - Local -privatus kintamasis-
  console.log("kaina:", kaina );
}
printKaina(999.00);
printKaina(13.49);
printKaina(100.05);




// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidurkis() {
  var x1 = 5;
  var x2 = 10;
  var x3 = 8;
  var x4 = 6;
  var x5 = 8;
  var vidurkis = (( x1 + x2 + x3 + x4 + x5 ) / 5)
  console.log("-------skaiciuoju vidurki-------");
  console.log("vidurkis (5, 10, 8, 6, 8) yra:",vidurkis);
}
pazymiuVidurkis();



// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(vardas, a , b , c , d , e) {
  var vidurkis = (a + b + c + d + e) / 5;
  console.log( vardas, "vidurkis:", vidurkis);
}

pazymiuVidurkis1( "Jonas", 2, 2, 3, 4, 10); // Jonas
pazymiuVidurkis1("Greta", 5, 4, 3, 2, 10); // Greta
pazymiuVidurkis1("Petras", 6, 4, 7, 8, 10); // Petras



//=====================RETURN==================

// 2 UZDUOTIS
// parasyti f-ja "getVardas()",
// A) f-jos viduje - sukurti kintamaji "vardas" Tomas
// B) f-jos viduje ideti "return" komanda , kuri  grazina "vardas" kintamaji
// C) iskviesti ir patikrinti ar veikia f-ja getVardas()
// pvz.: var xx = getVardas();   console.log( xx );

function getVardas() {
  var vardas = " Povilas ";
  return vardas;
}
console.log( getVardas() );
// arba
var xx = getVardas(); // Povlas
console.log( xx );


//////////////////////////////////////////////////////////////
var istorija = " Raudonkepure, pitka ejo i miska.";
var istorijosTesinys = "Ji buvo pikta, nes ryte neturejo sausiu pusryciu";

var ilgaIstorija = istorija + istorijosTesinys;
console.log( ilgaIstorija );

var miestas = " Kaunas ";
var salis = " Lietuva ";
var tekstas = salis + " " +miestas + salis; // " " tarpelis
////////////////////////////////////////////////////////////////////
// 3 UZDUOTIS
// parasyti f-ja "getVardasPavarde()",
// A) f-jos viduje - sukurti kintamuosius "pavarde" Tomauskas, vardas - Antanas
// B) f-jos viduje ideti "return" komanda , kuri  grazina varda ir pavarde "vardas+pavarde"
// C) iskviesti ir patikrinti ar veikia f-ja getVardasPavarde()
// pvz.: var yy = getVardasPavarde();   console.log( yy );

function getVardasPavarde() {
  var pavarde = " Tomauskas ";
  var vardas = " Antanas ";
  var tekstas = vardas + " " + pavarde;
  return tekstas;
}
console.log( getVardasPavarde() );
//arba
var tt =  getVardasPavarde();
console.log( tt );
//--------------sunkesnis------------------------

// 4 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia
function getH1ElementoAukstis(){
  var aukstis=document.getElementById("tekstas").offsetHeight;
  return aukstis;
}
console.log("H1 aukstis yra:",getH1ElementoAukstis()+"px;");

// 4.1 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")



// =================FOR intro  ======================

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

var  tekstas = " # " ;
for (var i = 0; i < 6; i++) {
  console.log( tekstas );
  tekstas = tekstas + "#";
}

//=========== =KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

//======= local/global or SCSS or IF or Bootstrap Layout or Frog/Garden ====
