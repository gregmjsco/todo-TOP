import '../css/style.css';
import Todo from './todo.js';
import Project from './project.js';

console.log("All good");


// Select the form and input element
const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('project-name');

// Select the sidebar where projects will be added
const sidebar = document.querySelector('#sidebar');

// Event listener for form submission
projectForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the project name from the input
  const projectName = projectNameInput.value;

  // Create a new project element
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');
  projectElement.textContent = projectName;

  // Append the project element to the sidebar
  sidebar.appendChild(projectElement);

  // Clear the input field
  projectNameInput.value = '';
});