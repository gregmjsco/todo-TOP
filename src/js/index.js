import '../css/style.css';
import Todo from './todo.js';
import Project from './project.js';

console.log("All good");

const projects = [];

// Select the form and input element
const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('project-name');

// Event listener for form submission
projectForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the project name from the input
  const projectName = projectNameInput.value;

  const newProject = new Project(projectName);

  projects.push(newProject)

  addProjectToSidebar(newProject);

  // Clear the input field
  projectNameInput.value = '';
});

function addProjectToSidebar(project) {
    const sidebar = document.querySelector('#sidebar');
  
    // Create a new project element
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.textContent = project.name;
  
    // Add an event listener to handle project selection
    projectElement.addEventListener('click', (e) => {
      // Implement logic to display the selected project's tasks or details
      // You can use the "project" object to access its properties and tasks
      console.log(`Selected project: ${project.name}`);
    });
  
    // Append the project element to the sidebar
    sidebar.appendChild(projectElement);
  }