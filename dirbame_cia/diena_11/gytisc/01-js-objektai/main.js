console.log( " Labas ");

var namas = {
  aukstuSk: 4,
  butuSk: 109,
  sildymas: "dujos",
  stoviu: function () {
    console.log(" stoviu stoviu stoviu... ");
    console.log(" stoviu... ");
  },
  remontas: function () {
    console.log("jauneju :)");
  }
};
namas.stoviu();
namas.remontas();

console.log(namas);

console.log("namo auksu skaicius: " + namas.aukstuSk);
console.log("namo butu skaicius: " + namas.butuSk);
console.log("namo sildymo tipas: " + namas.sildymas);

// pridedame daugiau anksciau nebuvusiu kintamuju

namas.kaminuSk =3;
namas.spalva = "geltona-oranzine";

console.log(namas); // pasitikrinimui ar isvedama

// isvedame naujus kintamuosius i sarasq

console.log("namo kaminu skaicius: " + namas.kaminuSk);
console.log("namo spalva: " + namas.spalva);

// anonimine f-ja (neturi pavadinmo, todel issaukia pati save, tik kompiuiteriui ja perskaicius)


// kad ja paleisti reikia tureti kintamaji
$("h1").click ( function () {
  console.log("as save issaukiau");
});

// arba (kitoks paprastos f-jos kurimo budas)

var kalbeti = function () {
  console.log("kalbu");
};
kalbeti();


//

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)

var mokinys = {
  vardas: "Joniukas",
  pavarde: "Jonaitis",
  kelintokas: "Antrokas",
  pazymiai: [6, 5, 9, 10, 8]
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log(mokinys);
console.log("Mokinio vardas: " + mokinys.vardas);
console.log("Mokinio Pavardė: " + mokinys.pavarde);
console.log("Kelintokas: " + mokinys.kelintokas);
console.log("Pažymiai: " + mokinys.pazymiai);

// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika

var tevas = {
  vardas: "Antanas",
  pavarde: "Antanaitis",
  vaikas: {}  // nurodome nulin5 objekta {} - objektas
};

var vaikas = {
  vardas: "Algiukas",
  klase: "9A"
};

// tevas.sunus = vaikas; // arba kuriamia nauja objekta

console.log (tevas);

// arba dar
// teteis.vaikas.push (vaikas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

//============3=pvz: construktorius =====
function Car(nr, c, ms) {
    this.numberOfDoors = nr;
    // this - kadangi constructor viduje, tai jis neislipa uz fžjos
    this.color = c;
    this.maxSpeed = ms;
}

// objekto kurimas
var AudiTT = new Car("AAA000", "red", 280);     // this.numberOfDoors == AudiTT.numberOfDoors
var Golf = new Car("GOF444", "juodas", 180);    // this.numberOfDoors == Golf.numberOfDoors

console.log("Maksimalus greitis", AudiTT.maxSpeed);
console.log("Spalva", AudiTT.color);
