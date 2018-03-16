

var vardai = [];
vardai[0] = "PirmasVardas";
vardai[1] = "AntrasVardas";
vardai[2] = "TreciasVardas";
vardai[3] = "KetvirtasVardas";
vardai[4] = "PenktasVardas";


console.log( vardai.toString());

document.write( vardai );

console.log( vardai.join("  "));

vardai.push("SIAIPIDEDU");
vardai.push("DARkartaIDEDU");

console.log( vardai);

vardai.pop();
console.log(vardai);

vardai.shift();
console.log(vardai);

delete vardai[2];
console.log(vardai);

vardai.unshift("IdeduIPrieky");
 console.log(vardai);

 var masyvoIlgis = vardai.length;
 vardai [masyvoIlgis] = "paskutinis vardas";
 console.log(masyvoIlgis);

 vardai.splice(2);
 console.log(vardai);

 vardai.splice(1, 0, "sita iterpiu", "dar sita");
 console.log(vardai);

 var x = vardai.slice(2,3);
 console.log("kopija", x);

 var x = vardai;
 console.log("x", x);
 console.log( "vardai", vardai);

 delete x[2];
 delete x[3];
 console.log("x", x);
 console.log( "kopija", vardai);

 var kopija = vardai.concat();
 console.log("kopija", kopija);




 var keliautojas = ["Tomas", "Pietkus", 25, "VDU"];
 //uzduotis
 //1.// 1. i masyvo gala ideti elmenta "butelis vandens"
 keliautojas.push("butelis vandens");
 console.log(keliautojas.join(" "));

 //2.// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"

 keliautojas.unshift("ziebtuvelis");
 console.log(keliautojas);

// 3. istrinti 3-cia elmenta

keliautojas.splice(4, 1);
console.log(keliautojas);

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

var masyvas=[];



 for (var i=0; i<51; i++){
   masyvas[i] = 1;
   console.log(i);
}
console.log("masyvas", masyvas);

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9

//for (var i=0; i<51; i= i+2 ){


 //masyvas[i + 1] = 3;

for (var i=4; i < 51; i= i +5){
 masyvas [i] = 9;
 }



//}
console.log(masyvas);
