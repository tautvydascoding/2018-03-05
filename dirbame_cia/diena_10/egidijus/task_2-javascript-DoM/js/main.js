function printStraipsnis1(x,z,y,c) {
	var straipsnis = x + z + y;
	document.querySelector('section').innerHTML += straipsnis;
}
printStraipsnis1("<h2> Mediena </h2>" , "<h4> Materija is kurios gaminame ivairius baldus </h4>" , "<article> Donec iaculis purus ex, non tempus diam consectetur at. Sed sit amet magna id ante lobortis faucibus imperdiet et massa. Suspendisse volutpat eu nibh et dapibus. Nulla vulputate mauris sit amet odio aliquam mollis. Curabitur vel erat eu eros laoreet tristique. Vestibulum congue est id varius rutrum. Maecenas ultrices aliquet dolor a cursus.. </article>");

function printStraipsnis2(x,z,y,c) {
	var straipsnis = x + z + y;
	document.querySelector('.str1').innerHTML += straipsnis;
}
printStraipsnis2("<h2> Saldainis, </h2>" , "<article> Curabitur et pellentesque turpis, dictum feugiat metus. In ac tempor ligula. Etiam sit amet eros et ipsum condimentum pulvinar id sed mauris. Suspendisse vel tortor quis neque convallis fermentum. Duis facilisis pellentesque metus ac suscipit. Proin bibendum lacus ut ullamcorper condimentum.. </article>" , "<article> Sed a diam lectus. Nullam nec dapibus lectus. Morbi elementum, mi sit amet mattis pretium, libero justo consectetur risus, imperdiet mollis nulla elit in nibh. </article>");

function printStraipsnis3(x) {
	var straipsnis = x;
	document.querySelector('.str2').innerHTML += straipsnis;
}
printStraipsnis3("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec eros ultrices, luctus ante dignissim, tristique massa. Aenean mollis augue at ipsum ornare, et rutrum lectus tristique. Aliquam vitae ex non ex vulputate lobortis. Ut tempus egestas dolor, et maximus tortor scelerisque sed. Pellentesque non laoreet velit. Donec facilisis, leo elementum pharetra congue, purus diam imperdiet enim, vitae blandit lorem massa in velit. Aliquam diam est, congue a leo efficitur, interdum blandit dolor. Vivamus maximus ultricies convallis. Integer et ante a lorem efficitur hendrerit. Donec semper, nunc ac luctus tempus, dui est convallis tortor, vehicula rhoncus purus nibh sed ex. Mauris in arcu pellentesque, pulvinar elit ut, fringilla purus. Ut ut diam semper, condimentum nunc eget, feugiat lorem. Suspendisse sed tellus pulvinar, blandit mi vitae, imperdiet lacus.");

//=======================================

function myFunction() {
	var x = document.querySelectorAll('.str2');	//gauname array
	// x[2].style.backgroundColor = "red";
	for( var i =0; i < x.length; i++ ) { 		//.length per visa biblioteks ilgi
		x[i].style.backgroundColor = 'red';
	}
}
function myFunction2() {
	var x = document.querySelectorAll('.str2');

	for( var i = 0; i < x.length; i++) {
		x[i].innerHTML = '<h2> Proin quis nulla commodo, tempus nisi sed, laoreet nulla.</h2>';
	}
}

function myFunction3() {                          	// 1. Paslepti diva
	var divo = document.querySelector('.hide');		// 2. Rodyti diva

	if (divo.style.display === "none") {
		divo.style.display = "block";
	} 
	else {
		divo.style.display = "none";
	}
}	