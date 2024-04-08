const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load tasks from local storage and add them to the list
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// console.log(savedTasks[0].text);
savedTasks.forEach((task) => addTask(task.text, task.completed));

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText, false);
        taskInput.value = "";
    }
});

function addTask(text, completed) {



    // Create task item and set text
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = text;

    // Mark as completed if applicable


    // Create and add "Complete" button
    const compeltebtn = document.createElement('button')
    compeltebtn.textContent = 'completed';
    taskItem.appendChild(compeltebtn);
    taskItem.appendChild(taskText);

    compeltebtn.addEventListener("click", () => {
        taskItem.classList.toggle('completed')
    });

    // Create and add "Edit" button
    const Editebtn = document.createElement('button')
    Editebtn.textContent = 'Edite';

    // Add logic for editing a task
    Editebtn.addEventListener('click', () => {
        taskText.textContent = text.taskInput;
        const editinput = document.createElement('input')
        editinput.type = text;
        Editebtn.textContent = 'save'
        taskItem.appendChild(editinput)

    });
    Editebtn.addEventListener('click', () => {
        taskText.textContent = text.taskInput;
        editinput.type = text;
        Editebtn.textContent = 'save'
        taskItem.appendChild(editinput)

    });
    
// Create and add "Delete" button
const deletebtn = document.createElement('button');
deletebtn.textContent = 'delete';
taskItem.appendChild(deletebtn);
taskItem.appendChild(Editebtn);




// Add event listener to delete button
deletebtn.addEventListener("click", (e) => {
    // Remove the task item from the DOM
    taskItem.remove();
    localStorage.removeItem("tasks")
    
    
});
// Append buttons to task item and task item to list

taskList.appendChild(taskItem);
    

    // Save updated tasks to local storage
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(taskList.children).map((task) => ({
        text: task.querySelector("span").textContent, // Extract task text
        completed: task.classList.contains("completed") // Check if task is completed
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to local storage
}
