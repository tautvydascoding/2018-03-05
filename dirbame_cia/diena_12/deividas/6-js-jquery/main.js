console.log( " Labas ");


////////////////////////////////////////////////////////////////////

// _______naudojant tik js_________(create and add_class)_______________

// 1.1  sukurti:
// <section>
//     <h1>  Tekstas </h1>
// </section>
var sekcija = document.createElement('section');
console.log(sekcija);
var manoH1 = document.createElement('h1');
console.log(manoH1);
var tekstas= document.createTextNode('Antraste');
console.log(tekstas);

manoH1.appendChild( tekstas );
console.log(manoH1);

sekcija.appendChild(manoH1);
console.log(sekcija);

document.querySelector('body').appendChild (sekcija);


var h1KurJisYraJauBody = document.querySelector('h1');
             //tevinis - virs ko dedame          ka idedame     virs ko dedame
document.querySelector('body').insertBefore ( sekcija, h1KurJisYraJauBody );
//1.2 patobulinti h1 -  ant h1 elemento uzdesime klases: " bg-info mt-5 aukstis-200"
// <section>
//     <h1 class="bg-info mt-5 aukstis-200">  Tekstas </h1>
// </section>
// js vanila==========================================
// !! classList.add ( priema tik po viena klase) !!!!!!
// manoH1.classList.add("bg-info");
// manoH1.classList.add("mt-5");
// manoH1.classList.add("aukstis-200");

//arba className - kintamasis ====================

manoH1.className +="bg-info mt-5 aukstis-200";


///
// jQuery_________==========================

// $('h1').addClass("bg-info mt-5 aukstis-200");


// _______naudojant tik jQuery_________(create and add_class)_______________

//  atlikti ^ 1.1 ir 1.2 uzduotis naudojant tik jQuery
