const listContainer = document.querySelector(".container__list")
const addTaskBtn = document.querySelector('#addTodo');
const removeTaskBtn = document.querySelector('#removeTodo');
const input = document.querySelector("#input")

const taskList = document.querySelector(".container__list-list") 

addTaskBtn.addEventListener('click', addTask);
removeTaskBtn.addEventListener('click', removeTask)


function addTask() {
    let inputValue = input.value;
    let textNode = document.createTextNode(inputValue);
    if(input.value== '') {
        return false
    }else {
        li = document.createElement('li');

        let checkbox = document.createElement('input')
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check");

        let span = document.createElement('span');

        taskList.appendChild(span);
        li.appendChild(checkbox);
        span.appendChild(textNode);
        li.appendChild(span); 
        taskList.insertBefore(li, taskList.childNodes[0]);

        if (listContainer.style.visibility == "hidden") {
            listContainer.setAttribute("style", "visibility: visible; opacity: 1;");
        }

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = '';

    }
    
}

function removeTask() {
    let li = taskList.children
    for(let i = 0; i < li.length; i++) {
        while (li[i] && li[i].children[0].checked) {
            taskList.removeChild(li[i]);

        }

        if (li.length == 0) {
           listContainer.setAttribute("style", "visibility: hidden; opacity: 0")
        }
    }

    
    
}