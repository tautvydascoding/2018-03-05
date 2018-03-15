console.log( " Labas ");


var vardai = [];
vardai[0] = "Jonas";
vardai[1] = "Petras";
vardai[2] = "Algis";
vardai[3] = "Ignas";
vardai[4] = "Saulius";
vardai[5] = "Alius";



console.log(vardai.toString() );
document.write(vardai.toString() );
console.log(vardai.join(" :: ") );

//masyvo galas
vardai.push("Lialius");
vardai.push(333);
console.log(vardai); // prideti i masyva ka nors, i masyvo gala

vardai.pop(); //istrina passkutini elementa (stalciu)

//masyvo priekis
vardai.shift(); //istrina 0 elementa/skaiciu ir paslenka visus kitus i prieki
console.log(vardai);

delete vardai[2]; //istirina 2 elementa/stalciaus turini (palieka stalciu, istitrina tik turini)
console.log(vardai);
