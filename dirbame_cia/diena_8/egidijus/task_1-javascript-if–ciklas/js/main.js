//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 1;     // x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)

for (var i = 0; i <= 50; i++) {
	console.log("azuolas " + i);
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

function printX( xxx ) {
    // document.write(   xxx   );
    // arba
    document.querySelector('section').innerHTML   +=   xxx;
}
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)" i browser langa (panaudojanti document.write arba innerHTML)
var log1 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/icon-portrait.png">';
var log2 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png">';
var log3 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png">';
var log4 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png">';
var log5 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png">';
var log6 = '<img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png">';
var mass = [log1, log2, log3, log4, log5, log6];

// for (var i = 0; i < 12 ; i++) {
//     printX( log1 );
// }
// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius
for (var i = - 0; i <= 5; i++) {
	printX(mass[i]);
}

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

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