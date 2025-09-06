const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create delete (cross) button
        let deleteBtn = document.createElement("span");  
        deleteBtn.innerHTML = "\u00d7";
        deleteBtn.classList.add("delete");

        // Create update (edit) button
        let updateBtn = document.createElement("span");
        updateBtn.innerHTML ="update";
        updateBtn.classList.add("edit");

        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
    }

    inputBox.value = "";
}

// Event delegation for checking, deleting, and editing tasks
listContainer.addEventListener("click", function(e){
    const target = e.target;

    if(target.tagName === "LI"){
        target.classList.toggle("checked");
    }

    // Delete task
    else if(target.classList.contains("delete")){
        target.parentElement.remove();
    }

    // Edit task
    else if(target.classList.contains("edit")){
        let li = target.parentElement;
        let currentText = li.firstChild.textContent;
        let newText = prompt("Edit your task:", currentText);
        if (newText !== null && newText.trim() !== "") {
            li.firstChild.textContent = newText;
        }
    }
}, false);
