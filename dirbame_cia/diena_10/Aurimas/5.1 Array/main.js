console.log( " Labas ");
// apsilimui

var masyvas = [];
var min = 10;
var max = 100;
// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100

for (var i = 0; i < max-min; i++) {
  masyvas[i]=i+min;
}
console.log(masyvas);
// console.log(masyvas[1]);

// 2 UZDUOTIS:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"
for (var i = 0; i < masyvas.length; i++) {
    if (masyvas[i]%2==0) {
      masyvas[i]="Lyginis";
    }
}
console.log(masyvas);
// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
var randommasyvas=[];
var pct=10; //10% masyvo paiims.

for (var i = 0; i < masyvas.length; i++) {
  var random=Math.floor(Math.random()*(101)); //sugeneruos random sveika skaiciu nuo 0 iki 90
  // console.log("random sugeneruotas sk:",random+";");
  if (masyvas[i]!=="Lyginis") {
    if (random<=pct) {
      console.log("random sugeneruotas sk:",random+";");
      masyvas[i]=-1*masyvas[i];
    }
  }
}
console.log("Masyvas, kurio skaitiniai nariai tapo neigiami su 10% tikimybe: \n",masyvas);

// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)

for (var i = 0; i < masyvas.length; i++) {
  if (masyvas[i]<0) {
    masyvas[i]=-1*masyvas[i];
  }
}
console.log("Masyvas kurio neigiami elementai buvo vel paversti teigiamais: \n",masyvas);
// 4 UZDUOTIS:
// surasti geriausia darbuotoja
// nelabai suprantu uzduoti, surasiu max elementa:
var bandymas=[1,2,3,4,5,6,6,7,4,1,9,1,8,9,2,7,9];
var kitas=[];
var darkitas=[];
var l=0;
var max=-99999;
var min=99999;
var i=0;
var n=0;
function radimasmax(x){
  var xx=x.slice(0);
  for (i = 0; i < xx.length; i++) {
      if (xx[i]>max) {
        max=xx[i];
      }
    }
  for (i = 0; i < xx.length; i++) {
    if (max==xx[i]) {
      kitas[l++]=i;
    }
  }
  if (kitas.length==1) {
    console.log("Didziausias el masyve yra:",max+";");
  }else {
    console.log("Didziausias el masyve yra:",max+";");
    for (i = 0; i < kitas.length; i++) {
      // console.log(kitas);
      console.log("Uzima:",kitas[i]+" vieta;");
    }
  }
}
console.log(radimasmax(masyvas));
// 5 UZDUOTIS:
//surasti blogiausia darbuotoja

function radimasmin(x){
  n=0;
  min=9999;
  var xx=x.slice(0,x.length);
  for (i = 0; i < xx.length; i++) {
    if (xx[i]!==String) {
        if (xx[i]<min) {
          min=xx[i];

        }
      }
    }
  darkitas.splice(0);
  for (i = 0; i < xx.length; i++) {
    if (min==xx[i]) {
      darkitas[n++]=i;
    }
  }
  if (darkitas.length==1) {
    console.log("Maziausias el masyve yra:",min+";");
  }else {
    console.log("Maziausias el masyve yra:",min+";");
    for (i = 0; i < darkitas.length; i++) {
      // console.log("i reiksme:",i);
      console.log("Uzima:",darkitas[i]+" vieta;");
    }
  }
}
// console.log(radimasmin(bandymas));
console.log(radimasmin(masyvas));
console.log(radimasmin(bandymas));
