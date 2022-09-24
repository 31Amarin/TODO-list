//variables
const todoInput = document.querySelector('.things')
const todoButton = document.querySelector('.click')
const todoList = document.querySelector('.list')
//event add
todoButton.addEventListener("click", addNewTodo);

//add function
function addNewTodo(event) {
  if (todoInput.value == 0) {
    event.preventDefault();
    alert('Please enter a task')
  } else {
  event.preventDefault();
  const newDiv = document.createElement('div');
  newDiv.classList.add('todolist')
  const newTodo = document.createElement('li');
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add('newTodos')
  newDiv.appendChild(newTodo)
  //button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  deleteButton.classList.add('delButton');
  newDiv.appendChild(deleteButton)
  todoList.appendChild(newDiv)
  //remove value from placeholder
  todoInput.value = '';
  }
}
//event delete
todoList.addEventListener("click", deleteItem);

//delete function
function deleteItem(e) {
  const item = e.target;
  if (item.classList[0] === 'delButton') {
  const thingtodo = item.parentElement;
  thingtodo.remove()
  }
}
