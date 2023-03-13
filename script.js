let addToDoBtn = document.getElementById('todo-add');
let todoList = document.getElementById('todoItems');
let inputToDo = document.getElementById('todo-input');

function addDoneTodo(todo) {
  const doneBtn = document.createElement('button');
  doneBtn.innerText = 'DONE';
  doneBtn.addEventListener('click', (event) => {
    todo.style.textDecorationLine = 'line-through';
    event.target.remove();
  });
  return doneBtn;
}

function addDeleteTodo(todo) {
  const iconDelete = document.createElement('iconify-icon')
  iconDelete.setAttribute('icon', 'bi:trash')

  iconDelete.addEventListener('click', () => todo.remove());
  return iconDelete
}

function buttonsDiv(todo) {
  const butnsDiv = document.createElement('div')
  butnsDiv.classList.add('todo-buttons-div')

  const doneBtn = addDoneTodo(todo)
  const delBtn = addDeleteTodo(todo)

  butnsDiv.append(doneBtn, delBtn)

  return butnsDiv
}

addToDoBtn.addEventListener('click', function() {
  if (inputToDo.value !== '') {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('p');
    todoText.classList.add('todo-text')

    todoText.innerText = inputToDo.value;

    todoItem.classList.add('todoDiv');
    const butnsDiv = buttonsDiv(todoItem)

    todoItem.append(todoText, butnsDiv);
    todoList.appendChild(todoItem)

    inputToDo.value = '';
  }
});

inputToDo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addToDoBtn.click();
});
