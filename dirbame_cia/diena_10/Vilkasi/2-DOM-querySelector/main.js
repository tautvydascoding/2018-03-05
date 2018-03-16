console.log( " Labas ");

var aprasymas = document.querySelector('.straipsnis-1');
console.log(aprasymas);
aprasymas.innerHTML = " Pakeistas su js<br>Saule sviecia, menulis piesia, ant nosies tau ragus";

//=============keiciam visus straipsnius============//

var visiStraipsniai = document.querySelectorAll('p'); // gauname masyva visiStraipsniai
console.log(visiStraipsniai);
visiStraipsniai[2].innerHTML = "Pakeistas masyvo pagalba";

for (var i = 0; i < 3; i++) {
  visiStraipsniai[i].innerHTML = "pakeisti visi straipsniai su for ciklu";
  visiStraipsniai[i].style.color = "blue";
  visiStraipsniai[i].style.backgroundColor = "#ccdb1e";
}

//==========keisime h2 ir p============//

var visiTekstai = document.querySelectorAll('p,h2'); //gavaom array
for (var i = 0; i < visiTekstai.length; i++) {
  visiTekstai[i].style.color = "red";
}
