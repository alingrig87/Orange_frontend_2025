const cart = [5, 7, 12, 9];

// let total = 0;
// for (let i = 0; i <= cart.length - 1; i++) {
// 	total = total + cart[i];
// }

const total = cart.reduce((total, price) => total + price, 0);

console.log(total);

const cart2 = [
	{ name: 'Laptop', price: 3000, qty: 3 },
	{ name: 'Mouse', price: 100, qty: 1 },
	{ name: 'Casti', price: 300, qty: 2 },
];

const total2 = cart2.reduce(
	(total, item) => {
		total.totalPrice += item.price * item.qty;
		total.numberOfItems += item.qty;
		return total;
	},
	{
		totalPrice: 0,
		numberOfItems: 0,
	}
);

console.log(total2);

const numbers = [10, 25, 2, 1, 3, 4, 33, 42, 5];

const maxNumber = numbers.reduce(
	(max, currentNumber) => (currentNumber > max ? currentNumber : max),
	numbers[0]
);

console.log(maxNumber);
