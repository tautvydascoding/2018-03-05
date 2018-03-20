console.log( " Labas ");


$('h1').css('color', 'blue');


var manoCSS = {
  'font-size': '80px',
  'color': '#b4b4b4',
  'background-color' : 'purple'
};

  $('h1').css( manoCSS);

  // A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
  // A2) kas antra h2 pakeisti i melyna
  // B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
  // C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}

//A
  $('h1, h2').css('color', 'blue'); //pakeitem visus h1 ir h2 spalvas

//A2
$("h2:odd").css('color', 'green'); //kas antra h2 nudazem

 //B

  $( "li:last" ).css( 'color','red' ); //paskutiny li elementa pakeitem i raudona spalva



   $('li:not(".reklama")').css('color', 'yellow');
   //visus li pakeisti i geltona spalva isskyrus viena su .reklama klase
