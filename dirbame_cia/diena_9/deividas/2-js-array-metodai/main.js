console.log( " Labas ");



var vardai = [];
vardai[0] = "Jonas";
vardai[1] = "Timis";
vardai[2] = "Garfildas";
vardai[3] = "Elena";
vardai[4] = "Pilkis";

console.log( vardai.toString() );
document.write ( vardai.toString() );

console.log( vardai.join(" ::") ); // :: - skyriklis

vardai.push( "Marta" ); // i masyvo gala idedame "999" skaiciu
vardai.push( 999 ); // i masyvo gala idedame "999" skaiciu
console.log( vardai );
vardai.pop(); //ISTRINAM PASkUTINI STALCIU-arba elementa


 //------- masyvo priekis -----//

vardai.shift(); //istrina 0 elementa/stalciu ir paslenka visus kitus
console.log(vardai);

delete vardai[2]; //istrina "2" elementa/ istrina stalciaus turini (stalciu palieka, istrina tik vidu)
console.log(vardai);

vardai.unshift( "as priekyje"); // ideda y masyvo prieki

// length - ilgis
var masyvoIlgis = vardai.length;
vardai [ masyvoIlgis ] = "Paskutinis vardas";

// arba
// vardai.push("Paskutinis vardas su push");  ////////////
console.log( masyvoIlgis );

// -----------masyvo vidurys -------//
 vardai[20] = "azuolas";
 console.log(vardai);

 vardai.splice( 10 ); //istriname nuo 10 visus likusius
 console.log(vardai);
///------ iterpimas; 1- kur iterpti ; 0 - kiek istrinti
//"statine medaus", "pieno", "batona"- ka iterpeme
vardai.splice( 1, 0, "statine medaus", "pieno", "batona");

//kopijuoja masyva
// nuo 2 iki 4
var dalisVardu = vardai.slice(2, 4);
console.log("kopija", dalisVardu);

////--- kas butu jeigu darom masyvo kopijuoja
var x= vardai;
console.log("x:", x);
console.log("vardai:", vardai);

//istriname 3 ir 4
delete x[3];
delete x[4];

console.log("x:", x);
console.log("vardai:", vardai);

var kopija = vardai.concat();
console.log( 'kopija', kopija );
