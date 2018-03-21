console.log( " Labas ");
//

var namas = {
  aukstuSk:4,
  butuSk:109,
  sildymas:"dujos",
  stovejimas: function () {
        console.log("Stoviu.....................");
        console.log("vis dar stoviu");
      },
  laikas: function(){
    console.log("Jauneju");
  }
};

console.log(namas);
console.log("Namo aukstu skaicius:", namas.aukstuSk+";");
console.log("Namo butu skaicius:",namas.butuSk+";");
console.log("Namo sildymo tipas:",namas.sildymas+";");


namas.kaminuSk=5;
namas.spalva="geltona-oranzine";

console.log(namas);
console.log("Namo kmainu skaicius:",namas.kaminuSk);
console.log("Namo spalva:",namas.spalva);

(function (){console.log("save issaukiau pati");})();

$('h1').click(function (){console.log("ir vel save issaukiau");});

var kalbeti=function(){console.log("kalbu");};
kalbeti();

namas.stovejimas();


// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)

var Mokykla = {
  vardas: 'Aurimas',
  pavarde: "Klastauskas",
  kelintokas: 12,
  pazymiai: [6,5,9,10,8]
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(Mokykla);

// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas

var Tevas = {
  vardas: "Peter",
  pavarde: "Smith",
  vaikelis: "Timmy"
};
// 2) vaikas: klase, vardas
var Vaikas = {
  klase: "6A",
  vardas: "Timmy"
};
// 3) priskirti tevo objekui (kintamajam) vaika
Tevas.sunus=Vaikas;

console.log(Vaikas);
console.log("Objektui priskyrem objekta:",Tevas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

// var darbuotojas ={
//   nr: 1,
//   vardas: "Jhon",
//   pavarde: "Clarkson",
//   alga: "Classified"
// };

function darbuotojas(nr,vard,pav,alg){
    this.workerNR = nr;
    this.pavarde = pav;
    this.alga = alg;
}
var Darbuotojai = {

};

var Pirmas = new darbuotojas(1,"Peter","Cash",500);
console.log(Pirmas);
var Pirmas1 = new darbuotojas(2,"Peter","Cash",500);
console.log(Pirmas1);
console.log(Pirmas.alga);


Darbuotojai.pirm=Pirmas;
Darbuotojai.antr=Pirmas1;
console.log(Darbuotojai);

// var Darbuotojai = {
//
// };
// // Darbuotojai.fir=Pirmas;
// // Darbuotojai.sec=Pirmas;
// console.log(Darbuotojai);

//============3=pvz: construktorius =====
// function Car(nr, c, ms) {
//     this.numberOfDoors = nr; this.numberOfDoors == var AudiTT.numberOfDoors
//     this.color = c;          this.color == var AudiTT.color del to nereikia var rasyti prie "var this.color", nes color jau yra var.
//     this.maxSpeed = m;
// }
//
// // objekto kurimas
// var AudiTT = new Car('AAA000', "red", 280);
