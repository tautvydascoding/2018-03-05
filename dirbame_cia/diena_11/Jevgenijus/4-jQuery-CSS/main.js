console.log( " Labas ");

// $('h1').css('color','blue');
//
// var manoCSS = {
//   'font-size': '80px',
//   'color': 'b2b2b2' ,
//   'background': 'pink'
//
// };
//
// $('h1').css(manoCSS);

//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
var manoCSS = {
'color': 'blue'
};
$('h1,h2').css(manoCSS);

// A2) kas antra h2 pakeisti i melyna

var manoCSS = {
  'color':'orange'
};
$('h2:even').css(manoCSS);

// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
$('li:last').css('color', 'green');

// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}

$('li:not(".reklama")').eq(3).css('color', 'yellow');
