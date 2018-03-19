



// console.log("labas");

// =================taisyklingas Array copy  =================
// // NOTE: var arr2 =  arr1; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
// var arr1 = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
// var arr2a = arr1.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
// var arr2b = arr1.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy
// ================= ========= ======== ========

// var namelist= ["Matilda", "Darmantas", "Karigailė","Klemensas", "Lukrecija","Tautas", "Tautgintė","Lionginas","Julijonas", "Vaidotas", "Norvaldė","Henrika", "Norvilė","Tautginė","Raigardas","Adeira", "Adelaina", "Adelšoda", "Airilė", "Airistėja", "Alkimena","Amaris", "Amija", "Anisa", "Aramėja", "Astilija", "Atinuke", "Damajanti", "Domila", "Edina", "Eglina", "Egvilina", "Eilina", "Eivija", "Erolina", "Ezekielė", "Feličija", "Fortūnė", "Gudeira", "Gvena", "Heda", "Ijonela", "Ilisa", "Imogen", "Isla", "Ivetė", "Kristabelė", "Lagerta", "Lavinia", "Leora", "Lyrika", "Maisa", "Maitane", "Meivė", "Milaja"];
var namelist= ["Matilda", "Darmantas", "Karigailė","Matilda", "Lukrecija","Tautas", "Tautgintė","Lionginas","Julijonas", "Vaidotas", "Norvaldė","Henrika", "Norvilė","Tautginė","Raigardas","Adeira", "Adelaina", "Adelšoda", "Airilė", "Airistėja", "Alkimena","Amaris", "Amija", "Anisa", "Aramėja", "Astilija", "Atinuke", "Damajanti", "Domila", "Edina", "Eglina", "Egvilina", "Eilina", "Eivija", "Erolina", "Ezekielė", "Feličija", "Fortūnė", "Gudeira", "Gvena", "Heda", "Ijonela", "Ilisa", "Imogen", "Isla", "Ivetė", "Matilda", "Lagerta", "Lavinia", "Leora", "Lyrika", "Maisa", "Matilda", "Meivė", "Milaja"];
var a=0;
function Vardopaieska (x){
  console.log("vardas",x+" masyve uzima:");
  for (var i = 0; i < namelist.length; i++) {
    if (namelist[i]==x) {
      console.log(i+" vieta;");
      a=a+1;
    }
  }
  if (a==0) {
    console.log("Atsiprasome, tokiu vardu masyve nera, bandykite rasti kita :/");
  }
}
Vardopaieska("Matilda");
// UZDUOTIS
// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"



// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)



// uzduots:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];  isvesti ju pavardes ir vardus



// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }
console.log("===================================================================");
ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

var j=0;
function ieskomizmonesradimas (x,y,z){
  console.log("Ieskomu zmoniu vardai yra:");
    for (var i = 0; i < x.length; i++) {
       j=x[i];
      console.log(y[j]+" "+z[j]);
      }

}
ieskomizmonesradimas(ieskomiZmones,names,lastNames);
