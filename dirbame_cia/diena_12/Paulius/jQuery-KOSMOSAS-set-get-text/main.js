console.log( " Labas ");




//paimti h2 ir h4 duomeni ir isvesti i console

 var manoH2 = $('h2').text(); //paims tekstas
 console.log("h2 tekstas buvo ", manoH2);

 var manoH2kitoks = $('h2').html();
 console.log("h2 tekstas dabar ", manoH2kitoks);

//pakeissti h3 i "3pakeistas"
 var manoH3= $('h3').html();
 $('h3').text(manoH3 + ' 3 pakeistas'); //pakeisim visus h3 i teksta ideta

//pakeisti H5 i " <u> 5pakeistas </>"

  var manoH5 = $('h5').html();
  $('h5').text("<u> 5 pakeistas </u>");

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$('h1:first').text("antraste nr: 1");
$('h1:nth-of-type(2)').text("antraste nr: 2");
$('h1:last').text("antraste nr: 3");

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "

$('section h2').html("pakeista antraste ");


// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var liTekstas = $(' li.reklama ').text();
console.log( "li tekstas yra:", liTekstas );

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

var visiLi = $('li');
for(var i = 0; i < visiLi.length; i++){
  console.log( visiLi.eq(i).text() );
}

// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)

$('li.reklama').attr('style', 'color:red');
$('li.reklama').attr('title', "tu uzvedei ant manes ");

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$('li').attr('class', 'nav-item'); //istrins buvusias klases
$('li').addClass('nav-item bg-warning m-3 p-3');

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$('input').val('Tomas');
