console.log( " Labas ");



// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

function printDuomenys(){
    var vardas="Tomas";
    console.log("Vardas funkcijoje:",vardas);
}
printDuomenys();
//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gausite klaida ""is not defined""
// console.log("Vardas iskvieciamas uz funkcijos ribu:",vardas);





//================local && global=========
var x = "x global";
function testLocalVar() {
   var y = "y local";
   z = "z global";
   console.log("x:", x);
   console.log("y:", y);
   console.log("z:", z);
}
testLocalVar();
console.log("x uz funkcijos:", x);
console.log("z uz funkcijos:", z);
// console.log("y uz funkcijos:", y);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"

//------
 // UZDUOTIS
 // A) sukurti kintamaji var kakis = "juodas"
 var kakis="juodas";
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var kakis = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos
 function testas(){
   var kakis ="baltas";
   console.log("Kakis spausdinamas funkcijos viduje: ",kakis);
   console.log("Kakis spausdinamas funkcijos viduje: su 'this.' prierasu: ",this.kakis);
 }
 testas();
 console.log("Kakis spausdinamas funkcijos isoreje: ",kakis);
 console.log("Kakis spausdinamas funkcijos isoreje: su 'this.' prierasu: ",this.kakis);

 // var kakis = "juodas";
 // function testLocalVar() {
 //     var kakis = "baltas";
 //    console.log("kakis:", kakis);
 //    console.log("this.kakis - f-jos viduje: ",  this.kakis);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // testLocalVar();
 // console.log("kakis:", kakis);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"

 //======================
 // var vardas = "Jonas";   // global - kintamasis

 var vardass="Jonas";
 function myName(vardass){
   console.log("vardass f-jos viduje: ", vardass);
   console.log("this.vardass funkcijos viduje:",this.vardass);
 }
 myName("PETRAS");
 console.log("vardass uz funkcijos ribu:",vardass);
 // function myName ( vardas ) { //  vardas - local kintamasis
 //     console.log( " vardas" + vardas);
 //     console.log("this.vardas - f-jos viduje: ",  this.vardas);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"

function printAntraste(x){
  console.log(x);
}
printAntraste("BMW pinga, nes daugeja");
printAntraste("Greik pageres orai");
printAntraste("Vasaros vis salteja");

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

function printStraipsnis(x,y){
  console.log("Antraste:",x,"\n","        ",y+";");
}

printStraipsnis("Pirma","Lorem1...");
printStraipsnis("Antra","Lorem2...");
printStraipsnis("Trecia","Lorem3...");
//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
