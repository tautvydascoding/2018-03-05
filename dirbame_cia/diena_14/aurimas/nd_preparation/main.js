console.log( " Labas ");
console.log("Labas222");

// visas uzduotis atlikti naudojant js (arba jquery jeigu destytojas leidzia - sisiklausti)

// 1 uzduotis
// su js sukurti <img elementa 200x200 dydzio
// pasitikrinti su console"
var imeg=$('<img/>');
$("img").attr('width',"200px");
$("img").attr('height',"200px");
// var image1=document.createElement("img");
// var image2=document.createElement("img");
// document.querySelector("img").classList.add('newimg');
// document.querySelector("img").setAttribute("width","200px");
// document.querySelector("img").setAttribute("height","200px");


// 1.1
// su js sukurti <header> ir <footer>
// ir ideti juos i body
var hed=$("<header></header>");
var med=$("<section></section>");
var fttt=$("<footer/>");
var h11=$('<h1>mmmm</h1>').text("Labas"); 
$("body").append(hed);
$("body").append(med);
$("body").append(fttt);
$("body").append(h11);
// var headas=document.createElement("header");
// document.querySelector('body').appendChild(headas);
// document.querySelector('body').appendChild(headas);
// var footas=document.createElement("footer");
// document.querySelector('body').appendChild(footas);

// 1.2
// i <header> ir <footer> ideti <img> elementa
  $('header').append(imeg);
// headas.appendChild(image1);
// footas.appendChild(image2);
// 1.3

$("imeg").css("height","100px");
// css faile aprasyti .logo klase:
//      dydis 100x100, seselis i visas puses per 10px
// document.querySelector('h1').style.color = "blue";
// 1.4
// <img> elementui, kuris yra <header> elemente,  uzdeti klase "logo"
// $("img:first").addClass("logo");
$('imeg').addClass('logo');
$('h1').addClass('logos');
$('h1').addClass('logosss');
// $('h1').classListAdd('logosssas');
var vasss=["Labas","Pasaui","Kaip","Sekas?"];
for (var i = 0; i < 4; i++) {
  var liak=$('<h4/>');
  liak.text(vasss[i]);
  $('body').append(liak);

}

// 1.5
// sukurti <main> elementa po <header> elementu  (<header></header>  <main>text</main>   <footer></footer>)
// var mainas=document.createElement("main");
// document.querySelector("body").appendChild(mainas);
// document.querySelector('body').insertBefore(mainas,headas);
// // 1.6
// sukurti <article> elementa su viduje <h2> ir <p> elementais (irasyti ir teksto i abu)
// var articalas=document.createElement("article");
// var h22=document.createElement('h2');
// var ppp=document.createElement("p");
// var txt=document.createTextNode("Labas pasaulli");
// articalas.appendChild(h22);
// articalas.appendChild(ppp);
// document.querySelector('body').appendChild(articalas);
// ppp.appendChild(txt);
// h22.innerHTML="Labas pasalelii";

// 1.7
//  ideti 1.6 <article> elementa (kuris laiko savyne <h2> ir <p>)  i <main> elementa
// mainas.appendChild(articalas);
// 1.8
// perkelti LOGOTIPA i kita vieta naudojant js
// A) perkelti i footer
// footas.appendChild(image1);
// B) perkelti i article ( tarp h2 ir p)
// articalas.appendChild(image1);
// articalas.insertBefore(image1,ppp);

// ---------------------------------
// 1.9 daugiau uzduociu su perkelimu elementu append, prepend, after, before, appendTo
// ---------------------------------


// =================click=========
// 1.9.1
// paspaudus ant logo ji suanimuoti jQuery

// LOGO keliauja i desine ir virsu ekrano puse
// tampa permatomas 0.5
//
