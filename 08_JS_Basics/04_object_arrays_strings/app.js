// Obiect literal
var masina = {
	marca: 'Skoda',
	model: 'Octavia',
	anFabricatie: 2007,
	kmParcursi: 200109,
};

console.log(masina.anFabricatie);
console.log(masina.kmParcursi);
console.log(masina.model);

// var input = {
// 	type: 'text',
// 	value: 'Ana are mere',
// };

function showInputValue() {
	var myInput = document.getElementById('my-input');
	console.log(myInput.value);
}

function calculeazaSuma() {
	var primulNumar = Number(document.getElementById('first-number').value);
	var alDoileaNumar = Number(document.getElementById('second-number').value);

	var suma = primulNumar + alDoileaNumar;

	document.getElementById('output').innerHTML =
		'Suma dintre ' + primulNumar + ' si ' + alDoileaNumar + ' este ' + suma;
}
