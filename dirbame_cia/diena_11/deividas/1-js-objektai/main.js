console.log( " Labas ");

///==================objekto pagrindai=========/////

var namas = {
  aukstuSk: 4,
  butuSk: 109,
  sildymas: "dujos",
  stoviu: function () {
      console.log(" stoviu stoviu stoviu...");
      console.log(" stoviu ...");
  } ,
  remontas: function () {
      console.log(" jaunieju");

  }
 };
 namas.stoviu();
 namas.remontas();


 console.log(namas);

console.log("namo aukstu skaicius:" + namas.aukstuSk);
console.log("namo butu skaicius:" + namas.butuSk);
console.log("namo sildymo tipas:" + namas.sildymas);


///// prideti daugiau kintamuju :
//// "kaminuSk" 3
/// spalva - "geltona-oranzine"

namas.kaminuSk = 3;
namas.spalva = "geltona-oranzine";
console.log(namas); //pasitikrinam

// ideti f-ja "stoveti()" kuri isveda y konsole "stoviu"
// ideti f-ja "remontas()" kur isveda y konsole "jauneju"
//===========================================================////
// anonimine funkcija (neturi pavadinimo, todel isisaukia pati save, tik kompiuteriui tik perskaicius ja)

$('h1').click ( function()   {
    console.log("as save issisaukiau");
} );

// arba (arba kitoks paprastos funkcijos kurimo budas)

var kalbeti = function () {
    console.log( " kablbu " );
};
kalbeti();


//======================================//////

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
var mokinys = {
  vardas: "Tomas",
  pavarde: "Tomauskas",
  klase: 8,
  matematikosPazymiai:  [6, 5,  9, 10,  8]
}
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log(mokinys);

console.log("vardas:" + mokinys.vardas);
console.log("pavarde:" + mokinys.pavarde);
console.log("klase:" + mokinys.klase);
console.log("matematikosPazymiai :" + mokinys.matematikosPazymiai);

// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika
var tevas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  vaikas: []
  // toki vaikas: [] gerai turti nes galima ateityje tokio ieskoti ir tu vaiku gali buti daugiau
};


var vaikas = {
  vardas: "Minde",
  klase: "8A"
}
console.log(tevas);
console.log(vaikas);
//  [0] gali buti ir daugiau vaiku
tevas.vaikas [0] = vaikas;
// //// arba
//====================///////////////
//  tevas.vaikai.push ( vaikas ); /// galima ir taip daryti
// console.log( " po vaiko gimimo");
// console.log( tetis );
//////////====================///////////////////

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

//============3=pvz: construktorius =====
function Car(nr, c, ms) {
    this.numberOfDoors = nr; //this kadangi construktor viduje, tai jis neislipa uz funkcijos
    this.color = c;
    this.maxSpeed = ms;
}

// objekto kurimas
var AudiTT = new Car('AAA000', "red", 280);   // this.nuberOfDoors = AudiTT.numberOfDoors
var Golf = new Car('GOF444', "juoda", 180);   // this.nuberOfDoors = Golf.numberOfDoors


console.log("Audi maksimalus greitis:", AudiTT.maxSpeed);
console.log("Audi spalva:", AudiTT.color);
console.log("Audi duru skaicius:", AudiTT.numberOfDoors);
