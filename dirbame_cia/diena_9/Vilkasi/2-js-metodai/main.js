// =========================================================
// uzduotis  Array
// keiautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];


// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta
var keliautojas = ["Tomas","Pietkus", 25, "VDU - inzinerija"];
keliautojas.push("butelis vandens");
keliautojas.unshift("ziebtuvelis");
delete keliautojas[3];

console.log(keliautojas);

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

// var mas =[];
// for (var i = 0; i <50; i++) {
// mas[i]=0;    //i vis dideja po viena
// }
// console.log(mas);



// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
var masyvas =[];
for (var i = 0; i <50; i=i+2 ) {
masyvas[i+1]=3;
i=i+4;
masyvas[i]=9;
}
console.log(masyvas);
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....


//=============bootstrap---sm-md-lg-xl (30-60m)==========

var vardai = [];
vardai[0] = "Tadas";
vardai[1] = "Vladas";
vardai[2] = "Tomas";
vardai[3] = "Kestas";
vardai[4] = "Jonas";
vardai[5] = "Paulius";
vardai[6] = "Ignas";
vardai[7] = "Minde";
vardai[8] = "Donce";
vardai[9] = "Lukas";
vardai[10] = "Pofke";
vardai[11] = "Deivis";
vardai[12] = "Lauris";

console.log(vardai.toString());
document.write( vardai.toString() );


console.log(vardai.join(" :"));

vardai.push("Marta");
vardai.push("Zigra"); //deda i masyvo gala
console.log(vardai);

vardai.pop();    //istrina paskutini elementa
console.log(vardai);


//masyvo priekis
vardai.shift(); //istrina 0-linta elementa, ir paslenka visus kitus
console.log( vardai );

delete vardai[2];   //istrina 2-ta elementa/ stalciaus turini (pati stalciu palieka, o istrina tik jo vidu)
console.log( vardai );

vardai.unshift("as priekyje"); //ideda i masyvo priekis
console.log( vardai );



var masyvoIlgis = vardai.lenght;
vardai[masyvoIlgis] = "Paskutinis vardas";
console.log(masyvoIlgis);

vardai.push("Paskutinis vardas");

console.log(masyvoIlgis);

vardai[20] = "azuolas";
console.log(vardai);

vardai.splice(10);
console.log(vardai);

vardai.splice(1,0,"bulves bulvikes","razynkos");
console.log(vardai);
//KOPIJUOJA MASYVA
//nuo 2 iki 4
var dalisVardu = vardai.slice(2,4);
console.log("kopija", dalisVardu);


var x = vardai;
console.log("x:", x );
console.log("vardai:",vardai);

delete x[3];
delete x[4];

var kopija = vardai.concat();
console.log(kopija);
