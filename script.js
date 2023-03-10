// Script to add todo items and clear input value after //
let addToDoBtn = document.getElementById('todo-add');
let todoList = document.getElementById('todoItems');
let inputToDo = document.getElementById('todo-input');

addToDoBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputToDo.value;
    todoList.appendChild(paragraph);
    inputToDo.value = "";
});

