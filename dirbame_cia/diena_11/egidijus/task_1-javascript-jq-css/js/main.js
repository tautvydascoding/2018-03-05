// $('.slepti').click (	function(){
// 	if ($(".vanish").is(":hidden")) {
// 		$(".vanish").show(400);
// 	} else {
// 		$(".vanish").slideUp();
// 	}
// });

console.log('labas');

// $('.kurejas').click(function(event){
// 	// document.write('ar veikia?');


// var straipsnis = document.createElement('article');
// var tekstas = document.createTextNode("Tekstas sukurtas javaScripte");

// document.querySelector('.main').appendChild(straipsnis);
// straipsnis.appendChild(tekstas);
// });


// //Kitas mygtukas su header kurimu
// $('.header-creator').click(function(event) {
	
// 	var header = document.createElement('h1');
// 	var tekstas = document.createTextNode("Nav baras");

// 	var manoH1 = document.querySelector('.header1').appendChild(header);
// 	header.appendChild(tekstas);

// 	document.querySelector('body').insertBefore(  header , manoH1 );

// });
// $('h1').css('color','red');

// var manoCSS = {
// 	'font-size': "80px",
// 	'color': "blue",
// 	'background-color': 'pink'
// };
// $('p').css(manoCSS);

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
// A2) kas antra h2 pakeisti i melyna 
// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') **pvz.: li:not('.reklama') {}	

$('h1, h2').css('color','red');

$('h2:odd').css('color',"blue");

$('li:last').css('color',"green");

$('li:not(.reklama)').css('color','yellow');

