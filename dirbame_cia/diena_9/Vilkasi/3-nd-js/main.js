// sukurti masyva: Jonas, Petras, Povilas, Kestas, Karolis
var vardai = [];
vardai[0]= "Jonas";
vardai[1]= "Petras";
vardai[2]= "Povilas";
vardai[3]= "Kestas";
vardai[4]= "Karolis";
console.log("1:",vardai);

// ) sunaikinti pirma STALCIU VISA
vardai.splice(0,1);
console.log("1.1:",vardai);

// ) tarp Petras ir Povilas, iterpti Marija
vardai.splice (2,0,"Marija");
console.log("1.2:",vardai);

// ) surikiuoti Masyva
vardai.sort();
console.log("1.3", vardai);

// ) sunaikinti Marijos stalciu
vardai.splice(2,1);
console.log("1.4", vardai);

// ) sukeisti vietomis pirma ir paskutini stalciu
function elementuKeitimas(imamas,keiciamas) {
  var x = vardai[imamas];
  vardai[imamas] = vardai [keiciamas];
  vardai[keiciamas] = x;
}
elementuKeitimas(1,4);
console.log("1.5:",vardai);
// ) sukurti masyvo kojipa
var vardaiKopija = vardai.slice(0);
console.log("Masyvo Kopija:\n",vardaiKopija);
// ) kopijos masyve istrinti nuo 2 iki 4
vardaiKopija.splice(2,2);
console.log("Masyvo Kopija:\n",vardaiKopija);
// ) isisvesti orginalu masyva - ir pasitikrinti ar nesugadinom jo , keisdami kopija
console.log("Orginalus Masyvas\n:",vardai);
// ) prijungti kopijos masyva prie orginalo masyvos galo
var masyvuSujungimas = vardai.concat(vardaiKopija);
console.log("Sujungti Masyvai:\n",masyvuSujungimas);

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
