console.log( " Labas ");

//Primityvus kintamieji
var x = "Tomas";
var skaicius = 999;
var arVedes = "True";

var masinos = ['Audi','BMW','Opel'];
masinos.push('Suzuki'); //ides i masyvo gala
masinos[4] = 'Honda'; //ides i 4 stalciu masyvo

console.log( "BMW yra: ", masinos[1] );
console.log("BMW yra stalciaus numeris", masinos.indexOf('BMW'));
console.log( masinos ); //pasitikrinimas

var x = "Tomas";
console.log("vardo pirma raide: ", x[0]);
console.log("vardo ilgis: ", x.length );
console.log("masyvo ilgis: ", masinos.length );

//Objektai

var zmogus = {
  vardas: "Karolis",
  pavarde: "Karoliauskas",
  amzius: 13,
  einu: function(){
    console.log('einu einu');
  }
};

zmogus.einu();

console.log(zmogus);
//pakeisim varda
zmogus.vardas ="Zilvinas";
console.log(zmogus);

//idedam elementa papildoma kintamaji i Objekta

zmogus.ugis = 169;
console.log(zmogus);
