console.log("Labas");

// _______naudojant tik js_________(create and add_class)_______________

// 1.1  sukurti:

//     <section>
// <h1> Tekstas </h1>
//     </section>
// var manoBody = $('body').html();
// $('body').html(manoBody+"<section><h1>Tekstas</h1></section>");
//arba
var manoSection = document.createElement("section");
var manoH1 = document.createElement("h1");
var tekstas=document.createTextNode("Antraste");

manoH1.appendChild(tekstas);
manoSection.appendChild(manoH1);

document.querySelector('body').appendChild(manoSection);
//Arba
var h1KurisJauYraBody = document.querySelector('h1');
//tevinis-virs ko dedame                    Ka idedam     virs ko dedame
document.querySelector('body').insertBefore(manoSection, h1KurisJauYraBody);

console.log(manoSection, manoH1, tekstas); // testinam


//1.2 patobulinti h1 -  ant h1 elemento uzdesime klases: " bg-info mt-5 aukstis-200"

    // <h1 class="bg-info mt-5 aukstis-200">  Tekstas </h1>
//vanilla javascript
// classList.add(Priema tik po viena klase!!!)
// manoH1.classList.add("bg-info");
// manoH1.classList.add("mt-5");
// manoH1.classList.add("aukstis-200");

//arba className - kintamasis
manoH1.className += "bg-info mt-5 aukstis-200";

//

// _______naudojant tik jQuery_________(create and add_class)_______________
// 


//  atlikti ^ 1.1 ir 1.2 uzduotis naudojant tik jQuery
