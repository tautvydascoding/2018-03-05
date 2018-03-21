console.log( " Labas ");

// UZDUOTIS
// A. paimti h2 ir h4 duomenis ir isvesti i console
// B. pakeisti h3 i "3 Pakeistas"
// c. pakeisti h5 i " <u> 5 Pakeistas </u>"


var manoH2 = $('h2').text();
console.log("h2 tekstas buvo: ", manoH2);

var manoH2kitoks = $('h2').html();
console.log("k2 teksta buvo: ", manoH2kitoks);

// D. pakeisti h3 i "3 Pakeistas
var manoH3 = $('h3').html(); //senas tekstas
$('h3').text(manoH3 + '3 Pakeistas');

// C. pakeisti h5 i <u> 5 pakeistas </u>
$('h5').html("<u>5 Pakeistas</u>");

//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$('h1:first').text("Antraste nr. 1");
$('h1:nth-of-type(2)').text("Antraste nr. 2");
$('h1:last').text("Antraste nr. 3");

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
//

$('section h2').html("Pakeista antraste");

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var liTekstas = $('li.reklama').text();
console.log("li tekstas yra: ", liTekstas);

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

var visiLi = $('li');
for (var i = 0; i < visiLi.length; i++) {
  console.log(visiLi.eq(i).text()); // eq(numeris ar i) - is masyvo paims jquery objekta
}

//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)

$('li.reklama').attr('style', 'color:red');
$('li.reklama').attr('title', 'Tu uzmetei ant manes pelyte');
$('li.reklama').attr('widt', '20px');

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$('li').attr('nav-item bg-info m-3 p-3'); // istrina pries tai buvusias klases
$('li').addClass('nav-item bg-info m-3 p-3'); // papildomai prides klases

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$('input[name="vardas"]').val('Tomas');
