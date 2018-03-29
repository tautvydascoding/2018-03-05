console.log( " Labas ");

// ________________add_class_______________

// 2
// css faile apsirasyti klase "active":
// fono spalva: #b3b3b3; teksto storis: 700;

// 2.1
// su js sukurti menu naudojant <ul> <li> :
// Home, Gallery, About, contacts
var i=0;
var pirmtxt=[];
var lielements=[];
var masyvas=["Home","Gallery","About","Contacts"];
var h111=document.querySelector('h1');
var ulai=document.createElement("ul");
document.querySelector("body").appendChild(ulai);
document.querySelector("Body").insertBefore(ulai,h111);
// ulai.appendChild(pirm);
// pirm.appendChild(pirmtxt);

for (i = 0; i < masyvas.length; i++) {
  lielements[i]=document.createElement("li");
  pirmtxt[i]=document.createTextNode(masyvas[i]);

}


// .classList.add("menu");





// 2.2
// suprogramuoti, kad paspaudus ant bet kurio menu punkto (li) jam uzsidetu klase "active
// 2.2.2 paspausti ant visu <li> elementu

// 2.3
// patobulinti 2.2 koda, kad paspaudus ant metu <li> elemento, pries tai nuimtu "active klase nuo kilu <li> elementu:
// 2.3.A  patikrinti, jeigu kalse "active" buvo uzdeta ant kitu  <li> pasalinti nuo visu menu "li" elementu klase "active"
// 2.3.B  uzdeti klase "active" ant paspausto elemento
//
var a=10;
if ( a===10) {
    var b=5;
    var a=11;
}

console.log("nauja",a);
console.log("nauja",b);
