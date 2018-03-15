
//array - MASYVAI
var prekybosCentrai=[];
prekybosCentrai[0] = "IKI";
prekybosCentrai[1] = "Maxima";
prekybosCentrai[2] = "Rimi";
prekybosCentrai[3] = "Norfa";
prekybosCentrai[4] = "Cento";

//A) pervadinti pirma stalciu
//prekybosCentrai[3] = "Lidl";

console.log(prekybosCentrai[3]);

//B)sukeisti antro ir trecio stalciu reiksmes vietomis.
// var x = prekybosCentrai[2];
// prekybosCentrai[2] = prekybosCentrai[3];
// prekybosCentrai[3] = x;

  console.log(prekybosCentrai);

//C)padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
function sukeistiMasyvo2elementus( nr1, nr2) {
    var x = prekybosCentrai[ nr1 ];
    prekybosCentrai[ nr1 ] = prekybosCentrai[ nr2 ];
    prekybosCentrai[ nr2] = x;
    console.log(prekybosCentrai);

}
sukeistiMasyvo2elementus(0, 3);
