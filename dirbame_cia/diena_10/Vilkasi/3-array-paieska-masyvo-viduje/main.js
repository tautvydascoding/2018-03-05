console.log("labas");

// =================taisyklingas Array copy  =================
// NOTE: var arr2 =  arr1; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var arr1 = ['a', 'b', 'c']; // Becomes arr1 = ['a', 'b', 'c']
var arr2a = arr1.slice(0); // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var arr2b = arr1.concat(); // Becomes arr2b = ['a', 'b', 'c'] - deep copy
// ================= ========= ======== ========





// UZDUOTIS
// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)

ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];


var ieskome = "Freida";
var arRadau = 0;

for (var i = 0; i < names.length; i++) {
    //tikrinu ar stalcius yra Rico
    if (names[i] == ieskome) {
        arRadau = 1;
        console.log("Radau:"+ieskome, i);
    } else if (i == arRadau) {
        console.log("Nepavyko rasti");
    }
}


var arPasikeite = false;


var atlygis = 500;
if (atlygis>500) {
  var arPasikeite = true;
} else {
  var arPasikeite = false;
}

if (arPasikeite == true) {
  console.log("atlyginimas,kazkiek padidejo\n");
} else {
  console.log("atlyginimas nepasikeite");
}
//patikrinti ar atlygis padidejo ir pranesti ar padidejo ar ne




// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"


// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

// uzduots:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
console.log( "Freidos pavarde yra:", lastNames[37]);
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];  isvesti ju pavardes ir vardus
ieskomiZmones = [2, 16, 17, 18, 19, 25];
for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log("Ieskomas zmogus:",names[i],lastNames[i]);
}
// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }

ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];


// for (var i = 0; i < names.length; i++) {
// if  (names[i] == "Rico"){
//   console.log(names);
// }
// }
