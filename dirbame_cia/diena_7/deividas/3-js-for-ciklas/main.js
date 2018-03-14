console.log( " Labas ");


////              salyga    i=i+1; // i padideja vienetu
for (var i = 0;   i < 10;   i++) {
    console.log( i );
}

// UZDUOTIS
// isvesti "Tomas" zodi 10 kartu
for (var i = 0; i < 10; i++) {
console.log( "Tomas" );
}
console.warn( "Tomas" );
console.error( "Tomas" );


// =================FOR intro  ======================

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

var  tekstas = " # " ;
for (var i = 0; i < 6; i++) {
  console.log( tekstas );
  tekstas = tekstas + "#";
}
