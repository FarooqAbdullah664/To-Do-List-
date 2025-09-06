const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("You must write something!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create button container
  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");

  // Edit button
  const editBtn = document.createElement("span");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.title = "Edit Task";

  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.title = "Delete Task";

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(btnGroup);

  listContainer.appendChild(li);

  inputBox.value = "";
  inputBox.focus();
}

// Event delegation for clicking on li, edit, delete buttons
listContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.classList.contains("edit")) {
    const li = target.closest("li");
    const currentText = li.firstChild.textContent;
    const newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
    }
  } else if (target.classList.contains("delete")) {
    const li = target.closest("li");
    li.remove();
  }
});
