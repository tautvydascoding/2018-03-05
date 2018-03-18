console.log( " Labas ");
// sukurti masyva: Jonas, Petras, Povilas, Kestas, Karolis
var vardai=[];
vardai[0]="Jonas";
vardai[1]="Petras";
vardai[2]="Povilas";
vardai[3]="Kestas";
vardai[4]="Karolis";
// ) sunaikinti pirma STALCIU VISA
console.log(vardai);
vardai.shift();
console.log("istrynem pirma el:\n",vardai);
// ) tarp Petras ir Povilas, iterpti Marija
vardai.splice(1,0,"Marija");
console.log("Iterpem 'Marija' tarp Petras ir Povilas:\n",vardai);
// ) surikiuoti Masyvai
console.log(vardai.sort());
var band=[2,1,10,50,166,4,4,1];
console.log(band);
band.sort();
console.log(band);
// ) sunaikinti Marijos stalciu
vardai.splice(2,1);
console.log("Istrynem Marija el\n",vardai);
// ) sukeisti vietomis pirma ir paskutini stalciu
var laikinas=vardai[0];
var massilg=vardai.length-1;
// console.log(massilg);
vardai[0]=vardai[massilg];
console.log("pirmas el: ",vardai[0]);
vardai[massilg]=laikinas;
console.log("paskutinis el: ",vardai[massilg]);
console.log("Sukeitem pirma ir paskutini el vietomis: \n",vardai);
// ) sukurti masyvo kojipa
var naujasvardai=vardai.slice(0);
console.log(naujasvardai);
// ) kopijos masyve istrinti nuo 2 iki 4
naujasvardai.splice(2,2);
console.log("naujas masyvas",naujasvardai);
// ) isisvesti orginalu masyva - ir pasitikrinti ar nesugadinom jo , keisdami kopija
console.log("senas masyvas:",vardai);
// ) prijungti kopijos masyva prie orginalo masyvos galo
var sujungtimass=vardai.concat(naujasvardai);
console.log(sujungtimass);


console.log("==========================================================");
// 6. sukurti du masyvus (skirtingus)
var pvzsk=[];
pvzsk[0]=2;
pvzsk[1]=14;
pvzsk[2]=55;
pvzsk[3]=0.5;
pvzsk[4]=6;
pvzsk[5]=1;
pvzsk[6]=13;
pvzsk[7]=13;
pvzsk[8]=13;
pvzsk[9]=13;
pvzsk[10]=13;
pvzsk[11]=13;
pvzsk[12]=13;
pvzsk[13]=13;
pvzsk[14]=13;

console.log("Pirmasis masyvas:\n",pvzsk);
var pvzraid=[];
pvzraid[0]="Labas";
pvzraid[1]="Pasaulis,";
pvzraid[2]="Kaip";
pvzraid[3]="Tau";
pvzraid[4]="Sekas?";
console.log("Antrasis masyvas:\n",pvzraid);
// naudojant for cikla sujungti juos, kas antra elementa
// [pirmo masyvo, antro masyvo, pirmo masyvo, antro masyvo , ...]
var ilg1 = pvzsk.length;
console.log("Pirmojo masyvo ilgis:",ilg1);
var ilg2 = pvzraid.length;
console.log("Antrojo masyvo ilgis:",ilg2);
if (ilg1>=ilg2) {  //is sitos salygos suzinome, kurio masyvo ilgis yra didesnis, ir ji prisiskiriame ilg.
  var ilg=ilg1;     // veliau panaudosim ilg skaiciu aprasant ciklu kartojimu kieki.
}else {
  ilg=ilg2;
}
// console.log("Ilgesniojo masyvo ilgis:",ilg);
//Pirmas budas naudojant .cancat funkcija
var jungtinis=[];
var tarp1=[];
var tarp2=[];
var tarp3=[];
for (var i = 0; i <= ilg; i+=2){
  tarp1[0]=pvzsk[i];
  // console.log(tarp1[i]);
  tarp2[0]=pvzraid[i];
  // console.log(tarp2[0]);
  tarp3=tarp1.concat(tarp2);
  // console.log("sujungtas tarp1 ir tarp2: ",tarp3);
  jungtinis=jungtinis.concat(tarp3);
  // console.log("Galutinio masyvo pradzia: ",jungtinis);
}
console.log("Jungtinis masyvas imant kas antra el is kiekvieno masyvo: ",jungtinis);
var newjungtinis=[];
for (var i = 0; i < jungtinis.length; i++) {
  if (jungtinis[i]==undefined) {
    jungtinis.splice(i,1);  //iskerpam elementa kuris turi "reiksmse" undefined;
    newjungtinis=jungtinis.slice(0,jungtinis.length);
    i--; //kadangi pasikeicia array ilgis ([0as-AA, 1as-BB, 2-undefined,3-undefined,4-undefined]) iskirpus i=2 lieka
        // [0as- AA,1as- BB,2as-undefined,3-undefined], o sekanti tikrinama reksme bus i+1, ty 2+1=3, lieka prasoktas naujo array 2as elementas
        // del to atlikus "kirpima" sumaziname i reiksme 1, kad nepraleistume nepatikrine, nei vieno naujai perdelioto masyvo elemento.
  }
}
console.log("Galutinis jungtinis masyvas pataisytas: ",newjungtinis);

console.log("======================================================");
// sunkesnis
// susikurti masyva su prekiu pavadinimais
// naudojant FOR  parasykite/pergrupuokite ji atvirksciai
// ! nenaudojant "reverse"
var sunkesnis=[];
sunkesnis[0]="Bananai";
sunkesnis[1]="Abrikosai";
sunkesnis[2]="Mandarinai";
sunkesnis[3]="Patisonai";
sunkesnis[4]="Cukinijos";
sunkesnis[5]="Granatai";
sunkesnis[6]="Braskes";
console.log("Orginalus masyvas:\n",sunkesnis);
for (var i = 0; i < sunkesnis.length/2; i++) {
  var laikin=sunkesnis[i];
  // console.log("sunkesinis laikinas el: ",laikin);
  sunkesnis[i]=sunkesnis[sunkesnis.length-1-i];
  // console.log(sunkesnis[i]);
  sunkesnis[sunkesnis.length-i-1]=laikin;
}
console.log("apkeistas masyvas:", sunkesnis);

console.log("====================sort bandymai======================");

console.log("Nesutvarkytas masyvas:\n",sunkesnis);
console.log("Sutvarkytas pagal default (pagal string): ",sunkesnis.sort());
console.log("Nesutvarkytas masyvas, sudarytas is sk: \n",pvzsk);
console.log("Masyvo el laikomi string tipo, kad ir kokie jie yra, ir rusiuojami pagal tai: \n",pvzsk.sort());
var kkk=[];
kkk=pvzsk.sort(function(x,y){return(x - y)});
var susk=[];
susk=kkk;
console.log("spliced 3 lemeents: \n",susk.splice(3));
