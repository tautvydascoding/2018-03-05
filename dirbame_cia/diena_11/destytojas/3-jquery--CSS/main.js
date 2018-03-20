console.log( " Labas ");

//-----------mokinames CSS keisti su jquery----

$('h1').css(  'color', 'blue' );

 var manoCSS = {
     'font-size': '80px' ,
     'color': '#fff' ,
     'background-color' : 'pink'
 };

$('h1').css(   manoCSS  );


//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1

// .html kodas:


// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
// A2) kas antra h2 pakeisti i orange
// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}
// A
$('h1, h2').css('color', 'blue');
// A2
$('h2:odd').css('color', 'orange');
// B
// $('li:last').css('color', 'green');
// $('li').last().css('color', 'green');
$('li').eq(3).css('color', 'green');

// C
$('  li:not(".reklama")  ').css('color', 'yellow');
