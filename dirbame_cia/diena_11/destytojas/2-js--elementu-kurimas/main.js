console.log( " Labas ");


$('.kurejas').click(function( ) {
    // document.write(" sukuriu <br> ");

    // sukuriu <article> </article>
    var straipsnis = document.createElement("article");
    var tekstas = document.createTextNode(" Raudonkepuraite ejo i miska...");
    // console.log( straipsnis ); //test ar veikia
    // console.log( tekstas ); //test ar veikia

    straipsnis.appendChild(  tekstas  );  // <article>  Raudonkepuraite ejo i miska...</article>
    document.querySelector('section').appendChild(  straipsnis );

    //arba
    document.querySelector('section').innerHTML += "<article>  Raudonkepuraite ejo..</article>";
});





// ============================


// 1. sukurti "header"  DOM objekta/NODE'a
// test
var manoHeader = document.createElement('header');
// console.log(  manoHeader );

// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)

var tekstas = document.createTextNode(' Manno tekstas');
// console.log(  tekstas ); // test

// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
manoHeader.appendChild(  tekstas );  // appendChild - ideda i header'io kita elementa 'tekstas'
console.log(  manoHeader );        // test

// 4. headeri idesime virs H1
// insertBefore(kaIdeti, PriesKa) -
var manoH1 = document.querySelector('h1');  // surandam pirma h1

  // tetis elemet'o (h1), kurio atzvilgiu        kaIdeti     KienoAtzvilgiu (pries ka)
document.querySelector('body').insertBefore(  manoHeader , manoH1 );




//
