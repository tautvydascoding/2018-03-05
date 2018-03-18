
// sukurti f-ja getData(masyvas, x), kuri grazina is masyvo "masyvas" "x" stalciaus duomenis

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

function getData(x){
  for (var i = 0; i < x.length; i++) {
    console.log(i+". El:",x[i]);
  }
}
// getData(names);


console.log("=================================================================");
// function bandymas(x,y){
//   if (x>=y) {
//     console.log("Pirmas did: ",x);
//
//   }else {
//     console.log("Antras did: ",y);
//   }
// }
// bandymas("ZzA","Zza"); // Regis A < a;



//  sukurti f-ja rikiuojaDid(masyvas), kuri grazina surikiuota masyva dedejimo tvarka
var skaic=[1,1,1,1,1,1,1,200,1,1,1,119,111,81,77,22,12,4,4,4,22,9,9,9,9,9,9,9,81];

function rikiuojaDID(x){
for (var i = 0; i < x.length; i++) {
  for (var j = 0; j < x.length; j++) {
    if (x[j]>=x[j+1]) {
      var y=x[j];
      x[j]=x[j+1];
      x[j+1]=y;
    }
  }
}
console.log("Pertvarkytas masyvas didejimo tvarka: \n",x);
}
rikiuojaDID(names);
rikiuojaDID(skaic);



console.log("===============================================================");
//  sukurti f-ja rikiuojaMaz(masyvas), kuri grazina surikiuota masyva mazejimo tvarka

function rikiuojaMAZ(x){
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x.length; j++) {
      if (x[j]<=x[j+1]) {
        var y=x[j];
        x[j]=x[j+1];
        x[j+1]=y;
      }
    }
  }
  console.log("Pertvarkytas masyvas mazejimo tvarka: \n",x);
}
rikiuojaMAZ(names);
rikiuojaMAZ(skaic);






var a=[];
var i=0;
var j=0;
var max=0;
var k=0;
var nr=0;
var temp=[];
var p=0;
var nem=[];
// sukurti f-ja rastiKiekElementaiPasiakrtoja(masyvas), to find the most frequent item of an array
function rastiKiekElementaiPasiakrtoja(x){
  nem=x.slice(0,x.length);
  for ( k = 0; k < nem.length; k++) { //issirikiuojam masyva didejimo tvarka, kad butu paprasciau dirbti;
    for ( j = 0; j < nem.length; j++) {
      if (nem[j]>=nem[j+1]) {
        var y=nem[j];
        nem[j]=nem[j+1];
        nem[j+1]=y;
      }
    }
  }
  console.log("Pertvarkytas masyvas: ",nem);
  for ( i = 0; i < nem.length; i++) {
    var c=0; //butinai sitoje vietoje vel prisiskiriam c =0, tam jog kai dabar skaiciuosim sekancia, jau x[i+1] reiksme, c vel butu lygus 0, o ne pries tai buvusio el x[i] pasikartojimu skaiciui.
    for ( j = 0; j < nem.length; j++) {
      if (nem[i]==nem[j]) {
        c++; //kiekviena karta, kai funkcija ras elementa lygu sau, c=c+1, ty, praejus visa cikla, zinosim, kiek kartu pasikartojo el x[i]
      }
    }
    a[i]=c; //sudarom masyva, kuriam priskiriam visu patikrintu elemntu pasikartojimu skaiciu (t.y. a=[c (x[i] el pasikarojimai),c (x[i+1]),c (x[i+2]) ,c,c,c,c,c,c....]
   if (nem[i]!==nem[i+1]) {
     console.log(nem[i]+"-El. pasikartojo tiek kartu: ",a[i]+";");
   }
  }
  for ( k = 0; k < a.length; k++) {
    if (max<a[k]) {
      max=a[k]; // cia max - didziausias pasikartojimu skaicius, ji prisilyginom 0, ir keiciam radus vis didesni sk is sudaryto pasikarotjimu masyvo a[]
      nr=k; //nr elemento masyve a, kuris pasikartojo dazniausiai numeris, jis sutampa ir su numeriu elemnto masyve kuri issirikiavom/davem funkcijai.
    }
  }
  for (var k = 0; k < a.length; k++) {
    if (max==a[k] && nem[k]!==nem[k+1] ) {
      p++;    //
      if (p==1) {
        console.log("Dazniausiai pasikartojo el:",nem[nr]+",ir jis pasikartojo tiek kartu:",max+";");
      }else {
        console.log("Taip pat "+max+" kartus pasikartojo skaicius: "+nem[k]+";");
      }
    }
  }
  // Tuo atveju, jei pas mus masyve yra KELI skaiciai, kuriu pasikartojimu skaicius yra ir diziausias ir vienodas:

}
var randomnumbers= [0.5,4,7,8,2,5,1,1,1,2,2,5,8,2,1,6,6,6,88,1,1,5,2,5,5,5,2,84,11,55,77];
rastiKiekElementaiPasiakrtoja(randomnumbers);
console.log("orginalus masyvas",randomnumbers);




console.log("===============================================================");
// rikiuojaMAZ(randomnumbers);
// rastiKiekElementaiPasiakrtoja(randomnumbers);

var karpymui=[1,2,3,4,5,6,9,8,7,3,2,1,4,5,6,9,8,77,1,5,3,1,5,4,2,0,2,2,1];
// sukurti f-ja kuri pasalina besikartojancias reiksmes (remove duplicate items from an array )
function removeduplicate(x){
  var nema=x.slice(0,x.length);
  for ( i = 0; i < nema.length; i++) {
    for ( var k = 0; k < nema.length; k++) {
      if (nema[i]==nema[k+1]) {
        nema.splice(k+1,1);
      }
    }
  }

  console.log("Iskarpytas masyvas, be pasikartojanciu reiksmiu:", nema);
}
removeduplicate(karpymui);
console.log("Orginalus masyvas:", karpymui);
