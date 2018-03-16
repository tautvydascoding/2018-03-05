console.log( " Labas ");
// sukurti masyva: Jonas, Petras, Povilas, Kestas, Karolis
var vardai = [];
vardai [0]= "Jonas";
vardai [1]= "Petras";
vardai [2]= "Povilas";
vardai [3]= "Kestas";
vardai [4]= "Karolis";
console.log(vardai);
// ) sunaikinti pirma STALCIU VISA
vardai.shift(vardai);
console.log(vardai);
// ) tarp Petras ir Povilas, iterpti Marija
  vardai.splice(1,0,"Marija");
  console.log(vardai);
// ) surikiuoti Masyvai
vardai.sort();
console.log(vardai);
// ) sunaikinti Marijos stalciu
delete vardai[2];
console.log(vardai);
// ) sukeisti vietomis pirma ir paskutini stalciu
var x = vardai [0];
vardai [0] = vardai [4];
vardai[4] = x ;
console.log(vardai);
// ) sukurti masyvo kojipa
var dalisvardai= vardai.slice(vardai);
console.log(dalisvardai);
// ) kopijos masyve istrinti nuo 2 iki 4
dalisvardai.splice(2,2);
console.log(dalisvardai);
// ) isisvesti orginalu masyva - ir pasitikrinti ar nesugadinom jo , keisdami kopija
console.log(vardai);
// ) prijungti kopijos masyva prie orginalo masyvos galo
var vardai;
var dalisvardai;
var pora = vardai.concat(dalisvardai);
console.log(pora);

// 5.
// sukurti masyva

// masyvas = ['petras', 'karolis', dainius];

// nenaudojant "unshift()", o naudojant "for" cikla
// A. paslinkti visus stalcius , kad atlaisvetu "0"-tas
// B.  iterpti "Tomas" varda  - i masyvo prieki ("0"-ta stalciu)


// 6. sukurti du masyvus (skirtingus)
// naudojant for cikla sujungti juos, kas antra elementa
// [pirmo masyvo, antro masyvo, pirmo masyvo, antro masyvo , ...]

// sunkesnis
// susikurti masyva su prekiu pavadinimais
// naudojant FOR  parasykite/pergrupuokite ji atvirksciai
// ! nenaudojant "reverse"


//
