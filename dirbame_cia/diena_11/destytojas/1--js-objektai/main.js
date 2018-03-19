console.log( " Labas ");

//==================================================
//

// 1 UZDUOTIS:
// sukurti mokinio objekta  : vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
var moksleivis = {
    vardas: "Timi",
    pavarde: 'Timotis',
    kelintokas: "7b",
    matematikosPazymiai : [6, 5, 9 , 10, 8]
};


// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(   moksleivis  );

console.log(   moksleivis.vardas    );
console.log(   "is matematikos pirmas pazymys", moksleivis.matematikosPazymiai[0]  );


// 2 UZDUOTIS: sukurti 2-u objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika
var tetis = {
    vardas: "Jonas",
    pavarde: 'Jonaitiniatis',
    vaikai: []
};
var vaikas = {
    vardas: 'Tim',
    klase: '9A'
}
console.log( tetis );
console.log( vaikas );
tetis.vaikai[0] = vaikas;
// arba
// tetis.vaikai.push( vaikas );

console.log(" po vaiko gimimo ");
console.log( tetis );

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga

////============3=pvz: construktorius =====
function Car(nr, spalva, greitis) {
    this.numberOfDoors = nr;
     // this kadangi contruktor viduje, tai jis neislima uz f-jos
    this.color = spalva;
    this.maxSpeed = greitis;
}

// objekto kurimas
var AudiTT = new Car('AAA000', "red", 280);  // this.numberOfDoors  == AudiTT.numberOfDoors
var Golf = new Car('GOF444', "juodas", 180); // this.numberOfDoors  == Golf.numberOfDoors


console.log("Audi maksimalus greitis:", AudiTT.maxSpeed   );
console.log("Audi spalva: ", AudiTT.color   );

//
