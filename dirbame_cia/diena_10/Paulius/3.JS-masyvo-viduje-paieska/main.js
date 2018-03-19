console.log( " Labas ");

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
var ilgis = names.length;
console.log("vardu skaicius-" + ilgis);

  for (var i = 0; i < names.length ; i++) {
    if (names[i] == "Rico") { //tikrinu ar rico
      console.log("stai", i);
    }
  }

  // ieskome tik pirmo rico=====
  // neradus ismesti pranesima

  function ieskauVienoRico(){
    var ieskome = "Rico";
    var neradau = false;
    for (var i = 0; i < names.length; i++) {
      if (names[i] == ieskome) {

        neradau = true;
        break;
      }
    }
        if(neradau == false){
          console.log("KLAIDA-TOKIO NERA");}
          else{
            console.log("stai pirmasis", i);
          }
}
ieskauVienoRico();



// UZDUOTIS
// a.patikrinti ar atlygis padidejo ir pranesti ar
// padidejo ar ne
// b. padidinti atlyginima ir vel patikrinti
    var atlyginimas = 500;
    var kitasAtlyginimas = false;
    atlyginimas += 200;
      if(atlyginimas > 500){
        kitasAtlyginimas = true;
      }
        else{
          kitasAtlyginimas = false;
        }
        if(kitasAtlyginimas == true){
          console.log("atlyginimas pasikeite");
} else{
  console.log("atlyginimas nepasiekite");
}

// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];  isvesti ju pavardes ir vardus

var ieskomiZmones = [2, 16, 17, 18, 19, 25];
      for (var i = 0; i < ieskomiZmones.length; i++) {
        console.log(names[i], lastNames[i]);      }


  var a = Math.random();
  if (a<=0.5);{
  console.log("Laimejai");
} console.log("burtu skaicius-", a);
