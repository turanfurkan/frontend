const todoForm = document.querySelector('#todo_form');
let todoInput = document.querySelector('#todo_input');
let todoList = document.querySelector('#todo_list');
let todos = [];

const addHTML = (todo) => {
  const todo_check = document.createElement('input');
  todo_check.type = 'checkbox';
  todo_check.checked = todo.isCompleted;
  todo_check.classList.add('todo_check');

  const listItem = document.createElement('li');
  listItem.textContent = todo.text;
  listItem.appendChild(todo_check);

  todoList.appendChild(listItem);
};

const startConf = () => {
  if (localStorage.getItem('todos') === null) {
    todos = [];
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
      addHTML(todo);
    });
  }
};

startConf();

const addTodo = (e) => {
  e.preventDefault();
  let inputVal = todoInput.value;
  const todoText = {
    text: inputVal,
    isCompleted: false,
  };

  if (inputVal !== null && inputVal !== '') {
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
    addHTML(todoText);
    todoInput.value = '';
  } else {
    alert('Lütfen bir metin ekleyin!');
  }
};

const completeTodo = (event) => {
  const checkbox = event.target;
  const listItem = checkbox.parentElement;
  const todoText = listItem.textContent;
  const todoIndex = todos.findIndex((todo) => todo.text === todoText);

  if (todoIndex !== -1) {
    todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('todo_check')) {
    completeTodo(event);
  }
});