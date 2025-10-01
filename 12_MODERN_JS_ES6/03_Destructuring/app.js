const masina = {
	marca: 'Skoda',
	model: 'Superb',
	anFabricatie: 2025,
	motor: {
		tip: 'electric',
		capacitate: '600km',
	},
};

// const marca = masina.marca;
// const model = masina.model;
// const anFabricatie = masina.anFabricatie;

const { marca, anFabricatie } = masina;

const person = {
	name: 'Marius',
	age: 30,
};

const { name, age, country = 'RO' } = person;
console.log(name, age, country);

const data = {
	id: 1,
	user: {
		firstName: 'Elena',
		lastName: 'Popa',
	},
};

const {
	user: { firstName, lastName },
	id,
} = data;

console.log(firstName, lastName, id);

function createMessage({ name, notifications }) {
	return `Salut ${name} ai ${notifications} notificari!`;
}

const user = {
	name: 'Vasile',
	age: 30,
	notifications: 20,
	id: 232,
	salary: 1000,
};

console.log(createMessage(user));

// arrays
const arr = [10, 20, 30];
// const [a, , c] = arr;
// console.log(a, c);

let a = 10;
let b = 5;

[a, b] = [b, a];
console.log(a, b);
