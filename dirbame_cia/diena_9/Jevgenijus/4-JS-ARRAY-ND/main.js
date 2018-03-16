// sukurti masyva: Jonas, Petras, Povilas, Kestas, Karolis

var masyvas = [];

masyvas[0] = "Jonas";
masyvas[1] = "Petras";
masyvas[2] = "Povilas";
masyvas[3] = "Kestas";
masyvas[4] = "Karolis";


// ) sunaikinti pirma STALCIU VISA

masyvas.shift(0);
console.log(masyvas);

// ) tarp Petras ir Povilas, iterpti Marija

masyvas.splice(2,0, "Marija");


// ) surikiuoti Masyvai

console.log(masyvas.sort());
var masyvas = [ 1, 2, 4 ];
masyvas.sort();

// ) sunaikinti Marijos stalciu

masyvas.splice(2,1);
console.log(masyvas);


// ) sukeisti vietomis pirma ir paskutini stalciu



// ) sukurti masyvo kojipa
// ) kopijos masyve istrinti nuo 2 iki 4
// ) isisvesti orginalu masyva - ir pasitikrinti ar nesugadinom jo , keisdami kopija
// ) prijungti kopijos masyva prie orginalo masyvos galo

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
