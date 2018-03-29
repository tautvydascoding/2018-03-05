console.log( " Labas ");
//kintamieji
var x="Tomas";
var sk=9;
var arVedes= true;

var masinos= ['Audi','BMW','Opel']; //array

masinos.push('Suzuki');
console.log(masinos);

var bmwyra=masinos[1];
console.log('bmw yra stalciuje:',masinos.indexOf("BMW"));

// console.log();


//objektai
var zmogus={
  vardas1: "Karolis",
  pavarde: "karaliauskas",
  amzius:13,
  einu: function(){
    console.log("tikrai einu");
  }
};

console.log(zmogus);
zmogus.vardas1="Aurimas";
console.log(zmogus);
zmogus.vardas="Lapinas";
console.log(zmogus);
zmogus.einu();
//====================================================================//

//su js pakeisti h1 teksta
document.querySelector('header h1').innerHTML="Pakeistas";
$("footer h2:first").text("Pakeistas su JQ");

console.log($("footer h2:first").text());

var sec=$('<section></section>').text("Mano tekstas");
$('<section>Mano tekstas</section>');

$("body").append(sec);
// sec.appendTo("header");
$('sec').insertAfter('header');
$('h4:last').insertBefore('header');
// sec.insertAfter('header');// insert kuria elementa
// sec.appendBefore('footer');

$('h4').addClass("smart");
$('h4').toggleClass("smart2"); //uzdes klase smart2
$('h4').toggleClass("smart2"); //nuims klase smart2
// document.querySelector('h2').class.list
$("header").addClass("bg-warning");
$("header").attr("height","300px");
$('header').removeClass("bg-warning");
