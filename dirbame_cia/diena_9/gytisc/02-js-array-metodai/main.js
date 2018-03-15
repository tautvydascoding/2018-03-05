console.log( " Labas ");

var vardai = [];
vardai [0] = "Jonas";
vardai [1] = "Timis";
vardai [2] = "Garfildas";
vardai [3] = "Elena";
vardai [4] = "Pilkis";

console.log(vardai.toString());
document.write( vardai.toString());

console.log(vardai.join(" :: "));  //skiriklis

vardai.push("Marta");
vardai.push(999);
console.log(vardai.join(" ")); // idedam paskutini i masyvo gala/stalciu

vardai.pop(); // istrina paskutini elementa/stalciu is masyvo
console.log(vardai.join());

vardai.shift(); // istrina 0 stalciu ir paslenka visus kitus
console.log(vardai);

delete vardai[2]; //ištrina "2" elementą/stalciaus turinį (pati stalciu palieka, o istrina tik jo turinį)
console.log(vardai);

vardai.shift(); // sukuria stalciu ir ji ideda priekyje masyvo
