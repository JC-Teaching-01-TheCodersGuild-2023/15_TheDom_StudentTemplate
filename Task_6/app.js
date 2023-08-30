// Store the URL of an image for each priority level.
const priorityImages = {
  low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
  medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
  high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
};


const form = document.getElementById('todo');
const todoPane = document.getElementById('todo-pane');
const prioritySelect = document.querySelectorAll('.priority').value;
const allTodos = document.getElementsByClassName('todo');

// Add an event listener that will
// 1. Create a new todo. The details should come from the form.
// 2. Insert it into the DOM.
// 3. Clear the title input ready to create a new todo note.
// 4. Prevent the default behaviour (ie don't submit to a server).

form.addEventListener('submit', function(e) {
  for (const todo of allTodos){
    todo.classList.remove('just-created');
  }
  const titleInput = document.getElementById('title').value;
  const newTodo = createTodo(titleInput);
  todoPane.appendChild(newTodo);
  e.preventDefault();
  form.reset();
})

function createTodo(title) {
const newText = document.createTextNode(title);
const newListItem = document.createElement('li');
newListItem.classList.add('todo', 'just-created')
newListItem.appendChild(newText);
newListItem.addEventListener('click', function(e) {
  e.currentTarget.remove();
})
return newListItem 

}



// The most recently created list item (only!) should have the 'just-created' class.

// Optional extras:
// 1. Add an image for the priority. The URLs are stored in the priorityImages object.
// 1. Add a click handler to the note that deletes it on click using Element.remove().