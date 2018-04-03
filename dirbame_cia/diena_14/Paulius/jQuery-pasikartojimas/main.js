console.log( " Labas ");

//uzduotys pries testa

//1. su JS pakeisti 'header' h1 teksta i "Pakeistas su js"
document.querySelector('header h1').innerHTML = "Pakeistas su js";

//2. su Jquery pakeisti 'footer' h2 teksta i "pakeistas su JQ"
  $('footer h2').text( "Pakeistas su JQ");

//3. su jQuery paimti footer h1 teksta ir atspausdinti i console
  var x = $('footer h1').html(); // nenurodziu nk skliaustuose jis paima
  console.log("footerio h1 yra: ", x);

//4.su jQuery sukurti elementa 'section' su tekstu 'mano tekstas'

    var blokas = $('<section> mano tekstas </section>');
      //arba
var blokas = $('<section></section>').text("mano tekstas");

//5. su jQuery 'section' ideti i body
    $('body').append(blokas);

//6. su jQuery 'section' ideti i header
   blokas.appendTo('header');

//7 su jQuery 'section' ideti tarp header ir footer
  blokas.insertAfter('header');
  //arba
   blokas.insertBefore('footer');

//8. su jQuery footer h4 ideti virs header
  $('footer h4').insertBefore( 'header') ;

  //9. uzdeti klase bg-info ant visu h4
  $("h4").addClass("bg-info");

  //10. uzdeti klase bg-light ant header
 $('header').addClass('bg-danger');

  //11. uzdeti atributa width=30% ant header
    $('header').attr( 'width=30%');  //?

  //12. nuimti klase nuo header klase
  $('header').removeClass('bg-danger'); //?
