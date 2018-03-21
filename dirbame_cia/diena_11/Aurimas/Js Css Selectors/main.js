console.log( " Labas ");
var namasCss = {
  "font-size": "80px",
  "border":"solid 2px #000",
  "background-color": "red",
  "color": "black"
};

// $("h1").css(namasCss);
//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1
$("h1, h2").css("color","blue");

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
// A2) kas antra h2 pakeisti i melyna
// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}
$("h2:even").css("color","red");
$("li:last").css("color","green");
$("li:not('.reklama')").css("color","yellow");
$("li:last-child").css("color","red");
