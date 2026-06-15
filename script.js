function addTask() { // Function that runs when the user adds a task

    // Get the input element where the user types a task
    const taskInput = document.getElementById("taskInput");

    // Get the text from the input and remove extra spaces from the beginning and end
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        // Show a warning message to the user
        alert("Please enter a task.");

        // Stop the function so no empty task is added
        return;
    }

    // Create a new <li> element to hold the task
    const li = document.createElement("li");

    // Create a <span> element to display the task text
    const span = document.createElement("span");

    // Put the user's task text inside the span
    span.textContent = taskText;

    // --------------------
    // EDIT BUTTON
    // --------------------

    // Create a new button element
    const editBtn = document.createElement("button");

    // Set the button text
    editBtn.textContent = "Edit";

    // Add space between the task text and the button
    editBtn.style.marginLeft = "10px";

    // Define what happens when the Edit button is clicked
    editBtn.onclick = function () {

        // Open a prompt box with the current task already filled in
        const updatedTask = prompt("Edit task:", span.textContent);

        // Check that the user didn't click Cancel
        // and didn't enter an empty value
        if (updatedTask !== null && updatedTask.trim() !== "") {

            // Update the displayed task text
            span.textContent = updatedTask.trim();
        }
    };

    // --------------------
    // DELETE BUTTON
    // --------------------

    // Create a new button element
    const deleteBtn = document.createElement("button");

    // Set the button text
    deleteBtn.textContent = "Delete";

    // Add space between buttons
    deleteBtn.style.marginLeft = "10px";

    // Define what happens when the Delete button is clicked
    deleteBtn.onclick = function () {

        // Remove the entire list item from the page
        li.remove();
    };

    // --------------------
    // ADD ELEMENTS TO LIST ITEM
    // --------------------

    // Add the task text span to the list item
    li.appendChild(span);

    // Add the Edit button to the list item
    li.appendChild(editBtn);

    // Add the Delete button to the list item
    li.appendChild(deleteBtn);

    // Add the completed list item to the task list on the page
    document.getElementById("taskList").appendChild(li);

    // Clear the input box after adding the task
    taskInput.value = "";

    // Place the cursor back in the input box for convenience
    taskInput.focus();
}