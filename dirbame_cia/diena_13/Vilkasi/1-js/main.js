console.log( " Labas ");


var section = document.createElement('section');
var h1 = document.createElement('h1');
var tekstas = document.createTextNode('Tekstas');

console.log(section, h1, tekstas);

h1.appendChild(tekstas);
section.appendChild(h1);

document.querySelector('body').appendChild(section);
//ARBA
var h1KurisJauYraBody = document.querySelector('h1');
//     tevinis-virs ko dedame              ka dedame      virs Ko dedame
document.querySelector('body').insertBefore(section,h1KurisJauYraBody);

// h1.classList.add('bg-info');
// h1.classList.add('mt-5');
// h1.classList.add('aukstis-200');

h1.className += "bg-info mt-5 aukstis-200";

// $('h1').addClass('bg-info mt-5 aukstis-200');


//-----------SU Jquery--------------//

// function objektas (name, age) {
//     this.name = name,
//     this.age = age;
// };
// var objektas = new objektas (name, age) {
//     this.name = name,
//     this.age = age;
// };
//
//
// var zmogus = objektas ("tomas", 21);
//
// //===============Create element==================
// var elementas0 = "<p> <button>Register</button> </p>";
// var elementas1 = "<p>" +
//     "<button>Register</button>" +
//     "</p>";
//
//
// var elementas2 = $("<p> </p>").html("<button>Register</button>");
//  // note: If a string is passed as the parameter to $(), jQuery examines the string to see if it looks like HTML (i.e., it starts with <tag ... >). If not, the string is interpreted as a selector expression
// // note2: When passing HTML to jQuery(), note that text nodes are not treated as DOM elements. With the exception of a few methods (such as .content()), they are generally ignored or removed. eg: "<p>text</p> text" text may be removed
// //var elementas2 = $("<p/>").html("<button>Register</button>"); // shortcut
//
// // arba js
//
// var elementas2 = document.createElement("p");
// elementas2.innerHTML = "<button>Register</button>";
// //==================
// // more complex
// $("<footer></footer>", {
//    "class": " bg-info mt-2 ",
//    text: "tekstas viduje tago",
//    click: function() {
//        $( this ).hide( );
//    }
// }).appendTo( "body" );
//
// // <footer class='bg-info mt-2' onclick='function() {  $( this ).hide( ); }' > tekstas viduje tago </footer>
//
// //=============delete===========
// $("div").remove();  //  removes the selected element(s) and its child elements.
// $("div").empty();  //   removes the child elements of the selected element(s).
//
// $("p").remove(".test");         //removes all <p> elements with class="test":
// $("p").remove(".test, .demo"); // removes elements with class="test" and class="demo":
//
//
//
//
