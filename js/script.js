// VARIABLES
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button")


// FUNCTIONS
const addTask = () => {
    if (inputBox.value === '') {
        return;
    } else {
        let new_li = document.createElement("li");
        let text = document.createElement("p");
        text.innerHTML = inputBox.value;
        new_li.appendChild(text);
        listContainer.appendChild(new_li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Cross icon
        new_li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}



// MAIN
showTasks();

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "P") {
        e.target.parentElement.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false); 

inputBox.addEventListener("keyup", event => {
    if(event.key !== "Enter") return; 
    addButton.click(); 
    event.preventDefault(); 
});