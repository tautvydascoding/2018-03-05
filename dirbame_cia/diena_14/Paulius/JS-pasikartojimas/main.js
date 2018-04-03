console.log( " Labas ");

// susikuriam kintamuosius
var x = 'tomas';
var y = 12;
var arVedes = true;  // primityvus kintamieji

var masinos = ["audi", "bmw", "opel"]; //sukurimas masyvo

masinos.push ("suzuki"); //deda i masyvo gala
masinos[4] = "honda";   //ideda i masyva irgi
console.log(masinos);

console.log("BMW yra:", masinos[1] ); //masyvo paemimas

console.log("bmw stalciaus numeris yra:", masinos.indexOf("bmw")  ); //paraso masinos stalciaus numery
console.log(masinos); //pasitikrinam

console.log("vardo pirma raide: ", x[0]); // isspausdins vardo pirma raide "tomas" = t
console.log("vardo ilgis: ", x.length); //suskaiciuoja kiek raidziu zodyje
console.log("masyvo ilgis: ", masinos.length ); //suskaiciuoja kiek elementu yra masyve

//objektai
var zmogus = {
  vardas: "Karolis",
  pavarde: "karolukas",
  amzius: 13,
  einu: function () {
      console.log("einu");
  }
};
console.log(zmogus);
zmogus.einu = 159;

//pakeisim vardas
zmogus.vardas = "Juozas";
console.log(zmogus);

//idedam papildoma kintamajy i objekta
zmogus.ugis = 159;
