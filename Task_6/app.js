// Store the URL of an image for each priority level.
const priorityImages = {
  low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
  medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
  high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
};

// Get the form by ID from the forms collection.
const form = false;
// Get the todo pane (the 'ul' element) to insert todos into.
const todoPane = false;
// Get the text input for the title. We'll read from this when creating the todo.
const titleInput = false;
// Get the priority select element. We'll read from this when creating the todo.
const prioritySelect = false;
// Get a *live* list of all elements with the 'todo' class.
const allTodos = false;

// Add an event listener that will
// 1. Create a new todo. The details should come from the form.
// 2. Insert it into the DOM.
// 3. Clear the title input ready to create a new todo note.
// 4. Prevent the default behaviour (ie don't submit to a server).

function createTodo(title) {
  // Create the text node with the variable 'title'.
  
  // Create a new list item element to contain the text node.
  
  // Add the text node to the list item element.
  
  // Return the new element.
}

// The most recently created list item (only!) should have the 'just-created' class.

// Optional extras:
// 1. Add an image for the priority. The URLs are stored in the priorityImages object.
// 1. Add a click handler to the note that deletes it on click using Element.remove().