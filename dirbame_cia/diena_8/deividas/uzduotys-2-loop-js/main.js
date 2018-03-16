console.log( " Labas ");
//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 1;     // x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
for (var i = 0; i < 50; i++) {
  console.log("Azuolas" + i);
}
// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
var tekstas =" <article class='bg-info'> <h2> Azuolas</h2> </article>" ; // cia paprastas tekstas
for (var i = 0; i < 20; i++) {
  // document.write( tekstas );
  // arba
  document.querySelector('section').innerHTML += tekstas;
}
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri atspausdina paduota teksta i browser langa (panaudojanti document.write arba innerHTML)
// pvz.: printX(  "<h1>Sveiki</h1>" )
function printX( xxx ) {
  document.querySelector('section').innerHTML += xxx;
}
printX ( "<h1>Sveiki</h1>")


// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

for (var i = 0; i < 100; i++) {
  printX ( "<b> Labas </b>")
}
// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius
var paveiksliukas = "<img src='https://idomu.lt/uploads/posts/2017-12/1512933448_lape.jpg' alt='lape' width='50'>"
for (var i = 0; i < 12; i++) {
    document.querySelector('section').innerHTML += paveiksliukas;
}

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)


// function piestiEilute(x) {
// for (var i = 0; i < 40; i++)
//   document.querySelector('body').innerHTML += x;
// }
// piestiEilute("-")

function piestiEilute (eilutesIlgis) {
  var txt = "-";
  for (var i = 0; i < eilutesIlgis; i++) {
    txt = txt + "-";
  }
  console.log( txt );
}
piestiEilute (40);

var vardas= "vardas";
var pavarde= "pavarde";
var amzius="amzius";

console.log(vardas, " / ", pavarde, " / ",amzius);

function piestiEilute (eilutesIlgis) {
  var txt = "-";
  for (var i = 0; i < eilutesIlgis; i++) {
    txt = txt + "-";
  }
  console.log( txt );
}
piestiEilute (40);

for (var i = 0; i < 6; i++) {
  console.log("  |  " + i);
}
// /
// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

var alga=680;
for (var i = 1; i < 121; i++) {
 alga=alga*1.01;
 console.log(i+" menesio alga yra:",alga+";");
}

// ==============SCSS============================

//========= local/global or Frog/Garden =======
