console.log( " Labas ");


// UZDUOTIS
// A. paimti h2 ir h4 duomenis ir isvest i console
// B.
// pakeisti h3 i "3 Pakeistas"
// C.
// pakeisti h5 i "<u> 5 pakeistas </u>"

  var manoH2 = $('h2').text();
  console.log( "h2 tekstas buvo: ", manoH2 );


  var manoH2kitoks = $('h2').html();
  console.log( "h2 tekstas buvo: ", manoH2kitoks );


// B.
// pakeisti h3 i "3 Pakeistas"
  var manoH3 = $('h3').html(); /// senas tekstas
  $('h3').text( manoH3 + ' 3 pakeistas' );
// C.
// pakeisti h5 i "<u> 5 pakeistas </u>"
$('h5').html(" <u> 5 pakeistas </u> " );
