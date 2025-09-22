# JavaScript Cheat Sheet

## 1. Variables

```js
// Declaring variables
let name = 'Alex'; // A variable that can be modified
const age = 25; // A constant variable (cannot be changed)
var profession = 'Programmer'; // Global or local variable depending on context
```

## 2. Data Types

```js
let number = 10; // Number
let text = 'Hello'; // String
let isTrue = true; // Boolean
let nothing = null; // Null (empty value)
let notDefined = undefined; // Undefined (value not assigned)
```

## 3. Operators

```js
// Arithmetic Operators
let a = 10,
	b = 5;
let sum = a + b; // Addition
let diff = a - b; // Subtraction
let prod = a * b; // Multiplication
let quotient = a / b; // Division

// Comparison Operators
a == b; // Equal (value only)
a === b; // Strict equal (value and type)
a != b; // Not equal (value only)
a !== b; // Strict not equal (value and type)

// Logical Operators
a && b; // Logical AND
a || b; // Logical OR
!a; // Logical NOT
```

## 4. Conditional Statements

```js
let num = 7;
if (num % 2 === 0) {
	console.log(num + ' is even.');
} else {
	console.log(num + ' is odd.');
}
```

## 5. Loops

```js
// For loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}
```

## 6. Functions

```js
// Function declaration
function add(a, b) {
	return a + b;
}
console.log(add(3, 4)); // Outputs: 7

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Outputs: 12
```

## 7. Arrays

```js
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Access element: apple
fruits.push('orange'); // Add element to the array
console.log(fruits.length); // Array length
```

## 8. Objects

```js
let person = {
	name: 'Alex',
	age: 25,
	greet: function () {
		console.log('Hello, my name is ' + this.name);
	},
};

console.log(person.name); // Access property
person.greet(); // Call method
```
