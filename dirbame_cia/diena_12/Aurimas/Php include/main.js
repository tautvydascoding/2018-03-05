//
// var manoH2=$("h2").text();
// console.log("manoH2:\n",manoH2);
//
// var manoh2kitoks=$("h2").html();
// console.log("manoh2kitoks:\n",manoh2kitoks);
//
//
// var manoH3=$("h3").html();
// var pakeistash3=$("h3").text(manoH3+' 3 pakeistas');
// console.log("Pakeisti h3: \n",pakeistash3);

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX" ( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$("h1:first").text("Antraste nr: 1");
$("h1:nth-of-type(2)").text("Antraste nr: 2");
$("h1:last").text("Antraste nr: 3");


//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
//

$("h2","section").text("Pakeista antraste");
$("section h2").text("Pakeista antraste antra kart");

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var litext=$("li.reklama").text();
console.log("li tekstas:",litext);

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

console.log($("li").text());
var massy=$("li");
console.log(massy);
console.log(massy[0]);

for (var i = 0; i < massy.length; i++) {
  console.log(massy.eq(i).text());
}
// var mama=massy[0].text();
// console.log(mama);
//-------advance --------



// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)

var paimtas=$("li:nth-of-type(2)").text();
$("li:nth-of-type(2)").text($("li.reklama").text());
$("li.reklama").text(paimtas);

//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li classs='reklama'> ir jam ideti dar viena taributa: style='color: red'   (naujant jQuery)

$("li.reklama").attr("style","color:Red");
$("li.reklama").attr("title","uzvedei ant manes pelyte");

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: classs='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$("li").attr("class","nav-item"); // istrins buvusias klases
$("li:first").addClass("nav-item, bg-info"); //prides naujas klases

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt' -->

$("input[name='vardas']").val("Tomas");
