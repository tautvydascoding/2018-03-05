console.log( " ARRAYS ");


var prekybosCentrai = [];

prekybosCentrai[0] = "IKI";
prekybosCentrai[1] = "Maxima";
prekybosCentrai[2] = "Lidl";
prekybosCentrai[3] = "Kaufland";
prekybosCentrai[4] = "Cia";
prekybosCentrai[5] = "Rimi";
prekybosCentrai[6] = "Aibe";
prekybosCentrai[7] = "Norfa";
prekybosCentrai[8] = "Akropolis";

console.log( prekybosCentrai );

// prekybosCentrai[1] = "Barbora";
// console.log(prekybosCentrai[1]);

var x = prekybosCentrai[1];

prekybosCentrai[1] = prekybosCentrai[2];
prekybosCentrai[2] = x;
console.log(prekybosCentrai);

function sukeistiMasyvo2elementus(nr1,nr2) {
var z = prekybosCentrai [nr1];
prekybosCentrai[nr1] = prekybosCentrai[nr2];
prekybosCentrai[nr2] = x;
console.log(prekybosCentrai);
}

sukeistiMasyvo2elementus(0,2);
