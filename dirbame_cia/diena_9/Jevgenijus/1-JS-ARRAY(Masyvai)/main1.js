console.log ("labas");


var prekybosCentrai = [];

prekybosCentrai[0]= "IKI";
prekybosCentrai[1]= "Maxima";
prekybosCentrai[2]= "LIDL";
prekybosCentrai[3]= "MEGA";
prekybosCentrai[4]= "Akropolis";
prekybosCentrai[5]= "Silas";

console.log (prekybosCentrai);

//pervadinti parduotuve
prekybosCentrai[1]= "Barbora";
console.log (prekybosCentrai[1]);

//sukeisti vietomis 2 ir 3 prekybos centrai
console.log(prekybosCentrai[3]); //paemimas

var x=prekybosCentrai[2];

prekybosCentrai[2] = prekybosCentrai[3] ;
prekybosCentrai[3] = x ;
console.log(prekybosCentrai );


// padaryti B uzdaviniui funkcija kad sukeisti masyvo2elemntus (x,y)
function sukeistiMasyvo2elementus(nr1, nr2) {
  var x=prekybosCentrai[nr1];
  prekybosCentrai [nr1] = prekybosCentrai [nr2];
  prekybosCentrai [nr2] = x;
}
sukeistiMasyvo2elementus (0,5);

console.log(prekybosCentrai);
