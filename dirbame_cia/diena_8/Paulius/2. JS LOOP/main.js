//console.log( " Labas ");

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
//for (var i = 0; i<51;  i++) {
  //console.log ("azuolas" + i);
//}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

//var tekstas = "<article class='bg-info'>  <h2> Azuolas</h2> </article>";

 //for (var i = 0; i < 51; i++){
  //document.write( tekstas );

   //arba
//document.querySelector( 'section' ).innerHTML += tekstas;
//}


// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)" i browser langa (panaudojanti document.write arba innerHTML)
// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

//function printX( xxx ) {
 //for (var i = 0; i < 100; i++) {
  //document.write( xxx );
 //}
//}
//printX("<b> Paulius 99 <b>");

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// skirtingius paveikslelius


// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

//A)

//var tekstas = "--";
//var ilgis = 40;
  //for (var i = 0; i < ilgis; i++) {
    //tekstas = tekstas + '--';}
    //console.log(tekstas);

//arba
    function piestiEilute(eilutesIlgis){
      var tekstas = '--';

      for (var i = 0; i < eilutesIlgis; i++){
        tekstas = tekstas + '--';
      }
      console.log(tekstas);
      }
      piestiEilute(25);

      
