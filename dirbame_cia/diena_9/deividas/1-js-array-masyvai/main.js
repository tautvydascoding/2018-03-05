console.log( " Labas ");




var prekybosCentrai = [];

prekybosCentrai[0] = "IKI";
prekybosCentrai[1] = "Maxima";
prekybosCentrai[2] =  "Rimi";
prekybosCentrai[3] = "Norfa";
prekybosCentrai[4] = " Lidl";
console.log( prekybosCentrai );
//
// A) pervadinti pirma stalciu
 prekybosCentrai[1] = "Barbora";
console.log( prekybosCentrai[1] );
// B) sukeisti antro ir trecio stalciu reiksmes vietomis.
// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

// console.log(prekybosCentrai[3]); //paemimas
// prekybosCentrai[2] =" Norfa "  ;
// prekybosCentrai[3] = " Rimi " ;
// console.log( prekybosCentrai);

 var x  = prekybosCentrai[2];
 prekybosCentrai[2] = prekybosCentrai[3] ;
 prekybosCentrai[3] = x ;
 console.log( prekybosCentrai );
// C) padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)
 //
function sukeistiMasyvo2elementus(nr1 , nr2 ) {
var x = prekybosCentrai[ nr1 ] ;

prekybosCentrai[ nr1 ] = prekybosCentrai[ nr2 ] ;
prekybosCentrai[ nr2 ] = x ;
}
sukeistiMasyvo2elementus (0, 3)
console.log(prekybosCentrai );



// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);

.length
.join()
.shift()
.pop()



// =========================================================
// uzduotis  Array
keiautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");


// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....


//=============bootstrap---sm-md-lg-xl (30-60m)==========
