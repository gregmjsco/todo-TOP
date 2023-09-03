export function renderTodos(selectedProject) {
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