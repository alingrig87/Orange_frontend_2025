// Removing elements from the DOM
// TODO: Add your JavaScript code here

function deleteTask() {
	const deleteButton3 = document.querySelector(
		'.collection li:nth-child(3) > a > i'
	);
	deleteButton3.parentElement.parentElement.remove();
}

deleteTask();
