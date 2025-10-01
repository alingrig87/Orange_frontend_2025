// Selecting multiple elements from the DOM
// TODO: Add your JavaScript code here
// const allListItems = document.getElementsByTagName('li');
// console.log(allListItems);

// for (let i = 0; i <= allListItems.length - 1; i++) {
// 	if (i % 2 == 1) {
// 		allListItems[i].style.backgroundColor = 'lightgray';
// 	} else {
// 		allListItems[i].style.backgroundColor = 'lightblue';
// 	}
// }

const allButtons = document.getElementsByClassName('btn');
console.log(allButtons);
for (let i = 0; i <= allButtons.length - 1; i++) {
	allButtons[i].classList.remove('black');
	allButtons[i].style.backgroundColor = 'red';
}

const allListItems = document.querySelectorAll(
	'#main > .card-action > ul > .collection-item'
);
console.log(allListItems);

for (let i = 0; i <= allListItems.length - 1; i++) {
	if (i % 2 == 1) {
		allListItems[i].style.backgroundColor = 'lightgray';
	} else {
		allListItems[i].style.backgroundColor = 'lightblue';
	}
}
