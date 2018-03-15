console.log( " Labas ");

var vardai = [];
vardai [0] = "Jonas";
vardai [1] = "Timis";
vardai [2] = "Garfildas";
vardai [3] = "Elena";
vardai [4] = "Pilkis";

console.log(vardai.toString());
document.write( vardai.toString());

console.log(vardai.join(" :: "));  //skiriklis

vardai.push("Marta");
vardai.push(999);
console.log(vardai.join(" ")); // idedam paskutini i masyvo gala/stalciu

vardai.pop(); // istrina paskutini elementa/stalciu is masyvo
console.log(vardai.join());

vardai.shift(); // istrina 0 stalciu ir paslenka visus kitus
console.log(vardai);

delete vardai[2]; //ištrina "2" elementą/stalciaus turinį (pati stalciu palieka, o istrina tik jo turinį)
console.log(vardai);

vardai.unshift("as priekyje"); // sukuria stalciu ir ji ideda priekyje masyvo


//lenght -ilgis
var masyvoIlgis = vardai.lenght;
vardai[masyvoIlgis] = "Paskutinis vardas";
// arba
// vardai.push( "Paskutinis vardas su Push" );
console.log(masyvoIlgis);

// Masyvo vidurys

vardai[20] = "azuolas";
console.log(vardai);

vardai.splice(10); //istriname nuo 10 visus likusius
console.log(vardai);

// iterpimas; 1 - kur iterpti; 0 - kiek istrinti
vardai.splice( 1, 0, "statine medaus", "pieno", "batono");
console.log(vardai);

// kopijuoja masyva
// nuo 2 iki 4
var dalisVardu = vardai.splice(2, 4);
console.log("kopija", dalisVardu);

// -------- kas butu jeigu darom masyvo kopijuoja
var x = vardai;
console.log( "x:", x );
console.log( "vardai", vardai);

// istriname 3 ir 4
delete x[3];
delete x[4];
console.log( "x:", x );
console.log( "vardai", vardai);
