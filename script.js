// Script to add todo items and clear input value after //
let addToDoBtn = document.getElementById('todo-add');
let todoList = document.getElementById('todoItems');
let inputToDo = document.getElementById('todo-input');

function addDoneButton() {
  const newButton = document.createElement('button')
  newButton.innerHTML = 'DONE'
  newButton.addEventListener('click', (event) => {
    event.target.previousElementSibling.style.textDecorationLine = 'line-through'
    event.target.remove()
  })
  return newButton
}

addToDoBtn.addEventListener('click', function() {
  const outDiv = document.createElement('div')
  outDiv.classList.add('todoDiv')
  const paragraph = document.createElement('p')
  const newButton = addDoneButton()
  paragraph.innerText = inputToDo.value;
  outDiv.appendChild(paragraph)
  outDiv.appendChild(newButton)
  todoList.appendChild(outDiv);
  inputToDo.value = "";
});

inputToDo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addToDoBtn.click()
})
