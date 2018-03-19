console.log("labas");

// =================taisyklingas Array copy  =================
// // NOTE: var arr2 =  arr1; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
// var arr1 = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
// var arr2a = arr1.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
// var arr2b = arr1.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy
// // ================= ========= ======== ========





// UZDUOTIS
// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"


// ieskomiZmones = [2, 16, 17, 18, 19, 25];
//
// var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];
//
// var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];


// function ieskotiVienoVardo() {
//     var ieskome = "Rico";
//
//     for (var i=0; i < names.length; i++) {
//       // tikrinu ar stalcius yra "Rico"
//         if (names[i]==ieskome) {
//         console.log("Radau Rico", i);
//         break;
//     }
//   }
// }
// ieskotiVienoVardo();
//
// function ieskotiVienoVardo() {
//     var ieskome = "Rico";
//
//     for (var i = 0; i <  names.length; i++) {
//         // tikrinu ar stalciuje yra "Rico"
//         if (  names[i] == ieskome ) {
//             console.log("Raudau pirmaji Rico",  i );
//             break;
//         }
//     }
// }
// ieskotiVienoVardo();

// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"

// var neranda = "pranesimas";
// if (ieskotiVienoVardo == "Rico") {
// } else {
//   console.log("Nepavyko rasti...Bandykite kita zodi");
// }

//
// var atlyginimas = 500;
// var arPasikeite = false;
//
// if (atlyginimas > 500) {
//   arPasikeite = true; // taip, arPasikeite
// } else {
//   arPasikeite = false; // nepasikeite
// }
//
// if (arPasikeite == true) {
//   console.log("atlyginimai, kazkiek padideja \n");
// } else {
//   console.log("atlyginimas, nepasikeite");
// }

// 2 UZDUOTIS (f-ja ieskom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)





// uzduots:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)

// console.log("Freidos pavarde yra:", lastName[37]);

// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];  isvesti ju pavardes ir vardus

// ieskomiZmones = [2, 16, 17, 18, 19, 25];
//
// for (var i = 0; i < ieskomiZmones.length; i++) {
//   console.log("vardas pavarde:", names[i], lastNames[i]);
// }


var a = Math.random(); // 0 - 1
if ( a <= 0.5) {
    console.log("laimejai");
}
console.log("burtu skaicius:", a);
