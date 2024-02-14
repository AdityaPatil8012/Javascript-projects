const inputText = document.querySelector("#inputTask");
const btnAdd = document.querySelector(".add");
const list = document.querySelector("ul");
const liItems = [];

btnAdd.addEventListener("click", addTask);

inputText.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const newTask = inputText.value.trim();

  if (newTask !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newTask;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("Delete");
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
      const index = liItems.indexOf(newTask); // Find index by task text
      if (index !== -1) {
        liItems.splice(index, 1);
        saveTasksToLocalStorage(); 
      }
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    liItems.push(newTask); // Push the task text

    saveTasksToLocalStorage();
    inputText.value = "";
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(liItems));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.classList.add("Delete");
      deleteBtn.addEventListener("click", () => {
        listItem.remove();
        const index = liItems.indexOf(task);
        if (index !== -1) {
          liItems.splice(index, 1);
          saveTasksToLocalStorage(); 
        }
      });

      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);
      liItems.push(task);
    });
  }
}

window.addEventListener("load", loadTasksFromLocalStorage);

