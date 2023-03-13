// Script to add todo items and clear input value after //
let addToDoBtn = document.getElementById("todo-add");
let todoList = document.getElementById("todoItems");
let inputToDo = document.getElementById("todo-input");
let toDoForm = document.getElementById("todo-form");
let toDoContainer = document.getElementById("todo-container");
const resetButton = document.createElement('button')
let itemsCount = 0

function addDoneButton() {
  const newButton = document.createElement('button')
  newButton.innerText = 'DONE'
  newButton.style.color = "#fff"
  newButton.addEventListener('click', (event) => {
    event.target.previousElementSibling.style.textDecorationLine = 'line-through'
    event.target.remove()
  })
  return newButton
}


addToDoBtn.addEventListener('click', function() {
  if(inputToDo.value === '') return
  const outDiv = document.createElement('div')
  outDiv.classList.add('todoDiv')
  const paragraph = document.createElement('p')
  const newButton = addDoneButton()
  paragraph.innerText = inputToDo.value;
  outDiv.appendChild(paragraph)
  outDiv.appendChild(newButton)
  todoList.appendChild(outDiv);
  inputToDo.value = "";
  if (itemsCount === 0) {
    addResetButton()
  }
  itemsCount += 1
  
});

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

inputToDo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addToDoBtn.click()
})

function addTodoItems () {
  const itemsDiv = document.createElement('div')
  itemsDiv.setAttribute('id', 'todoItems')
  toDoContainer.appendChild(itemsDiv)
}

