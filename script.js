const submitBtn = document.getElementById('submitBtn');
const tasks = document.getElementById('tasks');

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
            <h1>${name}</h1>
            <p>Deadline: ${deadline}</p>
            <p>${category}</p>
        </div>    
        `
    }
})