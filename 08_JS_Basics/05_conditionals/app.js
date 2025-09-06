// if(conditie) {
//    // cod care se executa daca conditia este adevarata
// }

// if(conditie) {
// 	// cod care se executa daca conditia este adevarata
// } else {
// 	// cod care se executa daca conditia este falsa
// }

// if (conditie1) {
// 	// cod care se executa daca conditia1 este adevarata
// } else if(conditie2) {
// 	// cod care se executa daca conditia2 este adevarata
// } else if(conditie3) {

// }

// var sare = '100g';
// function blender(ingrediente) {
//    return ingrediente + "pasate";
// }
// blender('cartofi');
// blender("rosii");

var inputCapacitateCilindrica = document.getElementById(
	'capacitate-cilindrica'
);
var paragrafRezultat = document.getElementById('rezultat');

function calculeazaImpozitAuto() {
	// ≤ 1.600 cm³: 10 lei / 200 cm³

	// 1.601 – 2.000 cm³: 28 lei / 200 cm³

	// 2.001 – 2.600 cm³: 107 lei / 200 cm³

	// 2.601 – 3.000 cm³: 215 lei / 200 cm³

	// > 3.001 cm³: 434 lei / 200 cm³
	var impozitAuto = 0;
	var capacitateCilindrica = Number(inputCapacitateCilindrica.value);
	if (capacitateCilindrica <= 1600) {
		impozitAuto = (capacitateCilindrica / 200) * 10;
	} else if (capacitateCilindrica > 1600 && capacitateCilindrica <= 2000) {
		impozitAuto = (capacitateCilindrica / 200) * 28;
	} else if (capacitateCilindrica > 2000 && capacitateCilindrica <= 2600) {
		impozitAuto = (capacitateCilindrica / 200) * 107;
	} else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000) {
		impozitAuto = (capacitateCilindrica / 200) * 215;
	} else {
		impozitAuto = (capacitateCilindrica / 200) * 434;
	}

	paragrafRezultat.innerHTML = 'Aveti de platit ' + impozitAuto + ' lei';
}
