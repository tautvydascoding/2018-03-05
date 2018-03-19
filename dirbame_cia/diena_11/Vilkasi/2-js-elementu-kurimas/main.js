console.log( " Labas ");

$('.kurejas').click(function(event) {
  // document.write('sukuriu <br>');


// ----------sukuria <article> </article>----------
var straipsnis = document.createElement("article");
console.log(straipsnis); // test ar veika


var tekstas = document.createTextNode("Raudonkepuraite ejo misku ir pamete cigarus");
console.log(tekstas); // test ar veika

straipsnis.appendChild(tekstas);
document.querySelector('section').appendChild(straipsnis);
});

// 1. sukurti "header"  DOM objekta/NODE'a
// test
// console.log(  manoHeader );

var manoHeader = document.createElement('header');
// console.log(manoHeader);



// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)

var tekstas = document.createTextNode('headerio tekstas');
// console.log(tekstas);

// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
// test
// console.log(  manoHeader );

manoHeader.appendChild(tekstas); // IDEDA i manoHeader teksta
// document.querySelector('header').appendChild(header);
console.log(manoHeader);


// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PrieKa) -
var manoh1 = document.querySelector('h1'); //surandam pirma h1

//tetis elemento (h1), kurio atzvilgiu      ka ideti,   kieno atzvilgiu(pries ka)
document.querySelector('body').insertBefore( manoHeader, manoh1 );
