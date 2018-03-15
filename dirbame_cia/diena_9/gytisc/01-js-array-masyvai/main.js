console.log( " Labas ");

// var komoda = ["kelnes", "marskiniai", "pinigai", 110];
// var x = []; //tuscias masyvas
// komoda[0] = "sijonas"; // pakeitimas/idejimas
// console.log(komoda[3]);
// var skaicius = komoda[3];

// var prekybosCentrai = [];
//
// prekybosCentrai[0] = "IKI";
// prekybosCentrai[1] = "MAXIMA";
// prekybosCentrai[2] = "RIMI";
// prekybosCentrai[3] = "LIDL";
//
// console.log(prekybosCentrai);

// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
	// UZDUOTIS

  var prekybosCentrai = [];

  prekybosCentrai[0] = "IKI";
  prekybosCentrai[1] = "MAXIMA";
  prekybosCentrai[2] = "RIMI";
  prekybosCentrai[3] = "LIDL";
  prekybosCentrai[4] = "BARBORA";

  console.log(prekybosCentrai);

	// A) pervadinti pirma stalciu

  prekybosCentrai[1] = "Barbora";
  console.log(prekybosCentrai[1]); //paemimas

	// B) sukeisti antro ir trecio stalciu reiksmes vietomis.
	// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

  // var str, s, tmp, temp, txt =
  console.log(prekybosCentrai[3]);
  var x = prekybosCentrai[2]; //isaugome RIMI
  prekybosCentrai[2] = prekybosCentrai[3]; //irasome LIDL
  prekybosCentrai[3] = x ; //
  console.log(prekybosCentrai);

	// C) padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

  function sukeistiMasyvo2elementus(nr1, nr2) {
      var x = prekybosCentrai[nr1];
      prekybosCentrai[nr1] = prekybosCentrai[nr2];
      prekybosCentrai[nr2] = x;
  }
  sukeistiMasyvo2elementus(0, 2);
  console.log(prekybosCentrai);
// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
// names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];
//
// console.log(names);
//
// .length
// .join()
// .shift()
// .pop()



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
