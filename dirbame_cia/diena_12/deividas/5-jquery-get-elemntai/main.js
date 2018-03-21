console.log( " Labas ");



// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)


$('h1:first').text("Antraste nr: 1");
$('h1:nth-of-type(2)').text("Antraste nr: 2");
$('h1:last').text("Antraste nr: 3");

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
//
$('section h2').html( "Pakeista antraste ");
// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var liTekstas = $(' li.reklama ').text();
console.log("li Tekstas yra:", liTekstas);
// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus
var visiLI = $('li');
for (var i = 0; i < visiLI.length; i++) {
  console.log( visiLI.eq(i).text() ); // eq(numeris) is masyvo paims jquery objekta

}
//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)
 $('li.reklama').attr( 'style', 'color:red');
 $('li.reklama').attr('title', 'Tu uzvedei ant manes pelyte');
 $('li.reklama').attr('width', '20px');

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)

// B. pirmam "li" elementui uzddeti dar viena klase: "active"

// $('li').attr('class', 'nav-item bg-info m-3 p-3'); // istrins buvusias klases
$('li').addClass('nav-item bg-info m-3 p-3')

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$('input[name="vardas"]').val('Tomas');
