// Get the form by ID from the forms collection.
const form = document.forms.todo;

// Add a submit listener to the form that prevents default.
form.addEventListener('submit', function (event) {
  event.preventDefault();
});

// Add a click listener to the list item. When clicked it should remove the element from the DOM.
const todo = document.querySelector('.todo');
todo.addEventListener('click', function (event) {
  event.currentTarget.remove();
});