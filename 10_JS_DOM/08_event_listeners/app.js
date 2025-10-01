const taskList = document.querySelector('.collection');

taskList.addEventListener('click', handleTask);

function handleTask(e) {
	if (e.target.classList.contains('fa-remove')) {
		e.target.parentElement.parentElement.remove();
	} else if (e.target.classList.contains('collection-item')) {
		e.target.classList.toggle('task-completed');
	}
}

const addNewTaskButton = document.querySelector('#add-task');
addNewTaskButton.addEventListener('click', addNewTaskV2);

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
