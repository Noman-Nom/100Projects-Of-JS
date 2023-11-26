const input = document.querySelector("#input-box");
const list = document.querySelector('#list-container');
const btn = document.querySelector("#addTask");


const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];


savedTasks.forEach(task => {
    addTaskToDOM(task);
});

function addTask() {
    if (input.value === "") {
        alert("Please write some task...");
    } else {
        const taskText = input.value;
        addTaskToDOM(taskText);

       
        savedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));

        input.value = "";
    }
}

function addTaskToDOM(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        const removedTask = e.target.parentElement.textContent.trim();
        e.target.parentElement.remove();

    
        const updatedTasks = savedTasks.filter(task => task !== removedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});