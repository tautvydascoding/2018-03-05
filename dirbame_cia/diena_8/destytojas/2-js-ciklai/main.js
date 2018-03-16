console.log( " Labas ");


//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 5;    // x = x + 5;
    // x++;       // x = x + 1;
    //
    // x--;      // x = x - 1;
    // x *= 3;   // x = x * 3;

//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)

for (var i = 0; i < 50; i++) {
    console.log( " Azuolas " + i   );
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

var tekstas = "<article class='bg-info'>    <h2> Azuolas</h2>  </article>";  // cia paprastas tekstas

for (var i = 0; i < 20; i++) {
    // document.write(   tekstas   );
    // arba
    document.querySelector('section').innerHTML   +=   tekstas;
}

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri atspasudina paduota teksta i browser langa (panaudojanti document.write arba innerHTML)
// pvz.: printX(  "<h1> Sveiki</h1>")
function printX( xxx ) {
    // document.write(   xxx   );
    // arba
    document.querySelector('section').innerHTML   +=   xxx;
}
// printX(" Karolis 88 ");

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu
for (var i = 0; i < 100; i++) {
     printX(" <b> Labas <b> ");
}

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius
var paveiksliukas = ' <img src="1.jpg" alt="">  ';

// for (var i = 0; i < 12 ; i++) {
//      printX( paveiksliukas  );
// }
for (var i = 0; i < 12 ; i++) {
    document.write( paveiksliukas );
}

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(sk); spausdintiStulpeli(sk);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

//  piestiEilute(40);
// console.log('vardas |  pavarde | amzius');
// piestiEilute(30);
// spausdintiStulpeli(15);

// var txt = "-";
// var ilgis = 40;
// for (var i = 0; i < ilgis; i++) {
//     txt = txt + '-';
// }
// console.log( txt );


function piestiEilute( eilutesIlgis ) {
    var txt = "-";
    for (var i = 0; i < eilutesIlgis; i++) {
        txt = txt + '-';
    }
    console.log( txt );
}
piestiEilute(25);
piestiEilute(35);
piestiEilute(45);

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
