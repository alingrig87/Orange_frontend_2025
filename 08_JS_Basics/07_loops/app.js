// if(conditie) {
//    //executa daca conditia e adevarata
// }

// while(conditie) {
//    //executa CAT TIMP conditia e adevarata
// }

// var start = 3;
// var end = 77;
// var currentNumber = start;
// while (currentNumber <= end) {
// 	console.log(currentNumber);
// 	currentNumber++;
// }

var deCateOriSaDat66 = 0;
var nrTotalDeAruncari = 0;
while (true) {
	var zar1 = parseInt(Math.random() * 6) + 1;
	var zar2 = parseInt(Math.random() * 6) + 1;
	console.log(zar1, ' ', zar2);
	nrTotalDeAruncari++;
	if (zar1 == 6 && zar2 == 6) {
		deCateOriSaDat66++;
	}

	if (deCateOriSaDat66 == 1000) {
		console.log('Nr de total de aruncari', nrTotalDeAruncari);
		break;
	}
}

var masini = [
	{ marca: 'skoda', model: 'octavia', anFabricatie: 2004, kmParcursi: 20000 },
];

function iaMasinileDinBazaDeDate() {
	const marci = [
		'Skoda',
		'Volkswagen',
		'BMW',
		'Mercedes',
		'Dacia',
		'Audi',
		'Toyota',
		'Ford',
	];
	const modele = [
		'Octavia',
		'Golf',
		'X5',
		'C-Class',
		'Logan',
		'A4',
		'Corolla',
		'Focus',
	];

	var masini = [];

	for (let i = 0; i < 100; i++) {
		const marca = marci[i % marci.length];
		const model = modele[i % modele.length];
		const anFabricatie = 1995 + Math.floor(Math.random() * 30); // între 1995 și 2024
		const kmParcursi = Math.floor(Math.random() * 300000); // între 0 și 300k km

		masini.push({
			marca: marca.toLowerCase(),
			model: model.toLowerCase(),
			anFabricatie,
			kmParcursi,
		});
	}

	return masini;
}

var toateMasinile = iaMasinileDinBazaDeDate();
var i = 0;
var containerMasini = document.getElementById('container-masini');
while (i <= toateMasinile.length - 1) {
	// <div class="masina">
	// 	<p class="marca">Skoda</p>
	// 	<p class="model">Octavia</p>
	// 	<p class="km">200000</p>
	// 	<p class="an">2004</p>
	// </div>;
	if (toateMasinile[i].anFabricatie == 2004) {
		containerMasini.innerHTML += `<div class="masina">
      <p class="marca">${toateMasinile[i].marca}</p>
      <p class="model">${toateMasinile[i].model}</p>
      <p class="km">${toateMasinile[i].kmParcursi}</p>
      <p class="an">${toateMasinile[i].anFabricatie}</p>
   </div>
   `;
	}
	console.log(toateMasinile[i]);
	i++;
}
