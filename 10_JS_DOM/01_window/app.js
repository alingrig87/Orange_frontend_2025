// Exploring the window object
// TODO: Add your JavaScript code here

// dimensiuni si pozitie
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.screenX);

// navigare si locatie
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);

// window.alert('Salut!');
// window.confirm('Are you sure?');

// tempozitoare
function afiseazaMesaj() {
	console.log('Afiseaza un mesaj');
}

// window.setTimeout(afiseazaMesaj, 2000);
// window.setInterval(afiseazaMesaj, 500);

// access la DOM
console.log(window.document);
console.log(document);
