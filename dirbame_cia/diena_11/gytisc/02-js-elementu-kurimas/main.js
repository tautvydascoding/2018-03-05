console.log( " Labas ");
//
$(".kurejas").click(function () {
//   document.write("sukuriu <br>");
// });

  // sukuriu <article> </article>
  var straipsnis = document.createElement("article");
  var tekstas = document.createTextNode("Raudonkepure ejo i miska..");

  console.log(straipsnis); // test ar veikia
  console.log(tekstas); // test ar veikia

  straipsnis.appendChild(tekstas);
  document.querySelector("section").appendChild(straipsnis);

  // arba
  // document.querySelector("section").innerHTML += "<article> Raudonkepuraite ejo...</article>";

});

// 1. sukurti "header"  DOM objekta/NODE'a
// test

var manoHeader = document.createElement("header");
// console.log(manoHeader);

// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)

var tekstas = document.createTextNode("Manotekstas");
// console.log(tekstas);

// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
manoHeader.appendChild(tekstas);  // appendChild ideda i headeri kita elementa "tekstas"

// test
console.log(manoHeader);

// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PrieKa) -
var manoH1 = document.querySelector("h1"); // suranda pima h1
//  tetis elemnto h1, kurio atzvilgiu       kur ideti   ka ideti
document.querySelector("body").insertBefore(manoHeader, manoH1); // body - t4tis elemento h1, pries kuri mes norime ideti manoHeader.
