// children
const taskList = document.querySelector('.collection');
console.log(taskList.children);

// parentElement
const thirdTask = document.querySelector('.collection > li:nth-child(3)');
console.log(
	thirdTask.parentElement.parentElement.parentElement.parentElement
		.parentElement.parentElement.parentElement.parentElement
);

// siblings
console.log(thirdTask.previousElementSibling.innerHTML);
console.log(thirdTask.nextElementSibling.innerHTML);

// firstElementChild - primul copil
// lastElementChild - ultimul copil
