console.log( " Labas ");

// primitive types
var x = "Tomas";
var skaicius = 9999;
var arVedes = true;


var masinos = ['Audi', 'BMW', 'Opel'];
masinos.push('Suzuki'); // ideda y masyvo gala
masinos[5] = 'Honda'; // ideda y masyva

console.log("BMW yra:", masinos[1] );
console.log("BMW yra stalciaus numeris:", masinos.indexOf('BMW') );
console.log(masinos); // pasitikrinimas


var x = "Tomas";
console.log("vardo prima raide:", x[0]);
console.log("vardo ilgis:", x.length);
console.log("vardo masyvo ilgis:",masinos.length);


// objektai

var zmogus = {
  vardas: "Karolis",
  pavarde: "Karaliauskas",
  amzius: 13,
  einu: function (){
    console.log('einu einu');
  },
  begu: function (){
    console.log('begu begu');
  }
};
console.log(zmogus);

//pakeisim varda
zmogus.vardas = 'Zilvinas';
console.log(zmogus);

// / idedam papildoma kintamaji i objekta
zmogus.ugis = 159;

zmogus.einu();
