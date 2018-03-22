console.log( " Labas ");

//su js pakeisti header h1 teksta i pakeistas su js
document.querySelector('header h1').innerHTML = "Pakeistas su js";
//su jq pakeisti footer h2 teksta i pakeistas su jq
$('footer h2').text("Pakeistas su jq");
//su jq paimti footer h1 teksta ir atspausdinti i console
var x = $('footer h1').text();
console.log("Footerio h1:", x);




//su jq sukurti elementa 'section' su tekstu 'mano tekstas'
var blokas = $('<section></section>').text("mano tekstas");
//su jq 'section' ideti i body
$('body').append(blokas);
//su jq section ideti i header
blokas.appendTo('header');
blokas.insertAfter('header');

$('footer h4').insertBefore('header');


//uzdeti klase bg-info ant visu h4
$('h4').addClass('bg-info');
//uzdeti klase bg-warning ant "header"
$('header').addClass('bg-warning');
//uzdeti atributa 'with=30' ant header
$('header').attr('width','30%');
//nuimti klase bg-warning nuo footer
$('header').removeClass('bg-warning');
