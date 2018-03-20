console.log( " Labas ");



// =================taisyklingas Array copy  =================
// NOTE: var arr2 =  arr1; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var arr1 = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
var arr2a = arr1.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var arr2b = arr1.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy
// ================= ========= ======== ========


ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];






// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
var ilgis = names.length;
console.log("vardu skaicius:" + ilgis );

for (var i = 0; i < names.length; i++) {
  // tikrinu ar stalcius yra "Rico"
  if ( names[i] == "Rico") {
    console.log("Radau Rico", i);
  }
}

/////======ARBA kitas metodas======////////
var ilgis = names.length;
console.log("vardu skaicius:" + ilgis );

var nr = 0;
var ieskome = "Rico";


for (var i = 0; i < names.length; i++) {
  // tikrinu ar stalcius yra "Rico"
  if ( names[i] == ieskome ) {
    console.log("Radau Rico", nr, i);
  }
  nr++;
}
/////////////////////////////////////////////////////

function ieskotiVienoVardo() {
  var ieskome = "Rico";


  for (var i = 0; i < names.length; i++) {
    // tikrinu ar stalcius yra "Rico"
    if ( names[i] == ieskome ) {
      console.log("Radau pirmaji Rico",  i);
      break;
    }
}
}
ieskotiVienoVardo();
/////////////////////////////////////////

// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"
function ieskotiVienoVardo2() {
  var ieskome = "Rico"; ///localus
  var arRadau = false;// localus "neradau"

  for (var i = 0; i < names.length; i++) {
    // tikrinu ar stalcius yra "Rico"
    if ( names[i] == ieskome ) {
      console.log("Radau pirmaji Rico",  i);
      arRadau = true; // "radau"
      break;
        }
      }
      //tikrinam ar suradom
      if (arRadau == false) { // "neradau"
        console.log(" nepavyko rasti ");
      } else {
        console.log("suradau");
      }
    }
 ieskotiVienoVardo2()
///////////////////////////////////////

// UZDUOTIS
var atlyginimas = 500;
var arPasikeite = false;
//UZDUOTIS
// A) patikrinti ar "atlyginimas" papidejo ir pranesti - ar  padidejo. Jeigu padidejo pranesti - jeigu ne - irgi pranesti
// B) padidinti "atlyginimas" vienu simtu. Ir vel  patikrinti ar "atlyginimas" papidejo
atlyginimas += 100; // atlyginimas = atlyginimas + 100
if (atlyginimas > 500) {
  arPasikeite = true;
} else {
  var arPasikeite = false;

}
if ( arPasikeite == true) {
  console.log("atlyginimas, kazkiek padidejo \n ");
} else {
   console.log( "atlyginimas, nepasikeite");
}
// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

// uzduots:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];  isvesti ju pavardes ir vardus
var ilgis = names.length;
console.log("vardu skaicius:" + ilgis );

var nr = 0;
var ieskome = "Freida";


for (var i = 0; i < names.length; i++) {
  // tikrinu ar stalcius yra "Rico"
  if ( names[i] == ieskome ) {
    console.log("Radau"+ieskome, nr, i);
  }
  nr++;
}


console.log("Freidos pavarde yra:", lastNames[37]);


//5
var ieskomiZmones = [2, 16, 17, 18, 19, 25];

for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log("vardas pavarde:" , names[i], lastNames[i]);

}




var a = Math.random(); // 0 - 1
if ( a <= 0.1) {
    console.log("laimejai");
}
console.log("burtu skaicius:",a);
