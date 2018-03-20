// console.log( " Labas ");
//
// $("h1").css("color", "blue");
//
// var manoCSS = {
//   'font-size': '80px',
//   'color': '#b2b2b2',
//   'background-color': 'pink'
// };
//
// $('h1').css(manoCSS);

//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1

// .html kodas:
// <h1>Isijunk konsole</h1>
// <h1>Isijunk konsole</h1>
//
// <h2> 1. h2 Isijunk konsole</h2>
// <h2> 2. h2 Isijunk konsole</h2>
// <h2> 3. h2 Isijunk konsole</h2>
//
//  <section>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//  </section>
//
// <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li classs='reklama'>Gallery</li>
//     <li>Contact</li>
// </ul>
//        <input type="text" name="vardas" value="">
//        <input type="email" name="pastas" value="">

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
// $("h1, h2").css("color", "blue");
// arba
// var manoCSS = {
//   "color": "blue"
// };
// $('h1, h2').css(manoCSS);
// A2) kas antra h2 pakeisti i melyna
$("h2:odd").css("color", "blue");
// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)
$("li:last").css("color", "red");
// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}
$('li:not(".reklama") ').css("color", "yellow");
