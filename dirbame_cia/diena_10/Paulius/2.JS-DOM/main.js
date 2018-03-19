console.log( " Labas ");

//UZDUOTIS

// Pakeitem viena straipsny

var aprasymas = document.querySelector('.straipsnis-1');
console.log(aprasymas);
aprasymas.innerHTML = "PAKEICIU";

//===== keiciam visus straipsnius
    var visiStraipsniai = document.querySelectorAll('p'); //gaunam array(masyva)
    console.log(visiStraipsniai);
    visiStraipsniai[2].innerHTML = "Pakeiciau masyvu";

  for (var i = 0; i < 3; i++) {
    visiStraipsniai[i].innerHTML = "Pakeistas su for ciklu";    //======== keiciam visus tekstus
    visiStraipsniai[i].style.color = 'green';    //======== keiciam dizaina // CSS
    visiStraipsniai[i].style.backgroundColor = 'indigo';
  }

  //=========keiciam h2 ir p spalva ======
    var visiTekstai = document.querySelectorAll( ' h2, p'); //gaunam array/masyva
    console.log(visiTekstai);

    for (var i = 0; i < 6; i++) {
      visiTekstai[i].style.color = "yellow";
      visiTekstai[i].style.backgroundColor = 'royalblue';
    }
