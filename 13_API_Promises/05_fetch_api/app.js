const URL = 'https://68dd5b4bd7b591b4b78c31e1.mockapi.io/services';

const getButton = document.getElementById('get');
getButton.addEventListener('click', displayServices);
const servicesContainer = document.getElementById('services');

function displayServices() {
	fetch(URL)
		.then((response) => response.json())
		.then(
			(services) =>
				(servicesContainer.innerHTML = services
					.map(
						(service) => `
         <div class="product-card">
            <h3>${service.nume}</h3>
            <p>Durata:${service.durataOre}</p>
            <p>Categorie: ${service.categorie}</p>
            <p>Garanție: ${service.garantieLuni}</p>
            <p class="price">Preț: ${service.pret} RON</p>
         </div>
         `
					)
					.join(''))
		);
}

const postButton = document.getElementById('post');
postButton.addEventListener('click', addNewService);
const numeInput = document.getElementById('nume');
const durataOreInput = document.getElementById('durata-ore');
const pretInput = document.getElementById('pret');
const categorieInput = document.getElementById('categorie');
const garantieLuniInput = document.getElementById('garantie-luni');

function addNewService() {
	const newService = {
		nume: numeInput.value,
		durataOre: durataOreInput.value,
		pret: pretInput.value,
		categorie: categorieInput.value,
		garantieLuni: garantieLuniInput.value,
	};

	fetch(URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newService),
	})
		.then((response) => response.json())
		.then((data) => displayServices());
}
