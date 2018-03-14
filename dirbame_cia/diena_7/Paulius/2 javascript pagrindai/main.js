console.log( " Labas ");

function printKaina(x){
  console.log(x);
}

//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

printKaina(999);
printKaina(13.49);
printKaina(999.05);



// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidurkis(a,b,c,d,e){
  var atsakymas = (a + b + c + d + e) / 5;
  console.log("atsakymas", atsakymas);
}

pazymiuVidurkis(5, 10, 6, 8, 6);


// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(a,b,c,d,e){
  var atsakymas = (a + b + c + d + e) / 5;
  console.log("vidurkis", atsakymas);
}


pazymiuVidurkis1(2, 2, 4, 3, 10); // jonas
pazymiuVidurkis1(5, 4, 6, 7, 3); //gretute
pazymiuVidurkis1(9, 9, 9, 9, 9);//as


// 2 UZDUOTIS
// parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// sukurti kintamaji "vardas" Tomas
// patikrinti ar veikia f-ja

function getVardas(){
  var vardas = "Tomas";
  return vardas;
}
console.log( getVardas() );

//tekstas

var istorija = "kas suvalge cepelinus?";
var istorijosTesinys = " suvalge raudonkepuraite su vilku";

var ilgaIstorija = istorija + istorijosTesinys;
console.log(ilgaIstorija);

var miestas = "silainiai";
var salis = "siaures korejos";
var tekstas = salis + " sostine yra " + miestas;
console.log(tekstas);

// 3 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
// sukurti kintamaji   "pavarde" Tomauskas, vardas - Antanas
// patikrinti ar veikia f-ja

function getVardasPavarde(){
  var vardas = "Tomas";
  var pavarde = "Tomauskas";
  var tekstas = vardas + " " + pavarde;
  return tekstas;
}
console.log( getVardasPavarde() );

// 4 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia
