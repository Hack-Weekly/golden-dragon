let addToDoBtn = document.getElementById('todo-add');
let todoList = document.getElementById('todoItems');
let inputToDo = document.getElementById('todo-input');
let toDoForm = document.getElementById("todo-form");
let toDoContainer = document.getElementById("todo-container");
const resetButton = document.createElement('button')
let itemsCount = 0

function addDoneTodo(todo) {
  const doneBtn = document.createElement('button');
  doneBtn.innerText = 'DONE';
  doneBtn.addEventListener('click', () => {
    todo.querySelector('p').classList.toggle('complete');
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

function resetOnClick () {
  todoList = document.getElementById("todoItems")
  const childerElement = todoList.childNodes
  while (childerElement.length >0) {
    todoList.removeChild(childerElement[0])
  }
  resetButton.remove()
  itemsCount = 0
}

function addResetButton () {
  resetButton.setAttribute('id', 'reset-button')
  resetButton.setAttribute('onclick', 'resetOnClick()')
  resetButton.innerText = "Reset"
  toDoForm.appendChild(resetButton)
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
    
    if (itemsCount === 0) {
      addResetButton()
    }
    itemsCount += 1
  }
});

inputToDo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addToDoBtn.click();
});
