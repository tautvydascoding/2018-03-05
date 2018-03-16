console.log('Labas');

var vardai = ['Jonas','Tomas','Jane','Maryte','Kristina'];  //raso i html id="demo" visa stringa
	console.log(vardai.toString());

	vardai.push("Marta");				//i masyvo (array) gala idedame "Marta"
	vardai.push(900);					//i masyvo (array) gala idedame "900"

	console.log(vardai);

	vardai.pop(); 						// ISTRINA paskutini indeksa is array
	vardai.shift();						// ISTRINA pirmaji elementa
	console.log(vardai);

	delete vardai[2];					// ISTRINA  "2" elementa (pati stalciu palieka, o strina tik jo vidu)
	console.log(vardai);

	vardai.unshift("As priekyje"); 		//sukuria stalciu ir i ji ideda
	console.log(vardai);

	var masyvoIlgis = vardai.length;
	console.log (masyvoIlgis);

	vardai [masyvoIlgis] = "Paskutinis vardas";
	//arba
	vardai.push("Paskutinis vardas");

	console.log (masyvoIlgis);

	//---------masyvo vidurys

	vardai[20] = "Azuolas";
	console.log(vardai);
	vardai.splice(10);
	console.log(vardai);

	vardai.splice(1, 0, "Statine medaus",'pienas','batonas')
	console.log(vardai);

	var dalisVardu = vardai.slice(2, 4);
	console.log('kopija', dalisVardu);

	//----kas butu jeigu darom masyvu kopija

	var x = vardai;
	console.log("x:", x);
	console.log("vardai", vardai);

	delete vardai[3];
	delete vardai[4];

	console.log("x:", x);
	console.log("vardai", vardai);

	// triju arrays (masyvu) jungimas
	var myGirls = ["Cecilie", "Lone"];
													console.log(myGirls);
	var myBoys = ["Emil", "Tobias", "Linus"];
													console.log(myBoys);
	var myChildren = myGirls.concat(myBoys, vardai); 
													console.log(myChildren);

// uzduotis  Array
var keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];
	console.log("--------Pradzia--------", keliautojas);

// 1. i masyvo gala ideti elmenta "butelis vadens"
	keliautojas.push("butelis vandens");
	console.log("idejom vandens Tomui ", keliautojas);
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
	keliautojas.unshift("ziebtuvelis");
	console.log("idejom Tomui zieba", keliautojas);
// 3. istrinti 3-cia elmenta
	delete keliautojas[2];
	console.log("isememe trecia elementa", keliautojas);




	var masyvas = [];
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
	for (var i = 0; i < 50; i++) {
		masyvas[i] = 0;     // "i" vis dideja po viena
	}	
console.log(masyvas);






// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;

// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....

for (var i = 0; i < 50; i++) {
		masyvas[i + 1] = 3;     // "i" vis dideja po viena
		i++;
	}	
console.log(masyvas);
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
for (var i = 4; i < 50; i= i + 5) {
		masyvas[i]= 9;     // "i" vis dideja po viena
		i++;
	}	
console.log(masyvas);

	document.querySelector(".demo").innerHTML = masyvas.toString(); 

