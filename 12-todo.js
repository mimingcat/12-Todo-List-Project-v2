const todoArray = [];
function addTodo() {
  const userInput = document.querySelector('.js-user-input');
  const inputDate = document.querySelector('.js-user-date');
  const name = userInput.value;
  const dueDate = inputDate.value;
  console.log(userInput.value);
  todoArray.push({
    name,
    dueDate
  });
  todoArray.push();
  console.log(todoArray);
  userInput.value = '';
  inputDate.value = '';
  displayTodoList();

  };

document.querySelector('.add-button').addEventListener('click', () => {
  addTodo();
});

document.querySelector('.js-user-input').addEventListener('keyup', (event) => {
  userEnter(event);
});

document.querySelector('.js-user-date').addEventListener('keyup', (event) => {
  userEnter(event);
});





displayTodoList();

/*
todoArray.forEach((todoObject, index) => {
  const { name, dueDate } = todoObject;
  const html = `
    <p>${name} <span class="css-span">${dueDate}
    <button class='js-delete-task' onclick="
      todoArray.splice(${i}, 1);
      displayTodoList();
    ">Delete</button></span>
    </p>`;
  todoListHTML += html;

});
*/
function displayTodoList() {
  let todoListHTML = '';
  todoArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <p>${name} <span class="css-span">${dueDate}
      <button class="js-delete-task">Delete</button></span>
      </p>`;
    todoListHTML += html;
  });

  document.querySelector('.js-display').innerHTML =   todoListHTML;

  document.querySelectorAll('.js-delete-task')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoArray.splice(index , 1);
        displayTodoList();
      });
    });
  
  



};



  /*
  let lastElement = todoArray.slice(-1);
  document.querySelector('.js-display').innerHTML = `<p>${lastElement}</p>`;
  */




function userEnter(newEvent) {
  if (newEvent.key === 'Enter') {
    addTodo();
    displayTodoList();
  };
};