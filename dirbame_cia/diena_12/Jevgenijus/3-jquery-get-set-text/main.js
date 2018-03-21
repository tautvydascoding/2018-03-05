console.log( " Labas ");

//paimti h2 ir h4 duomenis ir isvesti i console

var manoH2 = $('h2').text();
console.log("h2 tekstas buvo:", manoH2);

var manoH2kitoks = $('h2').html();
console.log("h2 tekstas buvo:", manoH2kitoks);


// pakeisti h3 i "3 pakeistas"
var manoH3 = $('h3').html(); //sudeda tekstus
$('h3').text(manoH3 +'3 Pakeistas');


//pakeisti h5 i "<u>5 Pakeistas</u>"
$('h5').html("<u>Pakeistas</u>");
