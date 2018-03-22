console.log( " Labas ");

//UZDUOTYS prie testa JS ir jQuery
//1. su js pakeisti 'header' H1 teksta i "pakeistas su js"
document.querySelector('header h1').innerHTML = "pakeistas su js";

//2. au jQuery pakeisti 'footer' H2 teksta i "Pakeistas su jQ"

$('footer h2').text("Pakeistas su JQ");

//3. su jQuery paimti 'footer' H1 teksta ir atspausdinti i console

var x= $('footer h1').html(); // nenurodzius nieko skliausteliuose jis paima duomenys

console.log( "footerio h1 yra:", x);


//UZDUOTYS
//1. su jQuery sukurti elementa 'section' su tekstu 'mano tekstas'
// var blokas = $('<section>mano tekstas</section>');
//arba
var blokas = $('<section></section>').text("mano tekstas");

//2. su jQuery 'section' ideti i 'body'
$('body').append(blokas);
//3. su jQuery 'section' ideti i 'header'
blokas.appendTo('header');

//4. su jQuery 'section' ideti tarp 'header' ir 'footer'

//  KA                KUR
blokas.insertAfter('header'); // perkelia visa elementa i nauja vieta
blokas.after('header'); //note: po bloku sukurs ir ides teksta "header"

//5. su jQuery 'footer h4' ideti virs 'header'

$('footer h4').insertBefore('header');



//UZDUOTYS
//1. uzdeti klase 'bg-info' ant visu h4
$('h4').addClass('bg-info');
//arba
//$('h4').toogleClass('bg-info');

//2. uzdeti klase 'bg-warning' ant 'header'

$('header').addClass('bg-warning');

//3.uzdeti atributa 'width=30%' ant 'header'
$('header').attr('width', '30%');


//4. nuimti klase bg-warning nuo 'header'
$('footer').removeClass( 'bg-warning');


//
