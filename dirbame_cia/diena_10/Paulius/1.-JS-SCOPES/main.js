console.log( " Labas ");


//scope
function printDuomenys(){
  var vardas = "Tomas"; // kintamasis isnyks kai f-ja baigs darba
  console.log("vardas yra", vardas);
}
printDuomenys();

// console.log("vardas uz f-jos", vardas);


//local/global

var x = "x global";
function testLocalVar() {
  var y = "y local";
 z = "z global";
//   console.log("x", x)
   console.log("y", y);
   console.log("z", z);
}
testLocalVar();
////

var kakis = "juodas";  // globalus kintamas
  function test2(){
    var kakis = "baltas"; //Local
    console.log(kakis);
  }
  var kakis = "juodas";
function testLocalVar() {
   var kakis = "baltas";
   console.log("kakis:", kakis);
   console.log("this.kakis - f-jos viduje: ",  this.kakis);
 }
 testLocalVar();
 console.log("kakis", kakis);


//==
 var vardas = "Jonas";
  function myName (vardas){
    console.log("vardas" + vardas);
  }
    console.log("this.vardas-f-jos viduje",  this.vardas);
    myName();





  //1.1
      function printAntraste(x){
        console.log(x);
}
printAntraste("BMW pinga, nes daugeja");
printAntraste("Greit pageres orai");
printAntraste("Vasaros vis salteja");

function printStraipsnis(x){
  console.log(x);
}
printStraipsnis("");
