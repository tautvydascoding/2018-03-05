// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


//=====================PASIKARTOJIMAS==================

//  0 UZDUOTIS

function Printkaina (x) {
console.log("Kaina", x);
//svarbu suvokti sita
}
Printkaina(999);
Printkaina(15.55);
Printkaina(14557);
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis() {
  var x1 = 5;
  var x2 = 10;
  var x3 = 6;
  var x4 = 7;
  var x5 = 9;
    var vidurkis = (x1+x2+x3+x4+x5) / 5 ;
    // skaiciuoju vidurki!!!
    console.log("vidurkis (5,6,7,8,9,10) yra:", vidurkis);
}
pazymiuVidurkis();

// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(a, b, c, d, f) {

    var vidurkis = (a+b+c+d+f) / 5 ;
    // skaiciuoju vidurki!!!
    console.log("penkiu menesiu vidurkis yra:", vidurkis);
}
pazymiuVidurkis1(2,3,5,7,4,10); //Algis
pazymiuVidurkis1(2,10,5,8,4,10); //Jonas
pazymiuVidurkis1(4,10,8,7,8,10); //Gerda


//=====================RETURN==================

// 2 UZDUOTIS
// parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// sukurti kintamaji "vardas" Tomas
// patikrinti ar veikia f-ja

function getVardas() {
var vardas = "Kamile";
return vardas;
}
console.log(getVardas() );
//arba
var xx= getVardas();
console.log(xx);
// 3 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
// sukurti kintamaji   "pavarde" Tomauskas, vardas - Antanas
// patikrinti ar veikia f-ja
function getVardasPavarde() {
  var vardas= "Kamile";
  var pavarde= "Kamiliauskaite";
  var tekstas= vardas + " " + pavarde;
  return tekstas;
}
console.log(getVardasPavarde() );

// TEKSTO SUDEJIMAS!!! ---------------------------------
var istorija = "Ejo i miska Jonukas";
var istorijosTesinys = "Ji buvo stora, bet norejo suliekneti";

var ilgaIstorija = istorija + istorijosTesinys;
console.log(ilgaIstorija);

var miestas ="Kaunas";
var salis = "Lietuva";
var tekstas = salis + " " + miestas + salis + salis+ miestas;
console.log(tekstas);
// ------------------------------------------
// 4 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia


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

//=========== =KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

//======= local/global or SCSS or IF or Bootstrap Layout or Frog/Garden ====
