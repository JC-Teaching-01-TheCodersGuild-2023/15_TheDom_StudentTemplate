// console.log('I am Connected')

// Demo - 1
/*
// *** First need to understand everything is an object *** \\
let rootVar;
// resources
// https://www.w3schools.com/jsref/obj_window.asp
// https://www.w3schools.com/jsref/dom_obj_document.asp

// Window Object
rootVar = window;
// *** There is no MAGIC in coding, ssssh don't tell anyone though *** \\
// Ones you may recognise
// alert, prompt, console
rootVar = window.console;
// Document Object
// rootVar = window.document;
rootVar = document.body;
rootVar = document.head;
// rootVar = document.location;
// rootVar = document.
console.log(rootVar);
*/

// Demo - 2
/*
// (Single Element)
// let exampleID = (document.getElementById('testID').innerHTML = 'Hello Class'); // This is always explicit

// Multi Selector
// let exampleClass = document.getElementsByClassName('testClass')[2].innerHTML; // could be more than one element
// let exampleTag = document.getElementsByTagName('h1')[0].innerHTML = 'Hello Sam'; // could be more than one element

// // console.log(exampleID);
// console.log(exampleClass);
// console.log(exampleTag);

// // single selector - swiss arm knife
// let exampleIDv2 = (document.querySelector('div').style.color = 'blue');

// // Multi Selector
let exampleTagv2 = document.querySelectorAll('p'); // returns you collection and you can either select just one with for example [1] or loop through them with the object loop 'for of'

for (let i of exampleTagv2) {
	i.style.color = 'tomato';
}

// console.log(exampleIDv2);
console.log(exampleTagv2);
*/

// Demo - 3
/*
document.getElementById('testID').style.color = 'purple';
document.getElementsByTagName('h1')[0].innerHTML = 'Some New Text';
document.getElementsByTagName('input')[0].value = 'NewValueText';
document.getElementsByTagName('input')[0].id = 'NewID';
document.getElementById('testID').classList.add('tempStyle');

document.getElementsByTagName('div')[1].classList.add('newClass');
document.getElementsByTagName('h1')[0].innerHTML = 'The new text';
document.getElementById('list').style.color = 'teal';

document.querySelectorAll('a')[1].setAttribute('href', 'https://www.redrc.net/');
*/

// Demo - 4
/*
const btn = document.createElement('button');
const newText = document.createTextNode('New Button');
btn.appendChild(newText)
document.getElementsByTagName('h1')[0].appendChild(btn).firstChild;

document.getElementsByTagName('p')[0].remove();
*/

// Demo - 5
/*
arrowExp10 = (data) => {
	document.getElementsByTagName('div')[0].style.backgroundColor = 'tomato';
	console.log('func arrowExp10');
};

arrowExp11 = () => {
	document.getElementsByTagName('div')[0].style.backgroundColor = 'green';
  console.log('func arrowExp11');
};

// Option 1 = <button onclick="myFunction()">Click me</button>
document.getElementsByTagName('div')[0].addEventListener('mouseover', arrowExp10); // This is the option of choice
document.getElementsByTagName('div')[0].addEventListener('mouseout', arrowExp11); // This is the option of choice
*/

// Demo - 6
/*
inputVal = () => {
	// Just showing different ways can get the value as will need something like the last one for next lesson
  console.log(document.getElementsByTagName('input')[0].value)
  console.log(document.getElementsByName('inputName')[0].value)
  console.log(document.querySelector('input[id="inputID"]').value)
}

document.getElementById('myBtn').addEventListener('click', inputVal);
*/