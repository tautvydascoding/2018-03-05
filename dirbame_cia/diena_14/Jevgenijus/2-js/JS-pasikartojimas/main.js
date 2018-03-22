console.log( " Labas ");

// teste - sukurimas, kaip ideti ir kaip pakeisti

// primityve tipes - primityvus masyvai
//array
var x= 'tomas';
var skaicius= 1000;
var arVedes = true;

var masinos = ['Audi', 'BMW', 'Opel'];
masinos.push('Suzuki'); //ideda i masyva
masinos[5] = 'Honda'; //ideda i masyva

console.log("BMW yra:", masinos[1]);
console.log("BMW yra stalciaus numeris:", masinos.indexOf('BMW'));
console.log(masinos); // pasitikrinimas

var x= "Tomas";
console.log("vardo pirma raide:", x[0]);
console.log("vardo ilgis:", x.length);
console.log("masyvo ilgis:", masinos.length);

//objektai

var zmogus = {
  vardas: "Karolis",
  pavarde: "Karaliauskas",
  amzius: 12
  einu: function (){
    console.log('einu einu');
};

console.log(zmogus);
//pakeisim vardas
zmogus.vardas = "Zilvinas";
console.log(zmogus);
//idedam papildoma kintamaji i objekta
zmogus.ugis = 159;

zmogus.einu();
