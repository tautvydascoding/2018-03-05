console.log( " Labas ");
// =================if  teorija====================

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

var vardas1="Tomas";
var vardas2="Karolis";

if (vardas1!=vardas2) {
  console.log("Vardai yra skirtingi");
}else {
    console.log("Vardai yra vienodi");
}


// B)
// Papildomai patikrinti uzdavini A.
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

if (vardas1=="Tomas") {
  console.log("Labas, Tomai!!! ^_^");
}

// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"

if (vardas1=="Tomas" && vardas2=="Karolis") {
  console.log("Labas, Tomai, Karoli");
} else { if (vardas1=="Tomas") {
        console.log("Vardas1: Tomas, o Vardas2 - ne Karolis, o: ",vardas2+";");
        } else { if (vardas2=="Karolis") {
                console.log("Vardas1 - ne Tomas, o: ",vardas1+";", ", o Vardas2: ",vardas2+";");
                } else {
                  console.log("Vardas1 - ne Tomas, o:",vardas1+",ir Vardas2 - ne Karolis, o:",vardas2+";");
                  }
                }
              }


// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba

if (vardas1=="Tomas" || vardas2=="Tomas") {
  console.log("Bent vienas is vardu - Tomas");
}else {
  console.log("Nei vienas is vardu nera Tomas");
}

// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta

var age=6;
if (age<=7) {
          console.log("Tavo amzius:",age+"; Reklama:","Pliusines varles!",",bei Sokoladiniam zuikuciam 20% nuolaida!");
  }else { if (age<=14) {
          console.log("Tavo amzius:",age+"; Reklama:","Mini Telefonai!");
  }else { if (age<=18) {
          console.log("Tavo amzius:",age+"; Reklama:","new Music App!");
  }else { if (age<=24) {
          console.log("Tavo amzius:",age+"; Reklama:","Stok i sauliu sajunga!");
  }else { if (age<=65) {
          console.log("Tavo amzius:",age+"; Reklama:","Pensijos kaupimas - uzsiregistruok!");
  }else { if (age>65) {
          console.log("Tavo amzius:",age+"; Reklama:","Kelione i Birstona!",",bei Sokoladiniam zuikuciam 20% nuolaida!");

  }

  }

  }

  }

  }
}

// Salygos:

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



// 2 UZDUOTIS
// sukurti 2 kintamuosius vardus "Tomas", "Paulius"
// isvesti TIK viena is pranesimu:
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"

// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
// -=================================================================================================

var vard1="Tomas";
var vard2="Paulius";

if (vard1=="Tomas" && vard2=="Paulius") {
  console.log("Masinoms 10% nuolaida, bei Buitinei Technikai 30% nuolaida!");
  } else { if (vard1=="Tomas" && vard2!=="Paulius") {
            console.log("Masinoms 10% nuolaida, bei 5% nuolaida kelionems!");
            } else { if (vard1!=="Tomas" && vard2=="Paulius") {
                      console.log("Buitinei technikai 30% nuolaida, bei 5% nuolaida kelionems!");
                      } else { if (vard1!=="Tomas" && vard2!=="Paulius") {
                              console.log("5% nuolaida kelionems!");
                                }
                        }
                    }
      }

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
  console.log("Azuolas");
}
// =============================================================================
// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
var sarasas=document.createElement("article");
document.body.appendChild(sarasas);
for (var i = 0; i < 50; i++) {
  var headall=document.createElement("H2");
  var headtxt=document.createTextNode(i+" Hello world");
  sarasas.appendChild(headall);
  headall.appendChild(headtxt);
  console.log(i+" ",headtxt);

}

var visih2=document.querySelectorAll("H2");
// console.log(visih2[10]);
for (var i = 0; i < 51; i++) {
    visih2[i].innerHTML="Azuolas";
}

// =============================================================================
var tekstas="<article class='bg-info'> <h2>Azuolynas</h2> </article>";

// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)" i browser langa (panaudojanti document.write arba innerHTML)
function printX(xxx){
  document.write(xxx);
  // document.querySelector('body').innerHTML += xxx;
}
printX("Karolis 88");


// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu
for (var i = 0; i < 100; i++) {
  printX("random");
}

for (var i = 0; i < 50; i++) {
  document.write(tekstas);
}

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius

var pav1="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav2="<img src='https://mama.tv3.lt/Uploads/lape10.jpg' alt='lape'>";
var pav3="<img src='http://en.naturephoto.lt/img/photos/original/zinduoliai/1359955775_00511.JPG' alt='lape'>";
var pav4="<img src='https://g1.dcdn.lt/images/pix/lape-po-medziokles-64674021.jpg' alt='lape'>";
var pav5="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav6="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav7="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav8="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav9="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav10="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav11="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
var pav12="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";

var na=[pav1,pav2,pav3,pav4,pav5,pav6,pav7,pav8,pav9,pav10,pav11,pav12];

for (var i = 0; i < 12; i++) {
  var b=na[i];
  document.write(b);
}
document.write("============================================");
// antras budas;
var paveiksliukas="<img src='https://g3.dcdn.lt/images/pix/suo-panasus-i-lape-71473226.jpg' alt='lape'>";
for (var i = 0; i < 12; i++) {
  document.write(paveiksliukas);
}


// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

function piestiEilutevir(x){
  var a="\u203E";
for (var i = 0; i < x; i++) {
  a =a+"\u203E";
}
console.log(a);
}
function piestiEiluteap(y){
  var b="\u005F";
for (var i = 0; i < y; i++) {
  b =b+"\u005F";
}
console.log(b);
}
piestiEiluteap(28);
console.log("\u007C Vardas \u007C Pavarde \u007C Amzius \u007C");
piestiEilutevir(28);
console.log("\u007C        \u007C         \u007C        \u007C");
console.log("\u007C        \u007C         \u007C        \u007C");
console.log("\u007C        \u007C         \u007C        \u007C");
console.log("\u007C        \u007C         \u007C        \u007C");
console.log("\u007C        \u007C         \u007C        \u007C");
console.log("\u007C        \u007C         \u007C        \u007C");
piestiEilutevir(28);

// function spausdintiStulpeli(x){
//
// }
// peistiEilute(40);
// console.log('vardas|pavarde|amzius');
// peistiEilute(40);
// spausdintiStulpeli(15);
// /*
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
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje
// uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%
// */



var alga=680;
for (var i = 1; i < 121; i++) {
 alga=alga*1.01;
 console.log(i+" menesio alga yra:",alga+";");
}





// ==============SCSS============================

//========= local/global or Frog/Garden =======
