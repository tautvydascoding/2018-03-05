console.log( " Labas ");

$('.kurejas').click(function (event) {
  // document.write(" sukuriu <br>");

/// sukuriu <article> </article>
var straipsnis = document.createElement("article");
console.log(straipsnis); // test ar veikia

var tekstas = document.createTextNode("Raudonkepuraite ejo y miska...");
console.log(tekstas); // test ar veikia


straipsnis.appendChild( tekstas ); // <article> Raudonkepuraite ejo y miska.. </article>
document.querySelector('section').appendChild( straipsnis );

//arba
document.querySelector('section').innerHTML += "<article> Raudonkepuraite ejo y miska... </article>";

});


// 1. sukurti "header"  DOM objekta/NODE'a
// test
// console.log(  manoHeader );
var manoHeader =document.createElement('header');
// console.log(manoHeader); // test
// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)
var tekstas = document.createTextNode( 'Mano tekstas' );
// console.log( tekstas ); // test


// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
manoHeader.appendChild( tekstas ); //appendChild - ideda y headerio kita elementa 'tekstas'
console.log( manoHeader ); //test
// test
// console.log(  manoHeader );

// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PrieKa) -
var manoH1 = document.querySelector('h1') //suranda pirma h1

// tetis elemento(h1), kurio atzvilgiu        //ka ideti       Kieno atzvilgiu (pries ka)
 document.querySelector('body').insertBefore ( manoHeader, manoH1);
