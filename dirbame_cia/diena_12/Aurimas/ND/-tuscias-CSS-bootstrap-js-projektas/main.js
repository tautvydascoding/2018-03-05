console.log( " Labas ");
console.log("Labas friend");

// _______naudojant tik js_________(create and add_class)_______________

// 1.1  sukurti:
// <section>
//     <h1>  Tekstas </h1>
// </section>
// //1.2 patobulinti h1 -  ant h1 elemento uzdesime klases: " bg-info mt-5 aukstis-200"
// <section>
//     <h1 class="bg-info mt-5 aukstis-200">  Tekstas </h1>
// </section>



// _______naudojant tik jQuery_________(create and add_class)_______________

//  atlikti ^ 1.1 ir 1.2 uzduotis naudojant tik jQuery

var Csection=document.createElement("section");
var Ch1=document.createElement("h1");
var CtextH1=document.createTextNode("Tekstas");
Ch1.appendChild(CtextH1);
Csection.appendChild(Ch1);
document.querySelector('body').appendChild(Csection);
var temp=document.querySelector('script');

document.querySelector('body').insertBefore(Csection,temp);

//1.2

$("h1").addClass("bg-info, mt-5, aukstis-200");
