//1 sukurti masyva: Jonas, Petras, Povilas, Kestas, Karolis
var vardai = [];
vardai[0] = "Jonas";
vardai[1] = "Petras";
vardai[2] = "Povilas";
vardai[3] = "Kestas";
vardai[4] = "Karolis";
  console.log(vardai);

//2 sunaikinti pirma STALCIU VISA
  vardai.shift(0);
  console.log(vardai);

//3 tarp Petras ir Povilas, iterpti Marija

vardai.splice(1, 0, "Marija");
console.log(vardai);

//4 surikiuoti Masyvai ??

//5 sunaikinti Marijos stalciu
  vardai.splice(1,1);
  console.log(vardai);

//6 sukeisti vietomis pirma ir paskutini stalciu
  var x = vardai[3];
  vardai[3] = vardai[0];
  vardai[0] = x;
   console.log(vardai);

//7 sukurti masyvo kojipa
    var vardai2=vardai.slice(0);
    console.log("Kopija", vardai2);


//8 kopijos masyve istrinti nuo 2 iki 4
    vardai2.splice(2,2);
    console.log("kopijos masyve", vardai2);


//9   isisvesti orginalu masyva - ir pasitikrinti ar nesugadinom jo , keisdami kopija
    console.log("originalas",vardai);


//10 prijungti kopijos masyva prie orginalo masyvos galo
var prijungimas=vardai.concat(vardai2);
console.log(prijungimas);
