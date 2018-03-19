console.log( " Labas ");

//

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)

var x={
  vardas: "Jonas",
  pavarde: "Jonaitis",
  klase: "3B",
  matematikapaz: [6, 5, 9 , 10, 8]
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log (x.vardas, x.pavarde, x.klase, x.matematikapaz);


// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika

var tetis = {
  vardas: "Jonukas",
  pavarde: "Jonaitiukas",
};
var vaikas = {
  vardas: "Karolis",
  klase: "5A"
};
console.log(tetis);
console.log(vaikas);
//arba ..................
//


// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

//============3=pvz: construktorius =====
function Car(nr, c, ms) {
    this.numberOfDoors = nr; // this - kadangi constructor viduje, jis neislipa uz funcijos ?
    this.color = c;
    this.maxSpeed = m;
}

// // objekto kurimas
var AudiTT = new Car('AAA000', "red", "280");// this.numberOfDoors == AudiTT.numberOfDoors
var Golf = new Car('GOF444', "juodas", "180");// -------//--------


console.log("Audi maksimalus greitis", AudiTT.maxspeed);
console.log("Audi spalva", AudiTT.color);
//ar veikia???
