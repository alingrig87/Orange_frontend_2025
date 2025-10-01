function createLiTask() {
	const newTaskLi = document.createElement('li');
	newTaskLi.classList.add('collection-item');

	const newTaskInput = document.getElementById('task');
	const newTaskTitle = newTaskInput.value;

	newTaskLi.innerText = newTaskTitle;

	const deleteTaskBtn = document.createElement('a');
	deleteTaskBtn.href = '#';
	deleteTaskBtn.classList.add('delete-item');
	deleteTaskBtn.classList.add('secondary-content');
	deleteTaskBtn.innerHTML = '<i class="fa fa-remove"></i>';

	newTaskLi.appendChild(deleteTaskBtn);

	return newTaskLi;
}

function addNewTask() {
	const li = createLiTask();
	const ul = document.querySelector('ul.collection');

	ul.appendChild(li);
}

function addNewTaskV2() {
	const newTaskTitle = document.getElementById('task').value;
	const ul = document.querySelector('ul.collection');
	ul.innerHTML += `
        <li class="collection-item">
            ${newTaskTitle}            
            <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
            </a>
        </li>
    `;
}
