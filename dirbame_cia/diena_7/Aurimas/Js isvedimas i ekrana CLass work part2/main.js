console.log( " Labas ");
// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================




//======================TEKSTO ISVEDIMAS (tik susipazinti)===============
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda"); //issaugo kintamajame ivestasTekstas bet ka iraso vartotojas;
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Smile ^_^</b>";
//
// //----Elemento duomenys--------
// // auksto paemimas:
// var aukstis = document.getElementById('manoDiv').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.getElementById('manoDiv').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// // aukscio nustatymas:
// document.getElementById("manoDiv").style.height = "500px"; 		// change the height of a <div> element:

//=====================PASIKARTOJIMAS==================

//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

function printKaina(x){
    console.log("Kaina:",x+";");
}
printKaina(999.00);
printKaina(13.49);
printKaina(100.05);

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis(){
  var a=5;
  var b=10;
  var c=8;
  var d=6;
  var e=8;
  var vid=(a+b+c+d+e)/5;
  console.log("Pazymiai:",a+";",b+";",c+";",d+";",e+";","Pazymiu vidurkis:",vid+";");
}
pazymiuVidurkis();


// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(x1,x2,x3,x4,x5){
  var vid=(x1+x2+x3+x4+x5)/5;
  console.log("Pazymiai:",x1+";",x2+";",x3+";",x4+";",x5+";","Pazymiu vidurkis:",vid+";");
}
pazymiuVidurkis(5,10,8,6,8);
//=====================RETURN==================

// 2 UZDUOTIS
// parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// sukurti kintamaji "vardas" Tomas
// patikrinti ar veikia f-ja

function getVardas(){
  var vardas="Tomas";
  return vardas;
}
console.log("Vardas:",getVardas()+";");

// 3 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
// sukurti kintamaji   "pavarde" Tomauskas, vardas - Antanas
// patikrinti ar veikia f-ja

function getVardasPavarde(){
  var pavarde="Tomauskas";
  var vardas="Antanas";
  return ("Vardas:"+" "+vardas+";"+" "+"Pavarde:"+" "+pavarde+";");
  // return (vardas+" "+pavarde);
}
console.log(getVardasPavarde());


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

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######
for (var i = 0; i < 6; i++) {
    var a=0;
    var c="#";
    while (a<i) {
      c=c+"#";
      a=a+1;
    }
    console.log(c);
}




//=========== =KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

//======= local/global or SCSS or IF or Bootstrap Layout or Frog/Garden ====
