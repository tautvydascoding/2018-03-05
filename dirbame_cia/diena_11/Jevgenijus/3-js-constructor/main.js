console.log( " Labas ");
//
//
//
// $('.kurejas').click(function() {
//   // document.write("sukuriu<br>");
//
// //sukuriu <article></article>
// var straipsnis = document.createElement("article");
// console.log(straipsnis); // testas ar veikia
// });
//
// var tekstas = document.createTextNode("belekas");
// console.log(straipsnis); // test ar veikia
// console.log(tekstas); // test ar veikia
//
// straipsnis.appendChild(tekstas); ///<article>belekas</article>
// document.querySelector("section").appendChild(straipsnis);
//  //arba
//
//  document.querySelector('section').innerHTML += "<article> belekas"</article>
// });

















// 1. sukurti "header"  DOM objekta/NODE'a
// test
// console.log(  manoHeader );

var manoHeader = document.createElement("header");
// console.log (header);



// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)

var tekstas = document.createTextNode('mano tekstas');
// console.log(manoHeader);


// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
// test
// console.log(  manoHeader );
manoHeader.appendChild(tekstas); // appendChild - ideda i headerio kita elementa "Tekstas"
console.log(tekstas); //test
// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PrieKa) -
var manoH1 = document.querySelector('h1'); //surandam purma h1

//tetis element'o (h1), kurio atzvilgiu      kaIdeti   KienoAtzvilgiu (pries ka)
document.querySelector('body').insertBefore(manoHeader , manoH1); 
