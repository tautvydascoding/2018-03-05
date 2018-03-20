console.log( " Labas ");
// ======mokinaes css keistu su jquery
$('h1').css(  'color', 'blue');

var manoCSS = {
    'font-size': '80px',
    'color': '#b2b2b2',
    'background-color': 'pink'
}


$('h1').css(  manoCSS );


//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
$( "h1, h2" ).css( "color", "blue" );
// A2) kas antra h2 pakeisti i melyna
$( "h2:even(2)").css( "color", "red" );

// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
$( "li" ).last().css( "background", "green" );
// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}
// $( "li" ).css( "color", "yellow");
$('li').eq(3).css( "color", "yellow");

$(' li:not(".reklama") ').eq(3).css( 'color', 'yellow');
