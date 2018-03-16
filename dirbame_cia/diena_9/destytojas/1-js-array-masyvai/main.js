console.log( " Labas ");



var prekybosCentrai = [];

prekybosCentrai[0] = "IKI";
prekybosCentrai[1] = "Maxima";
prekybosCentrai[2] = "Rimi";
prekybosCentrai[3] = "Lidl";
prekybosCentrai[4] = "Mega";

console.log(  prekybosCentrai   );

// A) pervadinti pirma stalciu  "Barbora";
prekybosCentrai[1] = "Barbora";
console.log(  prekybosCentrai[1]   );

// B) sukeisti antro ir trecio stalciu reiksmes vietomis.
// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

console.log( prekybosCentrai   ); // paemimas

// var str, s, tmp, temp, txt =
var x = prekybosCentrai[2];
prekybosCentrai[2] = prekybosCentrai[3];
prekybosCentrai[3] = x;

console.log(  prekybosCentrai   );

// C) padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)
function sukeistiMasyvo2elementus( nr1, nr2) {
    var x = prekybosCentrai[ nr1 ];
    prekybosCentrai[ nr1 ] = prekybosCentrai[ nr2 ];
    prekybosCentrai[ nr2 ] = x;
}
sukeistiMasyvo2elementus( 0, 3 );
console.log(  prekybosCentrai   );
