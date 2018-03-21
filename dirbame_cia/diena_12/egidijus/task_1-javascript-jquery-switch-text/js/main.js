//  visur naudoti tik jQuery!!!!!!

//paimam duomenis jQuery pagalba //pvz: $('h2').text();
var manoH2 = $('h2').text();
console.log("h2 tekstas buvo: ", manoH2);

var manoH2Kitoks = $('h2').html();
console.log("h2 tekstas buvo: ", manoH2Kitoks);

//pakeitimas h3-ju ir pridejimas kito teksto prie esancio
var manoH3 = $('h3').html();
var pakeistiH3 = $('h3').text(manoH3 + '3 Pakeistas');
console.log("h3 tekstas buvo pakeistas: ", pakeistiH3);

//Pabraukiam
$('h5').html('<u> 5-ktas Pakeistas </u>');

var liTekstas = $('li.reklama').text();
console.log('Atspausdinam tik: ', liTekstas);

var visiLi = $('li');
for (var i = 0; i < visiLi.length; i++) {
	console.log('visi li elementai: ', visiLi[i]);
}





// .html kodas:
// <h1>Isijunk konsole</h1>
// <h1>Isijunk konsole</h1>
//
// <h2> 1. h2 Isijunk konsole</h2>
// <h2> 2. h2 Isijunk konsole</h2>
// <h2> 3. h2 Isijunk konsole</h2>

//  <section> 
//      <h2> 1. h2 Isijunk konsole</h2>
//      <h2> 2. h2 Isijunk konsole</h2>
//      <h2> 3. h2 Isijunk konsole</h2>
//      <h2> 4. h2 Isijunk konsole</h2>
//  </section>
//
// <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li classs='reklama'>Gallery</li>
//     <li>Contact</li>
// </ul>

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente. 
// pakeisti i "Pakeista antraste "  
// 

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)

$('li.reklama').attr('style','color:red');
$('li.reklama').attr('title','');


// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$('li').attr('class','nav-item jumbotron bg-danger');
$('li:first').attr('class','nav-item active');

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$('input:first').val('Tomas'); // val - skirtas ivedimo laukams
$('input[name="pavarde"]').val('Kotas');