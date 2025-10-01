// Selecting single elements from the DOM
// TODO: Add your JavaScript code here

// getElementById
const addTaskButton = document.getElementById('add-task');
console.log(addTaskButton);
console.log(addTaskButton.type);
console.log(addTaskButton.className);

// addTaskButton.style.backgroundColor = 'red';

const newTaskInput = document.getElementById('task');
newTaskInput.value = 'Plimba cainiele';

// querySelector
const deleteAllTasksButton = document.querySelector(
	'#main > div.card-action > .clear-tasks'
);
console.log(deleteAllTasksButton.className);
deleteAllTasksButton.classList.remove('black');
deleteAllTasksButton.classList.remove('btn');
deleteAllTasksButton.classList.add('black');
deleteAllTasksButton.classList.add('btn');

const taskListTitle = document.querySelector('.card-action #task-title');
taskListTitle.style.color = 'blue';

const fourthTaskItem = document.querySelector(
	'.card-action > ul > li:nth-child(4)'
);

fourthTaskItem.style.textDecoration = 'line-through';
