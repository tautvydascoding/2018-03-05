// pasikartoti IF
//
// sukurti js zaidima, popierius , akmuo, zirkles :
// https://www.codecademy.com/courses/javascript-beginner-en-Bthev-mskY8/0/1

var Roc="Rock";
var Sci="Scissors";
var Pap="Paper";

var choices=[Roc,Sci,Pap];

function game(x) {
  var rndnum=Math.floor(Math.random() * (2-0+1)+0); //random number generator: cia 2- norima max reiksme, 0 norima min reiksme intervalo is kurio rinks random reiksmes.
  var pcch=choices[rndnum];
  if (x=="Rock" && pcch=="Rock") {
    console.warn("You picked:",x+"; so it's a draw, because pc picked:",pcch+" as well;");
  } else { if (x=="Rock" && pcch=="Scissors") {
    console.log("You picked:",x+"; and WON!, because pc picked:",pcch+"; and Rock crushes Scissors;");
  } else { if (x=="Rock" && pcch=="Paper") {
    console.error("You picked:",x+"; and lost, because pc picked:",pcch+"; and Paper covers the Rock;");
  } else { if (x=="Scissors" && pcch=="Rock") {
    console.error("You picked:",x+"; and lost, because pc picked:",pcch+"; and Rock crushes Scissors;");
  } else { if (x=="Scissors" && pcch=="Paper") {
    console.log("You picked:",x+"; and WON!, because pc picked:",pcch+"; and Scissors cut Paper;");
  } else { if (x=="Scissors" && pcch=="Scissors") {
    console.warn("You picked:",x+"; so it's a draw, because pc picked:",pcch+" as well;");
  } else { if (x=="Paper" && pcch=="Scissors") {
    console.error("You picked:",x+"; and lost, because pc picked:",pcch+"; and Scissors cut Paper;");
  } else { if (x=="Paper" && pcch=="Paper") {
    console.warn("You picked:",x+"; so it's a draw, because pc picked:",pcch+" as well;");
  } else { if (x=="Paper" && pcch=="Rock") {
    console.log("You picked:",x+"; and WON!, because pc picked:",pcch+"; and Paper covers the Rock;");
  }
  }
  }
  }
  }
  }
  }
  }
  }
}
game(Roc); //pasirinkti viena is reiksmiu: Roc Sci Pap, kurios atitinkamai reiskia Rock/Scissors/Paper
game(Pap);
game(Pap);
game(Sci);
game(Pap);
game(Sci);
game(Roc);
game(Roc);
game(Pap);
game(Pap);
game(Pap);
game(Sci);
game(Pap);
game(Pap);
game(Pap);


// pasikartoti antradieni
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%


// pasikartoti IF
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"


// itvirtinti f-jas

// UZDUOTIS =======ismokti f-jas 50x===============
// A) sukurti kintamaji "vardas" Tomas
// B) sukurti 50 f-ju.
// nelyginiu (1,3,5,...) funkciju pavadinimai getVardas1(), getVardas3(), ...
// nelygines f-jos turi "return" ir iskvietus turi grazinti varda ir jo skaiciu salia pvz: "Tomas1"
// lyginiu (2,4,6,8...) funkciju pavadinimai setVardas2(name), setVardas4(name), ...
// lygines f-jos turi pakeisti varda ir uzdeti skaiciu salia
// NOTE: visas f-jas iskviesti
// pvz.:
// var vardas = "Tomas";
// // 1
// function getVardas1() {
//   return vardas + "1";
// }
// var x = getVardas1();   // arba  console.log(  getVardas1() );
// console.log(  x );
//
// // 2
// function setVardas2(name) {
//    vardas = name + "2";
// }
// setVardas2("antanas"); // sugalvoti vis kita zodi
//
// // 3
// function getVardas3() {
//   return vardas + "3";
// }
// x =  getVardas3();  // arba  console.log(  getVardas3() );
// console.log(  x );
//
// // 4
// function setVardas4(name) {
//    vardas = name + "4";
// }
// setVardas2("juozas"); // sugalvoti vis kita zodi
//
// // 5
// ....
// ...
// ...
