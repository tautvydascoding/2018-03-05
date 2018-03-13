console.log( " Labas ");
// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================

// o pats dokument ir window del bendro isprusimo..!
// visi elementai laikomi document !
// jie visi dokumente yra globalus kintamieji!

//======================TEKSTO ISVEDIMAS (tik susipazinti)===============
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

//----Elemento duomenys--------
// auksto paemimas:
// var aukstis = document.getElementById('manoDiv').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.getElementById('manoDiv').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// aukscio nustatymas:
// document.getElementById("manoDiv").style.height = "500px"; 		// change the height of a <div> element:

//=====================PASIKARTOJIMAS==================

//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);


function printKaina(kaina) {
    console.log("kaina:",kaina); }

    printKaina(999.00);
    printKaina(13.49);
    printKaina(100.05);

// kiekviena kart iskvietus kaina, skliausteliu (value kaina) nukeliauja i x.

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis() {

var x = 5;
var y = 10;
var t = 8;
var w = 6;
var r = 8;
var vidurkis = (( x + y + t + w + r)/5);
console.log("vidurkis (5,10,8,6,8) yra:",vidurkis);
console.log("skaiciuoti vidurki");
}
pazymiuVidurkis();

alert("you will be redirected to porn site, press OK");

// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(x1,x2,x3,x4,x5) { //mano
  //  (vardinam kokie x bus rezultate)
var vir = ((x1 + x2 + x3 + x4 + x5)/5);
// matematika kokios norime
console.log("Pazymiai:", x1 + ";" , x2 + ";" , x3 + ";" , x4 + ";" , x5 + ";","Vidurkis:", vir+ ";");
// isvardinam kas bus salia parasyta bei veiksmus na o ";" atskiria arba sukuria tarpus pvz vardas ";" pavarde
}
pazymiuVidurkis1(8,7,2,3,10);
// reiksmes duodam




//=====================RETURN==================

// 2 UZDUOTIS
// parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// sukurti kintamaji "vardas" Tomas
// patikrinti ar veikia f-ja


function getVardas() {
var vardas= "Tomas";
return vardas;
}
console.log( getVardas());

// arba var vardas = getVardas (); Povilas;
// console.log( xx );

// var kvadratas = 50() * 66() + 55();
// dauginti gali po return ir tik skaicius
// funkcija sustos nes return vardas.

// 3 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
// sukurti kintamaji   "pavarde" Tomauskas, vardas - Antanas
// patikrinti ar veikia f-ja

function getVardasPavarde() {
var pavarde = 'Lekavicius' ;
var vardas = 'Egidijus' ;
  return (vardas + " " + pavarde);

}
console.log( getVardasPavarde () );

// arba var tt = getVardasPavarde;
// console.log ( tt ) ;


// 3.5 Uzduotis
var istorija = "raudonkepure,pikta ejo i miska";
var istorijosTesinys = "ji buvo pikta,nes ryte neturejo sausu pusryciu";
var ilgaIstorija = istorija + istorijosTesinys;
console.log( ilgaIstorija );

// sudejome teksta

var miestas = "kaunas";
var salis = "lietuva";
var tekstas = salis + " " + miestas + " " + salis + " " + salis ;
console.log( tekstas );

// tarpelius uzdeti rekia pliusuku is abieju pusiu pvz + " " +

// 4 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia


function getH1ElementoAukstis(){
  var aukstis=document.getElementById("Opa").offsetHeight;
  return aukstis;
}
console.log("H1 aukstis yra:",getH1ElementoAukstis()+"px;");



// 4.1 UZDUOTIS
// parasyti f-ja, kuri turi "return" zodeli.
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

function getPazymiuVidurkis2(x1,x2,x3,x4,x5){
  var atsakymas=(x1 + x2 + x3 + x4 + x5)/5;
  return atsakymas;
}
var atsakymastik=getPazymiuVidurkis2(8,10,8,5,6);
console.log("Pazymiu vidurkis:",atsakymastik+";");
// =================FOR intro  ======================

for (var i =0; i<10; i++) {
console.log('labas',i);
}
for (var i = 0; i<5 ; i++) {
  console.log("egidijusboostrapsensei",i);
 }
 for (var i = 0; i<10; i++) {
  console.log("Tomas");
  console.warn("Tomas");
  console.error("Tomas");
 }


// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######



var tekstas = "#";
for (var i = 0; i < 10; i++) {
  console.warn( tekstas );
  tekstas = tekstas + "#";
}

// apsbreze var pirmiausia
// for funkcija
// console ir pasirenki var'a
// pasitaisai var'a ka jam prideti


//=========== =KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

//======= local/global or SCSS or IF or Bootstrap Layout or Frog/Garden ====
