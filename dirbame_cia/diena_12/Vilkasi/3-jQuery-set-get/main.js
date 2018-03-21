console.log( " Labas ");


//paimti h2 ir h4 ir issivesti i console


// var manoH2 = $('h2').text();
// console.log("h2 tekstas buvo: ", manoH2);
//
// var manoH2kitoks = $('h2').html();
// console.log("h2 tekstas buvo: ", manoH2kitoks);
//
// var manoH3 = $('h3').text();
// $('h3').text( manoH3 + "3 Pakeistas" );
//
// $('h5').html("<u> 5 pakeistas </u>");

//  visur naudoti tik jQuery!!!!!!


// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)
$('h1:first').text("Antraste nr: 1");
$('h1:nth-of-type(2)').text("Antraste nr: 2");
$('h1:last').text("Antraste nr: 3");
//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
//
$('section h2').text("Pakeista antraste");


// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var li = $('li.reklama').text();
console.log("li tekstas yra: ",li);

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

var visiLi = $('li');
for (var i = 0; i < visiLi.length; i++) {
console.log(visiLi.eq(i).text()); //eq(numeris) paima is masyvo jquery objekta
}

//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)

$('li.reklama').attr('style', 'color: red');
$('li.reklama').attr('title', 'Tu uzvedei ant manes pelyte');
// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$('li').attr('class','nav:item');
$('li').addClass('nav:item bg-warning m-3');

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'


$('input[name="vardas"]').val('Tomas');
$('input[name="pastas"]').val('a@a.lt');
