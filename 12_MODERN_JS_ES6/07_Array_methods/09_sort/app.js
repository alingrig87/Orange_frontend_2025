const fructe = ['mere', 'pere', 'capsuni', 'banane', 'afine'];

const fructeSortate = fructe.sort();
console.log(fructeSortate);

const numere = [1, 3, 4, 11, 12, 0];
// const numereSortate = numere.sort((a, b) => {
// 	if (a < b) {
// 		return -1;
// 	} else if (a == b) {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// });

const numereSortate = numere.sort((a, b) => a - b);
console.log(numereSortate);

const masini = [
	{ marca: 'BMW', anFabricatie: 2021 },
	{ marca: 'Audi', anFabricatie: 2019 },
	{ marca: 'Mercedes', anFabricatie: 2020 },
	{ marca: 'Dacia', anFabricatie: 2018 },
	{ marca: 'Toyota', anFabricatie: 2022 },
];

const masiniSortateDupaAnulFabricatiei = masini.sort(
	(masina1, masina2) => masina1.anFabricatie - masina2.anFabricatie
);

console.log(masiniSortateDupaAnulFabricatiei);

const produse = [
	{ nume: 'Laptop', pret: 3500, dataAdaugarii: '2021-09-29' },
	{ nume: 'Telefon', pret: 2200, dataAdaugarii: '2020-09-28' },
	{ nume: 'Căști wireless', pret: 450, dataAdaugarii: '2019-09-27' },
	{ nume: 'Monitor', pret: 1200, dataAdaugarii: '2000-09-26' },
	{ nume: 'Tastatură mecanică', pret: 600, dataAdaugarii: '2025-09-25' },
	{ nume: 'Mouse gaming', pret: 320, dataAdaugarii: '2025-09-24' },
	{ nume: 'Imprimantă', pret: 800, dataAdaugarii: '2025-09-23' },
	{ nume: 'Tabletă', pret: 1700, dataAdaugarii: '2025-09-22' },
	{ nume: 'Smartwatch', pret: 950, dataAdaugarii: '2024-09-21' },
	{ nume: 'Boxă portabilă', pret: 400, dataAdaugarii: '2025-09-20' },
	{ nume: 'Router WiFi', pret: 350, dataAdaugarii: '2022-09-19' },
	{ nume: 'SSD extern', pret: 700, dataAdaugarii: '2025-09-18' },
	{ nume: 'Hard Disk 2TB', pret: 550, dataAdaugarii: '2025-09-17' },
	{ nume: 'Cameră web', pret: 300, dataAdaugarii: '2025-09-16' },
	{ nume: 'Microfon USB', pret: 500, dataAdaugarii: '2025-09-15' },
	{ nume: 'Dronă', pret: 2800, dataAdaugarii: '2025-09-14' },
	{ nume: 'Console gaming', pret: 2600, dataAdaugarii: '2025-09-13' },
	{ nume: 'Televizor Smart', pret: 4200, dataAdaugarii: '2025-09-12' },
	{ nume: 'Ochelari VR', pret: 3100, dataAdaugarii: '2025-09-11' },
	{ nume: 'Proiector', pret: 1800, dataAdaugarii: '2025-09-10' },
];

document.getElementById('container').innerHTML = produse.map(
	(produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
);

const sortOptionsDropDown = document.getElementById('sort-options');
sortOptionsDropDown.addEventListener('change', sortProducts);

function sortProducts(e) {
	console.log(e.target.value);
	const sortOption = e.target.value;
	const sortedProducts = [...produse];

	if (sortOption === 'noi') {
		sortedProducts.sort(
			(produs1, produs2) =>
				new Date(produs1.dataAdaugarii) - new Date(produs2.dataAdaugarii)
		);
	} else if (sortOption === 'priceAsc') {
		sortedProducts.sort((produs1, produs2) => produs1.pret - produs2.pret);
	} else if (sortOption === 'priceDesc') {
		sortedProducts.sort((produs1, produs2) => produs2.pret - produs1.pret);
	} else if (sortOption === 'nameAsc') {
		sortedProducts.sort((produs1, produs2) =>
			produs1.nume.localeCompare(produs2.nume)
		);
	} else if (sortOption === 'nameDesc') {
		sortedProducts.sort((produs1, produs2) =>
			produs2.nume.localeCompare(produs1.nume)
		);
	}

	console.log(sortedProducts);

	document.getElementById('container').innerHTML = sortedProducts.map(
		(produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
	);
}
