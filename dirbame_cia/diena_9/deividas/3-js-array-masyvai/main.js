console.log( " Labas ");

// =========================================================
// uzduotis  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
keliautojas.push("butelis vandens");
console.log(keliautojas);
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
keliautojas.unshift("ziebtuvelis");
console.log(keliautojas);
// 3. istrinti 3-cia elmenta
delete keliautojas[3];
console.log(keliautojas);
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
 var masyvas = [];
    for (var i = 0; i < 50; i++) {
      masyvas [i] = 0; /// "i" -vis dieja po viena
// arba masyvas.push (0);
    }
    console.log( "masyvas:", masyvas);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;


// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
for (var i = 0; i < 50; i=i+2) {
  masyvas [i+1]=3 ;

}
console.log( "masyvas:", masyvas);


for (var i = 0; i < 50; i++) {
  masyvas[i+1] = 3;
  i++;

}
console.log( "masyvas:", masyvas);


   // for (var i = 0; i < 50; i++) {
   //   masyvas[i] = 0; /// "i" -vis dieja po viena
   //
   // }
   // console.log( "masyvas:", masyvas);
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
for (var i = 0; i < 50; i=i+5) {
  masyvas [i+4]=9 ;

}
console.log( "masyvas:", masyvas);



//=============bootstrap---sm-md-lg-xl (30-60m)==========
