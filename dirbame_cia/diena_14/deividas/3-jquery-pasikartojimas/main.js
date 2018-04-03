console.log( " Labas ");

// UZDUOTIS pries testa js ir jquery
//1.su js pakeisti header H1 teksta i " Pakeistas su JS "
document.querySelector('header h1').innerHTML = " Pakeistas su JS ";
//2. su jqeury pakeisti footer H2 tksta i "Pakeistas su JQ"
$('footer h2').text("Pakeistas su JQ");
// 3. su jQuery paimti 'footer' h1 teksta ir atspausdinti y console
var x = $('footer h1').html(); // nenurodzius nieko skliausteliuose - paimam duomenis
console.log("footerio h1 yra:", x );

// 4. su Jquery pakeisti 'input' ivedimo 'value reiksme' (pvz:   .val('tomas')   )
// $('input[name="vardas"]').val('Tomas');


// UZDUOTYS
// 1. su Jquery sukurti elementa 'section' su tekstu "mano tekstas"
// var blokas = $('<section> mano tekstas </section>');
//arba
var blokas = $('<section> </section>').text("mano tekstas");
// 2. su Jquery 'section' ideti i 'body'
$('body').append( blokas );
// 3. su Jquery 'section' ideti tarp 'header'
blokas.appendTo('header');
// 4. su Jquery 'section' ideti tarp 'header' ir 'footer'
// ka perkelti       kur perkelti
blokas.insertAfter('header'); // perkelia visa elementa y nauja vieta
// note
blokas.after('header'); // !!! po bloku - sukurs ir ides teksta "header"

//5. su Jquery 'footer h4 ideti virs 'header'
$('footer h4').insertBefore('header');


// UZDUOTYS
// 1. uzdeti klase 'bg-info' ant visu h4
$('h4').addClass('bg-info'); // uzdeda
// $('h4').toggleClass('bg-info'); // nuima

// 2. uzdeti klase bg-warning ant 'header'
$('header').addClass('bg-warning');
// 3. uzdeti atributa 'wdith=30%' ant 'header'
$('header').attr( 'wdith', '30%');
// 4. nuimti klase bg-warning nuo 'header'
$('header').removeClass('bg-warning' );
