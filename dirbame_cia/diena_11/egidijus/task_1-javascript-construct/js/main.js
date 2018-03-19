$('.slepti').click (	function(){
	if ($(".vanish").is(":hidden")) {
		$(".vanish").show(400);
	} else {
		$(".vanish").slideUp();
	}
});

//Objektu mokymasis

var namas = {
	aukstuSk: 4,
	butuSk: 109,
	sildymas: "dujos",
	stoviu: function() {
		console.log("stoviu......");
		console.log("smagiai stovineju....");
	},
	remontas: function() {
		console.log("Namas Tvarkomas......");
	}
}

namas.stoviu();
namas.remontas();

namas.kaminuSk = 3;
namas.spalva = "geltona-orandzine"

console.log("namo aukstu skaicius: " + namas.aukstuSk);
console.log("namo aukstu skaicius: " + namas.butuSk);
console.log("namo aukstu skaicius: " + namas.sildymas);
console.log("namo aukstu skaicius: " + namas.kaminuSk);
console.log("namo aukstu skaicius: " + namas.spalva);



//funkcija save issisaukia
$('h1').click (		function(){
	console.log("as save issisaukiau");
});
//arba //Kitoks paprastos funkcijos kurimas
var kalbeti = function() {
	console.log("kalbu");
}
kalbeti();