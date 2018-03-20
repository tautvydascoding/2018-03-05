

$('.kurejas').click(function(event) {
//  document.write( "sukuriu <br>");

  var straipsnis = document.createElement("article");
  console.log(straipsnis);

  var tekstas = document.createTextNode("raudonkepuraite nuejo i miska, geriau jau butu nejus");
  console.log(tekstas);

  straipsnis.appendChild( tekstas );
  document.querySelector('section').appendChild( straipsnis );
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


    var manoHeader = document.createElement('header');//susikurem headery dom

    var tekstas = document.createTextNode("gera diena"); //sukurem teksta i header objekta

    manoHeader.appendChild(tekstas);
    //ideda teksta i header objekta

    var manoH1 = document.querySelector('h1');  //suradom h1

    //tetis elemento h1, kieno atzvilgiu      //ka idedam
    document.querySelector('body').insertBefore( manoHeader, manoH1); //ideda header su tekstu virs h1
