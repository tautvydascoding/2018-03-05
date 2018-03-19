


// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

function printDuomenys() {
	var vardas = "Tomas";
	console.log("vardas yra: ", vardas);
}
printDuomenys();


//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gausite klaida ""is not defined""

// console.log(vardas);



//================local && global=========
//var x = "x global";
//function testLocalVar() {
//    var y = "y local";
//    z = "z global";
//    console.log("x", x);
//    console.log("y", y);
//    console.log("z", z);
//}
//testLocalVar();
//console.log("x", x);
//console.log("z", z);
//console.log("y", y);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"

//------
 // UZDUOTIS
 // A) sukurti kintamaji var kakis = "juodas"
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var kakis = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos

var kakis = "juodas";
function tuoletas() {
		var kakis = "baltas";
		console.log("This kakis f-jos viduje", kakis);
}
console.log(kakis);

 // var kakis = "juodas";
 // function testLocalVar() {
 //     var kakis = "baltas";
 //    console.log("kakis:", kakis);
 //    console.log("this.kakis - f-jos viduje: ",  this.kakis);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // testLocalVar();
 // console.log("kakis:", kakis);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"

 //======================
 // var vardas = "Jonas";   // global - kintamasis
 // function myName ( vardas ) { //  vardas - local kintamasis
 //     console.log( " vardas" + vardas);
 //     console.log("this.vardas - f-jos viduje: ",  this.vardas);    // this - pasiekia ~global kintamuosius (tavo tecio kintamuosius)
 // }
 // myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"

function printAntraste(x) {
	console.log(x);
}
printAntraste("Miskuotas");
printAntraste("Miskas");
printAntraste("Vimna");

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

function printStraipsnis1(x,z,y,c) {

	var straipsnis = x + z + y;

	document.querySelector('section').innerHTML += straipsnis;


//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


}
printStraipsnis1("<h2> Mediena </h2>" , "<h4> Materija is kurios gaminame ivairius baldus </h4>" , "<article> Donec iaculis purus ex, non tempus diam consectetur at. Sed sit amet magna id ante lobortis faucibus imperdiet et massa. Suspendisse volutpat eu nibh et dapibus. Nulla vulputate mauris sit amet odio aliquam mollis. Curabitur vel erat eu eros laoreet tristique. Vestibulum congue est id varius rutrum. Maecenas ultrices aliquet dolor a cursus.. </article>");

function printStraipsnis2(x,z,y,c) {
	var straipsnis = x + z + y;
	document.querySelector('.str1').innerHTML += straipsnis;
}
printStraipsnis2("<h2> Saldainis, </h2>" , "<article> Curabitur et pellentesque turpis, dictum feugiat metus. In ac tempor ligula. Etiam sit amet eros et ipsum condimentum pulvinar id sed mauris. Suspendisse vel tortor quis neque convallis fermentum. Duis facilisis pellentesque metus ac suscipit. Proin bibendum lacus ut ullamcorper condimentum.. </article>" , "<article> Sed a diam lectus. Nullam nec dapibus lectus. Morbi elementum, mi sit amet mattis pretium, libero justo consectetur risus, imperdiet mollis nulla elit in nibh. </article>");


function printStraipsnis3(x,z,y,c) {
	var straipsnis = x + z + y;
	document.querySelector('.str2').innerHTML += straipsnis;
}
printStraipsnis3("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec eros ultrices, luctus ante dignissim, tristique massa. Aenean mollis augue at ipsum ornare, et rutrum lectus tristique. Aliquam vitae ex non ex vulputate lobortis. Ut tempus egestas dolor, et maximus tortor scelerisque sed. Pellentesque non laoreet velit. Donec facilisis, leo elementum pharetra congue, purus diam imperdiet enim, vitae blandit lorem massa in velit. Aliquam diam est, congue a leo efficitur, interdum blandit dolor. Vivamus maximus ultricies convallis. Integer et ante a lorem efficitur hendrerit. Donec semper, nunc ac luctus tempus, dui est convallis tortor, vehicula rhoncus purus nibh sed ex. Mauris in arcu pellentesque, pulvinar elit ut, fringilla purus. Ut ut diam semper, condimentum nunc eget, feugiat lorem. Suspendisse sed tellus pulvinar, blandit mi vitae, imperdiet lacus.");

//=======================================
