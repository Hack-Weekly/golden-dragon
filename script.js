let addToDoBtn = document.getElementById('todo-add');
let taskList = document.getElementById('tasks');
let inputToDo = document.getElementById('todo-input');

addToDoBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputToDo.value;
    taskList.appendChild(paragraph);
    inputToDo.value = "";
});
// Script to add todo items and clear input value after //
