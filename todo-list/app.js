const inputText = document.querySelector("#inputTask");
const btnAdd = document.querySelector(".add");
const list = document.querySelector("ul");
// for that first create a new li;
const listItem = document.createElement("li");

// I want to add eventlistener to the delete button in the li;
// so let's first create a delete button;
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
// deleteBtn.setAttribute("class", "Delete");
deleteBtn.classList.add("Delete");


// let's create a array so that we can store all the items we have added;
const liItems = [];



// using Add task button
btnAdd.addEventListener("click", addTask);

// using Enter keyword; 
inputText.addEventListener("keypress", (event)=>{
  if(event.key === "Enter"){
    addTask();
  }
});

function addTask(){

  // now get the value from the input;
  const newTask = inputText.value.trim()
  console.log(newTask);

  // this will only works when input field contents some value;
  if(inputText !== ""){

  // now add that value to the li in ul;
  // now add input text to that li;
  listItem.textContent = newTask;

  // Adding a delete button to the list item;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  // deleteBtn.setAttribute("class", "Delete");
  deleteBtn.classList.add("Delete");
  deleteBtn.addEventListener("click", deleteListItem);

  // let's append this to listItem;
  listItem.appendChild(deleteBtn);

  // now,append that li to ul;
  list.appendChild(listItem);

  liItems.push(listItem);

  // clear the input field;
  inputText.value = "";
  }
}


  // // now append delete button to this;
  // const deleteBtn = document.createElement("button");
  // listItem.setAttribute("class", "Delete");

  // // append delete to li; 
  // listItem.append(deleteBtn);

  function deleteListItem(){
    listItem.remove();

    // remove the deleted items from the litems array;
    const index = liItems.indexOf(liItem);
    if(index !== -1){
      liItems.splice(index, 1);
    }
  }