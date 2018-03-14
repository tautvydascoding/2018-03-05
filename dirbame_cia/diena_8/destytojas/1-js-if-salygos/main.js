console.log( " Labas ");


// =================if  teorija====================

// Ar SALYGA YRA TIESA???    Ar true ?
// if (salyga) {
//     // jei true
//     //
//     //
// } else {
//     // jei false
// }


// if ( salyga ) {
//     // jei salyga tenkinama
// }
//
// if ( salyga ) {
//     // jei salyga tenkinama
// } else {
//     // jei salyga netenkinama  / priesingu atveju
// }
//
// if (salyga) {
//
// } else if (salyga) {
//
// } else {
//     // ?
// }

//=============IF====================
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

var vardas1 = 'Tomas';
var vardas2 = 'Antanas';

if ( vardas1 == vardas2) {
    console.log( " vardai sutampa: ", vardas1, vardas2);
} else {
    console.log( "vardai skirtingi ", vardas1, vardas2);
}

// B)
// Papildomai patikrinti uzdavini A.
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

if ( vardas1 == "Tomas") {
    console.log(  "Labas Tomai");
}

// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// && - IR
if (  vardas1 == "Tomas" && vardas2 == "Karolis"  ) {
    console.log( 'vienas varsas Tomas, o kitas Karolis');
}

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
//    || - arba
var vardas1 = "Tomas";
var vardas2 = "Simas";
if (  vardas1 == "Tomas" || vardas2 == "Tomas") {
    console.log(" kazkuris is vardu yra  \"Tomas\"    \\ \\     \n  \n \n a ");
}

// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesime isvesti tam tikra VIENA reklamos teksta


// Salygos:
// var age = 15;

// iki 7 metu
// "Pliusines varles"
//
// nuo 7 iki 14
// "Mini telefonai"
//
// nuo 14 iki 18
// "new Music App"
//
// nuo 18 iki 24
// "Stok i sauliu sajunga"
//
// nuo 24 iki 65
// "Pensijos kaupimas - zusiregistruok"
// nuo 65
// "kelione i Bristona"
// sunkesne:
// iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"
var age = 14;
if ( age <= 7 || age > 65) {
    console.log("Sokoladiniai zuikuciai 20% nuolaida");
    if (age <= 7) {
        console.log( "Pliusines varles");
    }else {  // virs 65
        console.log( "kelione i Bristona");
    }
} else if ( age > 7) {
    console.log( "Mini telefonai" );
} else if ( age > 7) {
    console.log( "sitas niekad niekad nesuveiks" );
} else if ( age > 21) {
    console.log( "new Music App" );
}





// 2 UZDUOTIS
// sukurti 3 kintamuosius  "Tomas", "Paulius", "Airidas"
// isvesti TIK viena is pranesimu:
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
