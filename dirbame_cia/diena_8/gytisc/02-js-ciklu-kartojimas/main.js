//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 5;   // x = x + 5;
    // x++;     // x = x + 1;
    //
    // x--;     // x = x - 1;
    // x *= 3;  // x = x * 3;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
// for (var i = 0; i < 50; i++) {
//   console.log("Ąžuolas");
// }

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
// var tekstas = "<article class='bg-info'><h2>Ąžuolas</h2></article>"; //cia pprastas tekstas. Jis pavirs ne tekstu, kai mes idesime i brouseri.
// for (var i = 0; i < 20; i++) {
//   // document.write( tekstas ); // - ne labai naudojamas budas
//   // arba
//   document.querySelector('section').innerHTML += tekstas;
// }

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)" i browser langa (panaudojanti document.write arba innerHTML)

// function printX( xxx ) {
//   document.querySelector('section').innerHTML += xxx;
// }
// printX("Karolis 88");

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

function printX1( xx1 ) {
  document.querySelector('section').innerHTML += xx1;
}
for (var i = 0; i < 100; i++) {
  printX1(" <b> Labas <b> ");
}


// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius
function printX2( xx2 ) {
  document.querySelector('section').innerHTML += xx2;
}
var paveiksliukas = ' <img src="pics/audi-reklama.jpg" alt="Lape"> ';
for (var i = 0; i < 12; i++) {
    printX2( paveiksliukas );
}

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

function functionName(eilutesIlgis) {
  var txt = "-";
  var ilgis = 40;
  for (var i = 0; i < ilgis; i++)
    txt = txt + "-";
}
console.log(txt);

function functionName(eilutesIlgis) {
  var txt = "-";
  var ilgis = 40;
  for (var i = 0; i < ilgis; i++)
    txt = txt + "-";
}
console.log(txt);

/*
----------------------------
vardas |  pavarde | amzius
----------------------------
|
|
|
|
|


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
var kiekMenesiu = 10 * 12;
var menAtlyginimas = 680;
var algosPokytis = 1;  // 1%

*/
// ==============SCSS============================

//========= local/global or Frog/Garden =======
