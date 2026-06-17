// Load any previously saved tasks when the page finishes loading.
window.onload = function () {
  loadTasks();
};

function addTask() { // Function that runs when the user clicks "Add Task"
	const taskInput = document.getElementById("taskInput"); // Get the input field.
	const taskText = taskInput.value.trim(); // Remove leading/trailing spaces.
	if (taskText === "") {
  alert("Please enter a task.");
  return;
}

createTask(taskText);  // Create and display the task.
saveTasks(); // Save the updated task list.

// Clear the input and place the cursor back in it.
taskInput.value = "";
taskInput.focus();
}

function createTask(taskText) { // Creates a single task and adds it to the list.
	const li = document.createElement("li"); // Create the list item.
	const span = document.createElement("span"); // Create a span to hold the task text.
  span.textContent = taskText;

// Edit List Section
const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.style.marginLeft = "10px";

editBtn.onclick = function () {

const updatedTask = prompt("Edit task:", span.textContent);

// Update only if the user entered valid text.
if (updatedTask !== null && updatedTask.trim() !== "") {
  span.textContent = updatedTask.trim();
  saveTasks();
  }
};

// Delete Item Section
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.style.marginLeft = "10px";

deleteBtn.onclick = function () {
  li.remove();
  saveTasks();
};

// Add everything to the list item.
li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

// Add the list item to the task list.
document.getElementById("taskList").appendChild(li);
}

// Saves all current tasks to localStorage.
function saveTasks() {

  const tasks = [];
	// Collect the text from every task.
  document.querySelectorAll("#taskList li span").forEach(function (span) {
    tasks.push(span.textContent);
  });

  // Store as JSON.
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Loads tasks from localStorage.
function loadTasks() {

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Recreate each saved task.
  tasks.forEach(function (task) {
    createTask(task);
  });
}