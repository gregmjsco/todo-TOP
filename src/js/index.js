import '../css/style.css';
import Todo from './todo.js';
import Project from './project.js';
import { renderTodos } from './renderTodos.js';


console.log("All good");


const projects = [];

let selectedProject;

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

    projectElement.setAttribute('data-project-index', projects.indexOf(project));
  
    // Add an event listener to handle project selection
    projectElement.addEventListener('click', (e) => {
      // Implement logic to display the selected project's tasks or details
      // You can use the "project" object to access its properties and tasks
      console.log(`Selected project: ${project.name}`);
      if (e && e.target && e.target.classList.contains('project')) {
        // Get the project index from the clicked project element's data attribute
        const projectIndex = e.target.dataset.projectIndex;
    
        // Update the selected project based on the index
        selectedProject = projects[projectIndex];
    
        // Highlight the selected project visually (you can add CSS classes for this)
        // ...
    
        // Remove any previous selection highlighting (optional)
        const projectElements = document.querySelectorAll('.project');
        projectElements.forEach((element) => {
          element.classList.remove('selected-project');
        });
    
        // Add a CSS class to visually indicate the selected project (optional)
        e.target.classList.add('selected-project');

        console.log("Selected project:", selectedProject); 
        renderTodos(selectedProject);
      }
    });
  
    // Append the project element to the sidebar
    sidebar.appendChild(projectElement);
  }


const todoForm = document.getElementById('todo-form');
const todoPrioritySelect = document.getElementById('todo-priority');




      // Event listener for form submission
      todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-description').value;
        const priority = todoPrioritySelect.value; // Get the selected priority
  
        if (!selectedProject) {
          alert('Please select a project.');
          return;
        }
  
        // Create a new To-Do object
        const newTodo = new Todo(title, description, priority);
  
        // Add the new To-Do to the selected project
        selectedProject.todos.push(newTodo);    
  
        // Reset the form or update the UI as needed
        todoForm.reset();
  
        // Handle the new To-Do object as required
    
  
        renderTodos(selectedProject);
      });


  
