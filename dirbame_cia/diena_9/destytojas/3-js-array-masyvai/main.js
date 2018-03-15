console.log( " Labas ");


// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
	// UZDUOTIS
	var prekiautojai = []; // empty array

	prekiautojai[0] = "IKI";
	console.log(  "prekybos centrai:", prekiautojai  );
	prekiautojai[1] = "Maxima";
	prekiautojai[2] = "Lidl";
	prekiautojai[3] = "Rimi";
	prekiautojai[50] = "Cia Market";

	// A) pervadinti pirma stalciu
	prekiautojai[1] = "Barbora";

	// B) sukeisti antro ir trecio stalciu reiksmes vietomis.
	// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

	// C) padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
//
// .length
// .join()
// .shift()
// .pop()



// =========================================================
// uzduotis  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
keliautojas.push( "butelis vandens");
// keliautojas[  keliautojas.length ]  =  "butelis vandens";
// keliautojas.splice( 4, 0, "butelis vandens");
// keliautojas[4] = "butelis vandens";

// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
keliautojas.unshift( "ziebtuvelis");
// keliautojas.splice( 0, 0, "ziebtuvelis");

// 3. istrinti 3-cia elmenta
delete keliautojas[3];
// keliautojas.splice( 3, 1);
// keliautojas[3] = "";

//----------------
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
var masyvas = [];
for (var i = 0; i < 50; i++) {
    masyvas[i] = 0; // "i"   - vis dideja po viena
    // masyvas.push( 0 );
}
console.log( "masyvas:", masyvas);

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....


for (var i = 0; i < 50;   i = i + 2) {
    masyvas[ i + 1 ] = 3;    // "i"   - vis dideja po viena
}
console.log( "masyvas:", masyvas);

for (var i = 0; i < 50;   i++) {
    masyvas[ i + 1 ] = 3;    // "i"   - vis dideja po viena
    i++; 
}
console.log( "masyvas:", masyvas);

// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....


//=============bootstrap---sm-md-lg-xl (30-60m)==========
