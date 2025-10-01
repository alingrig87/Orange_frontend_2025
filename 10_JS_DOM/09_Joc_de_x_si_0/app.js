let jucatorulCurent = Math.random() < 0.5 ? 'X' : '0';
let tabla = ['', '', '', '', '', '', '', '', ''];
let esteJoculInDesfasurare = true;
let jucatorulCastigator = 'X';
let scor = new Map();
scor.set('X', 0);
scor.set('0', 0);

const celule = document.querySelectorAll('.cell');
const mesajDeStatus = document.querySelector('#status');
const afisajScor = document.querySelector('#scor');
const butonResetare = document.querySelector('#reset');

const combinatiiCastigatoare = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

for (var i = 0; i <= celule.length - 1; i++) {
	celule[i].addEventListener('click', gestioneazaClickPeCelula);
}

celule.forEach((celula) =>
	celula.addEventListener('click', gestioneazaClickPeCelula)
);

function gestioneazaClickPeCelula(e) {
	const celulaApasata = e.target;
	const indexCelula = Number(e.target.getAttribute('data-index'));

	if (tabla[indexCelula] != '' || esteJoculInDesfasurare == false) {
		return;
	}

	tabla[indexCelula] = jucatorulCurent;
	const classPentruJucatori = jucatorulCurent == 'X' ? 'X' : 'O';
	celulaApasata.innerHTML = `<span class=${classPentruJucatori}> ${jucatorulCurent} </span>`;

	verificaCastigator();

	if (jucatorulCurent === 'X') {
		jucatorulCurent = '0';
	} else if (jucatorulCurent === '0') {
		jucatorulCurent = 'X';
	}
}

function verificaCastigator() {
	let existaCastigator = false;

	for (let i = 0; i <= combinatiiCastigatoare.length - 1; i++) {
		// let combinatieCastigatoare = combinatiiCastigatoare[i];

		// let celula1 = combinatieCastigatoare[0];
		// let celula2 = combinatieCastigatoare[1];
		// let celula3 = combinatieCastigatoare[2];

		let celula1 = tabla[combinatiiCastigatoare[i][0]];
		let celula2 = tabla[combinatiiCastigatoare[i][1]];
		let celula3 = tabla[combinatiiCastigatoare[i][2]];

		if (celula1 === '' || celula2 === '' || celula3 === '') {
			continue;
		}

		if (celula1 === celula2 && celula2 === celula3) {
			existaCastigator = true;
			jucatorulCastigator = jucatorulCurent;
			scor.set(jucatorulCastigator, scor.get(jucatorulCastigator) + 1);
			break;
		}
	}

	if (existaCastigator === true) {
		mesajDeStatus.innerHTML = `Jucatorul ${jucatorulCurent} a castigat`;
		modificaScor();
		esteJoculInDesfasurare = false;
		return;
	}

	if (tabla.includes('') === false) {
		mesajDeStatus.innerHTML = 'REMIZA!!!';
	}
}

butonResetare.addEventListener('click', reseteazaJocul);

function reseteazaJocul() {
	tabla = ['', '', '', '', '', '', '', '', ''];
	esteJoculInDesfasurare = true;
	jucatorulCurent = jucatorulCastigator;
	mesajDeStatus.innerHTML = '';

	for (let i = 0; i <= celule.length - 1; i++) {
		celule[i].innerHTML = '';
	}
}

function modificaScor() {
	afisajScor.innerHTML = `
   <div class="container-scor">
      <div class="jucatori">
         <span class="X">Jucatorul X</span> - <span class="O">Jucatorul 0</span>
      </div>
      <div class="scor">
         <span class="X">${scor.get('X')}</span> 
            - 
         <span class="O">${scor.get('0')}</span>
      </div>
   </div>
   
   `;
}
