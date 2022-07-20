//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo)

//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    // event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // completed Button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completedButton);
    // trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todoInput value
    todoInput.value = "";
    //create the element 
}

function deleteCheck(e){
    const item = e.target;
 //delete todo
    if(item.classList[0] === 'trash-btn'){
      const todo = item.parentElement;
      //animation
      todo.classList.add('fall');
      todo.addEventListener('transitionend', function(){
        todo.remove();
      });   
        // todo.remove();
    }
//check mark
    if(item.classList[0] === 'complete-btn'){
      const todo = item.parentElement;
      todo.classList.toggle('completed');
    }
}

//fiter Todos

function filterTodo(e){
 // const todos = e.target.value;
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
    case 'all':
      break;
    case "completed":
      if(todoDiv.classList.contains(completed)){
        todo.style.display = 'flex';
      }else{
        todo.style.display = 'none';
      }
    }
  });
}