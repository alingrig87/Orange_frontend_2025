# JavaScript DOM Manipulation Cheat Sheet

## 1. Window

```js
// Alert, Confirm, and Prompt
window.alert('This is an alert!'); // Shows an alert box
let isConfirmed = window.confirm('Are you sure?'); // Confirmation box
let userInput = window.prompt('Enter your name:'); // Prompt box

// Accessing Window Properties
console.log(window.innerWidth); // Window width
console.log(window.innerHeight); // Window height

// Opening and Closing Windows
let newWindow = window.open('https://example.com', '_blank'); // Opens a new window
newWindow.close(); // Closes the new window
```

## 2. Document

```js
// Accessing the Document
console.log(document.title); // Gets the title of the document
document.title = 'New Title'; // Sets a new title
console.log(document.URL); // Get current URL

// Accessing elements
let elementById = document.getElementById('myElement'); // Get element by ID
let elementsByClassName = document.getElementsByClassName('myClass'); // Get elements by class
let elementsByTagName = document.getElementsByTagName('div'); // Get elements by tag name

// Modifying content
document.getElementById('myElement').innerHTML = 'New Content'; // Change content
document.getElementById('myElement').textContent = 'New Text'; // Change text content

// Modifying attributes
document.getElementById('myElement').setAttribute('class', 'newClass'); // Set new class
let classAttr = document.getElementById('myElement').getAttribute('class'); // Get class attribute
document.getElementById('myElement').removeAttribute('class'); // Remove class attribute
```

## 4. Multiple Elements Selectors

```js
// Query Selector
let firstElement = document.querySelector('.myClass'); // Select the first element with class 'myClass'
let allElements = document.querySelectorAll('.myClass'); // Select all elements with class 'myClass'

// Loop through all selected elements
allElements.forEach(function (element) {
	element.style.color = 'blue'; // Change text color of each element
});

// Selecting elements by attributes
let elementByAttribute = document.querySelector("[data-custom='value']"); // Select element with a custom attribute
```

## 6. Remove Elements

```js
// Removing a single element
let elementToRemove = document.getElementById('myElement');
elementToRemove.remove(); // Removes the element from the DOM

// Removing multiple elements
let elementsToRemove = document.querySelectorAll('.removeClass');
elementsToRemove.forEach(function (element) {
	element.remove(); // Removes each element with the class 'removeClass'
});
```

## 8. Event Listeners

```js
// Adding an event listener
let button = document.getElementById('myButton');
button.addEventListener('click', function () {
	alert('Button was clicked!');
});

// Removing an event listener
let handleClick = function () {
	alert('Button was clicked!');
};
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick); // Removes the event listener

// Event propagation (Capturing and Bubbling)
document.getElementById('parent').addEventListener(
	'click',
	function () {
		alert('Parent clicked!');
	},
	true
); // Capturing phase

document.getElementById('child').addEventListener(
	'click',
	function () {
		alert('Child clicked!');
	},
	false
); // Bubbling phase

// Prevent default behavior
document.getElementById('myLink').addEventListener('click', function (event) {
	event.preventDefault(); // Prevents the link from navigating
	console.log('Default action prevented');
});
```
