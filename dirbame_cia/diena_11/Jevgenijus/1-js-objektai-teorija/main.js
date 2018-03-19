console.log( " Labas ");


var namas= {
  aukstusk: 4,
  butusk: 109,
  sildymas: "dujos",
  stoviu: function () {
    console.log("stoviu stoviu stoviu...");
    console.log("stoviu...");
  }
};
  remontas: function () {
    console.log("jauneju:)";
}
};
namas.stoviu();
namas.remontas();
// pataisyti


console.log(namas);

console.log("namo aukstu skaicius:" + namas.aukstusk);
console.log("namo butu skaicius:" + namas.butusk);
console.log("namo sildymo tipas:" + namas.sildymas);



//prideti daugiau kintamuju
//kaminu skaicius - 3
// spalva geltona-oranzine

namas.kaminusk = 3;
console.log(namas); //patikrinimui




//ideti funkcija "stoveti()" kuri isveda i konsole "stoviu"
//ideti funkcija "remontas()" kuri isveda i konsole "kauneju"

//anonime funkcija (neturi pavadinimo, todel isskaukia pati save, tik kompiuteriui perskaicius ja)
$('h1').click( function(){
  console.log("as save issaukiau");
});

//arba - kitoks paprastas funkcijos kurimo budas
var kalbeti = function () {
    console.log("kalbu");
};
kalbeti();
