console.log( " Labas ");

console.log("Labas");

// _______naudojant tik js_________(create and add_class)_______________

// 1.1  sukurti:
// <section>
//     <h1>  Tekstas </h1>
// </section>

// var manoBody = $('body').html();
// $('body').html(manoBody + '<section><h1>Tekstas233</h1></section>');

// arba
var manoSection =  document.createElement("section");
var manoH1 =  document.createElement("h1");
var tekstas =  document.createTextNode("Antraste");
//
manoH1.appendChild(tekstas);
manoSection.appendChild(manoH1);
//
document.querySelector('body').appendChild(manoSection);
//
// //arba
var h1KurisJauYraBody = document.querySelector('h1');
// //       tevinis-virs ko dedame            Ka idedame     virs ko dedame
document.querySelector('body').insertBefore(manoSection, h1KurisJauYraBody);
//
console.log(manoSection, manoH1, tekstas);



//1.2 patobulinti h1 -  ant h1 elemento uzdesime klases: " bg-info mt-5 aukstis-200"
// <section>
//     <h1 class="bg-info mt-5 aukstis-200">  Tekstas </h1>
// </section>

// js
// h1.classList.add('bg-info');
manoH1.cassName += "bg-info mt-5 aukstis-200";

//jQuery
// $('h1').addClass("bg-info mt-5 aukstis-200");


// _______naudojant tik jQuery_________(create and add_class)_______________

//  atlikti ^ 1.1 ir 1.2 uzduotis naudojant tik jQuery
