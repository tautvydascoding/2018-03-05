console.log( " Labas ");



$('.kurejas').click(function() {
  // document.write("sukuriu<br>");

//sukuriu <article></article>
var straipsnis = document.createElement("article");
console.log(straipsnis); // testas ar veikia
});

var tekstas = document.createTextNode("belekas");
console.log(straipsnis); // test ar veikia
console.log(tekstas); // test ar veikia

straipsnis.appendChild(tekstas); ///<article>belekas</article>
document.querySelector("section").appendChild(straipsnis);
 //arba

 document.querySelector('section').innerHTML += "<article> belekas"</article>
});

















// 1. sukurti "header"  DOM objekta/NODE'a
// test
// console.log(  manoHeader );

// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)


// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
// test
// console.log(  manoHeader );

// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PrieKa) -
