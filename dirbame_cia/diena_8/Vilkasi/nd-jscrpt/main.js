

// sukurti js zaidima, popierius , akmuo, zirkles :
// https://www.codecademy.com/courses/javascript-beginner-en-Bthev-mskY8/0/1

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer:" + computerChoice);
console.log("User:" + userChoice);

choice1 = userChoice;
choice2 = computerChoice;

function compare(choice1,choice2) {
if (choice1 === choice2)
    return ("The result is a tie. Choose again to playdown the result.");

if (choice1 === "rock") {
    if (choice2 === "scissors") {
        return ("rock wins");
    }
    else {
        return ("paper wins");
    }
}
if (choice1 === "paper") {
    if (choice2 === "rock") {
        return ("paper wins");
    }
    else {
        return ("scissors wins");
    }
}
if (choice1 === "scissors") {
    if (choice2 === "paper") {
        return ("scissors wins");
    }
    else {
        return ("rock wins");
        }
    }
if (choice1 !== "scissors") {
    if (choice1 !== "paper") {
        if (choice1 !== "rock") {
    return ("Type rock, paper or scissors like is written here!");}}}

}
console.log(compare(userChoice,computerChoice));﻿


// pasikartoti antradieni
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%

// function getPelnas(pajamos) {
//   var pajamos = pajamos;
//   var mokesciai = pajamos * 2,5%;
//   var mokesciai2 = pajamos * 1,5%;
//   console.log("Pelnas:",(pajamos - (mokesciai+mokesciai2)));
// }
//
// getPelnas(1000);

function getPelnas(pajamos) {
var mokesciai = 0.025;
var mokesciai2 = 0.015;
console.log("Pelnas:",(pajamos - ((pajamos * mokesciai)+(pajamos * mokesciai2))));
}

getPelnas(1500);


// pasikartoti IF
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"

var vardukas = "Paulius";

if (vardukas == "Tomas") {
  console.log("Masinoms 10% nuolaida");
} else if (vardukas == "Paulius") {
  console.log("Buitinei technikai  30% nuolaida");
} else {
  console.log("5% nuolaida kelionems");
}

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
var vardas = "Tomas";
// 1
function getVardas1() {
  return vardas + "1";
}
var x = getVardas1();   // arba  console.log(  getVardas1() );
console.log(  x );

// 2
function setVardas2(name) {
   vardas = name + "2";
}
setVardas2("antanas"); // sugalvoti vis kita zodi

// 3
function getVardas3() {
  return vardas + "3";
}
x =  getVardas3();  // arba  console.log(  getVardas3() );
console.log(  x );

// 4
function setVardas4(name) {
   vardas = name + "4";
}
setVardas2("juozas"); // sugalvoti vis kita zodi

// 5
// ....
// ...
// ...
