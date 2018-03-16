console.log( " Labas ");
// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
	// UZDUOTIS
	var prekiautojai = []; // empty array

	prekiautojai[0] = "IKI";
	console.log(  "prekybos centrai:", prekiautojai  );
	prekiautojai[1] = "Maxima";
	prekiautojai[2] = "Lidl";
	prekiautojai[3] = "Rimi";
	prekiautojai[50] = "Cia Market";

	// A) pervadinti pirma stalciu
	prekiautojai[1] = "Barbora";
  console.log(prekiautojai[1]);
  console.log(prekiautojai[3]);
	// B) sukeisti antro ir trecio stalciu reiksmes vietomis.
  var a=prekiautojai[1], b=prekiautojai[3];
  console.log(a,";",b);
  prekiautojai[1]=b;
  prekiautojai[3]=a;
console.log(prekiautojai[1],";",prekiautojai[3]);

	// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

	// C) padaryti B) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

  function elsukeitimas(x,y){
    var nx=prekiautojai[x], ny=prekiautojai[y];
    prekiautojai[x]=ny;
    prekiautojai[y]=nx;
    console.log("Sukeisiti el yra",x+"-as ir",y+"-as ir dabar",x,"el. yra:",prekiautojai[x]+",o ",y,"el. yra:",prekiautojai[y]+";");
  }
elsukeitimas(1,50);
// -------- --Array / Masyvai  TEORIJA (~2h)--------------------
var names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);

console.log(names.length);
console.log(prekiautojai.length);

console.log(names.join("a "));
console.log(names.shift(),names);
console.log(names.pop(),names);



// =========================================================
// uzduotis  Array
var keiautojas = ["Small", "Big", 19, "Technomatematika"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
console.log(keiautojas);
console.log(keiautojas.push("butelis vandens"));
console.log(keiautojas);
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
keiautojas.unshift("Apples");
console.log(keiautojas);
// 3. istrinti 3-cia elmenta
// splice delete
var pvz=[];
pvz[0]="Apple";
pvz[1]= "2a_";
pvz[2]="3a_";
pvz[3]="4a_";
pvz[4]="5a_";
pvz[5]="Kiwi";
var pvz2=["_","12",13,25,"kkk","klaip"];
console.log(pvz);
pvz.splice(2,1,"Art",25,"Text");
console.log(pvz);
pvz.splice(-3,1);
console.log(pvz);
pvz.splice(-3,2);
console.log(pvz);
pvz.splice(3);
console.log(pvz);
console.log("žžžžžžžžžžžžž");

console.log(pvz2);
console.log(pvz2.splice(3,2));
console.log(pvz2);

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
var pvzz=[];
for (var i = 0; i < 50; i++) {
  pvzz[i]=0;
}
console.log(pvzz);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
var a=0;
while (a<pvzz.length) {
  pvzz[a]=1;
  a++;
}
console.log(pvzz);
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
for (var i = 1; i < pvzz.length; i+=2) {
  pvzz[i]=3;
}
console.log(pvzz);
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
for (var i = 4; i < pvzz.length; i+=5) {
  pvzz[i]=9;
}
console.log(pvzz);
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

//=============bootstrap---sm-md-lg-xl (30-60m)==========
//=============Manipulate String==========
var texts="Locate please oh Please the word 'please'";
var posi= texts.indexOf("please");
console.log(posi);
var posi1= texts.indexOf("please",7);
var posi2= texts.search("please",7);
console.log(posi2);
console.log(texts.slice(8,15)); // [8,15]
console.log(texts.slice(-7,-3)); //[-7,-3)
var txttt="Hello";
console.log(txttt.split(""));
