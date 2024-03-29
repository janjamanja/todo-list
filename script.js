const submitBtn = document.getElementById('submitBtn');
const tasks = document.getElementById('tasks');
const clearAllBtn = document.getElementById('clearAllBtn');

const clearAllTasks = () => {
    tasks.innerHTML = '';
    saveTasks();
}

const deleteTask = taskElement => {             //used as part of the process of deleting a single task (see more in event listener)
    taskElement.remove();
    saveTasks();
}

const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        tasks.innerHTML = savedTasks;
    }
}

const saveTasks = () => {
    localStorage.setItem('tasks', tasks.innerHTML);
}

submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const deadline = document.getElementById('deadline').value;
    const category = document.getElementById('category').value;

    if (name === "" || deadline === "") {
        alert('The name and deadline categories are required!')
    } else if (name.length > 16){
        alert("Name musn't be over 16 characters!")
    }  else {
        tasks.innerHTML += `
        <div class="task">
            <button class="closeBtn">X</button>
            <h1>${name}</h1>
            <p>Deadline: ${deadline}</p>
            <p>${category}</p>
        </div>    
        `
    }
    saveTasks();
})

tasks.addEventListener('click', event => {                          //delete a singular task by pressing "X" button
    if (event.target.classList.contains('closeBtn')) {
        const taskElement = event.target.closest('.task');
        deleteTask(taskElement);
    }
});

clearAllBtn.addEventListener('click', clearAllTasks);


loadTasks();            //loads tasks when entering the web page