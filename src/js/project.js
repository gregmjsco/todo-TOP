import './style.css';

class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
  
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    // You can add more methods as needed, such as getting a specific todo, listing todos, etc.
  }