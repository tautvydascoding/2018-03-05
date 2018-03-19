console.log(" OPP Objektinis programavimas ");


var namas = {
    aukstuSk: 4,
    butuSk: 109,
    sildymas: "dujos",
    stoviu: function() {
        console.log("stoviu stovviu...");
    },
    remontas: function() {
        console.log("jauneju...");
    }
};

console.log(namas);
console.log("namo aukstu skaicius:" + namas.aukstuSk);
console.log("namo butu skaicius:" + namas.butuSk);
console.log("namo sildymo tipas:" + namas.sildymas);


namas.kaminuSk = 3;
namas.spalva = "geltona - orandzine";
console.log(namas);



$('h1').click(
    function() {
        console.log("as save issisaukiau");
    }
);

var kalebeti = function() {
    console.log("kalbu");
};

kalebeti();

namas.stoviu();
namas.remontas();

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)

var mokinys = {
    vardas: "Pofke",
    pavarde: "Kelmauskas",
    kelintokas: 6,
    matematikosPazymiai: [6, 5, 9, 10, 8]


};
console.log(mokinys);


// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika

var tevas = {
    vardas: "Jonas",
    pavarde: "Jonauskas",
    vaikas: "Tadas"
};

var vaikas = {
    vardas: "Tadas",
    klase: 8
};

tevas.vaikas = vaikas;
console.log(tevas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

function darbuotojas(nr, vardas, pavarde, alga) {
    this.nr = nr;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.alga = alga;
}

var gamybininkas = new darbuotojas(1, 'Kazys', 'Malinauskas', 650);
var dizaineris = new darbuotojas(2,'Juste','Maukaite', 700);
var vadybininkas = new darbuotojas(3,'Irmina','Neminaite',600);

dizaineris.stazas = 1;

console.log("Darbuotojo atlygis:", dizaineris.alga);
// ============3=pvz: construktorius =====
// function Car(nr, c, ms) {
//     this.numberOfDoors = nr;
//     this.color = c;
//     this.maxSpeed = m;
// }
//
// // objekto kurimas
// var AudiTT = new Car('AAA000', "red", 280);
