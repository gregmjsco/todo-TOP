import '../css/style.css';
import Todo from './todo.js';
import Project from './project.js';

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
        renderTodos();
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
    
  
        renderTodos();
      });

      function renderTodos() {
        const mainContent = document.querySelector('.main-content');
        const projectDetails = document.getElementById('project-list');
      
        // Clear the existing project details
        mainContent.innerHTML = '';
      
        if (!selectedProject || selectedProject.todos.length === 0) {
          // Handle the case when no project is selected or there are no To-Do items
          mainContent.textContent = 'No To-Do items for this project.';
        } else {
          // Create a list to display To-Do items
          const todoList = document.createElement('ul');
      
          // Loop through the To-Do items in the selected project
          selectedProject.todos.forEach((todo) => {
            const todoItem = document.createElement('li');
            todoItem.textContent = `Title: ${todo.title}, Description: ${todo.description}, Priority: ${todo.priority}, Due Date: ${todo.dueDate}`;
            
            // You can customize the format as needed
            // For example: todoItem.textContent = `${todo.title} (${todo.priority})`;
      
            todoList.appendChild(todoItem);
          });
      
          // Append the To-Do list to the project details section
          mainContent.appendChild(todoList);
        }
      
        // You can add additional logic or styling as needed
      }
  
