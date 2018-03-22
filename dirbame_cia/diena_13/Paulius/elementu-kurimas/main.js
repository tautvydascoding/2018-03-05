
// sukurti h1 js i dom


var mySection = document.createElement('section');
var manoHeader = document.createElement('header');


var tekstas = document.createTextNode("tekstas");
console.log(mySection);

mySection.appendChild(manoHeader);
manoHeader.appendChild(tekstas);



var h1body = document.querySelector('header');
document.querySelector('body').insertBefore(mySection, h1body);

//uzdeti klase ant h1

// su javascript vanila

manoHeader.classList.add("bg-info");
manoHeader.classList.add("mt-5");
manoHeader.classList.add("aukstis-200");

// arba dar su javascript vanila

manoHeader.className += "bg-info mt-5 aukstis-200";

// su jQuery
$('header').addClass("bg-info mt-5 aukstis-200");
