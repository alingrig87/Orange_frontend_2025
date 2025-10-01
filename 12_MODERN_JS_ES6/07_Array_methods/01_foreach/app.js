const numbers = [2, 4, 5, 1, 8];

// for (let i = 0; i <= numbers.length - 1; i++) {
// 	console.log(numbers[i]);
// }

numbers.forEach((number) => console.log(number));

const users = [
	{ firstName: 'Ana', lastName: 'Popescu' },
	{ firstName: 'Mihai', lastName: 'Ionescu' },
	{ firstName: 'Daniela', lastName: 'Stoian' },
];

users.forEach((user) =>
	console.log(`fullName: ${user.firstName} ${user.lastName}`)
);
