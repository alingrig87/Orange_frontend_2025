var inputInaltime = document.getElementById('input-inaltime');
var inputGreutate = document.getElementById('input-greutate');
var paragrafInCareAfisezRezultatul = document.getElementById('output');

function afiseazaRezultateIMC() {
	var inaltimeInMetri = Number(inputInaltime.value);
	var greutateInKg = Number(inputGreutate.value);

	var indiceDeMasaCorporala = greutateInKg / inaltimeInMetri ** 2;
	if (indiceDeMasaCorporala < 18.5) {
		printeazaInParagrafulDeOutput(
			indiceDeMasaCorporala,
			'— Risc pentru sănătate: ridicat. Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.',
			'blue'
		);
	} else if (indiceDeMasaCorporala >= 18.5 && indiceDeMasaCorporala <= 24.9) {
		printeazaInParagrafulDeOutput(
			indiceDeMasaCorporala,
			'— Risc pentru sănătate: minim/scăzut.',
			'green'
		);
	} else if (indiceDeMasaCorporala >= 25 && indiceDeMasaCorporala <= 29.9) {
		printeazaInParagrafulDeOutput(
			indiceDeMasaCorporala,
			'— Risc pentru sănătate: scăzut/moderat.',
			'orange'
		);
	} else if (indiceDeMasaCorporala >= 30 && indiceDeMasaCorporala <= 34.9) {
		printeazaInParagrafulDeOutput(
			indiceDeMasaCorporala,
			'— Risc pentru sănătate: moderat/ridicat. Acesta e un semn de avertisment: schimbă-ți dieta acum!',
			'darkorange'
		);
	} else if (indiceDeMasaCorporala > 35) {
		printeazaInParagrafulDeOutput(
			indiceDeMasaCorporala,
			'— Risc pentru sănătate: ridicat. Greutatea îți afectează în mod radical sănătatea. Scapă de surplusul de greutate!',
			'red'
		);
	}
}

function printeazaInParagrafulDeOutput(
	indiceDeMasaCorporala,
	mesaj,
	culoareText
) {
	paragrafInCareAfisezRezultatul.innerHTML =
		'IMC  tau este ' + indiceDeMasaCorporala.toFixed(1) + '. ' + mesaj;
	paragrafInCareAfisezRezultatul.style = 'color:' + culoareText;
}
