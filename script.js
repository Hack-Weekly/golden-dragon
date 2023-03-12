// Script to add todo items and clear input value after //
let addToDoBtn = document.getElementById('todo-add');
let todoList = document.getElementById('todoItems');
let inputToDo = document.getElementById('todo-input');

function addDoneButton() {
  const newButton = document.createElement('button');
  newButton.innerHTML = 'DONE';
  newButton.addEventListener('click', (event) => {
    event.target.previousElementSibling.style.textDecorationLine =
      'line-through';
    event.target.remove();
  });
  return newButton;
}

addToDoBtn.addEventListener('click', function () {
  if (inputToDo.value !== '') {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('p');
    const doneBtn = addDoneButton();

    todoText.innerText = inputToDo.value;
    
    todoItem.classList.add('todoDiv');

    todoItem.appendChild(todoText);
    todoItem.appendChild(doneBtn);
    todoDelete(todoItem);
    todoList.appendChild(todoItem);

    inputToDo.value = '';
  }
});

function todoDelete(todo) {
  const deleteTodoBtn = document.createElement('button');

  deleteTodoBtn.innerHTML = `
    <iconify-icon
      icon="bi:trash"
      style="color: white;"
    ></iconify-icon>`;

  deleteTodoBtn.addEventListener('click', () => todo.remove());

  todo.appendChild(deleteTodoBtn);
}

inputToDo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addToDoBtn.click();
});
