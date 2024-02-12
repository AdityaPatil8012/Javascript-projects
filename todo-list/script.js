const inputText = document.querySelector("#inputTask");
const btnAdd = document.querySelector(".add");
const list = document.querySelector("ul");
const liItems = []; // Array to store list items

// Function to add task
function addTask() {
  const newTask = inputText.value.trim();

  if (newTask !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newTask;

    // Create delete button for this task
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("Delete");
    deleteBtn.addEventListener("click", function() {
      listItem.remove();
      const index = liItems.indexOf(listItem);
      if (index !== -1) {
        liItems.splice(index, 1);
      }
    });

    // Append delete button to list item
    listItem.appendChild(deleteBtn);

    // Append list item to the list
    list.appendChild(listItem);

    // Add list item to the array
    liItems.push(listItem);

    // Clear input field
    inputText.value = "";
  }
}

// Event listener for Add Task button
btnAdd.addEventListener("click", addTask);

// Event listener for Enter key
inputText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
