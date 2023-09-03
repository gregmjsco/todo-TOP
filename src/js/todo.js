import '../css/style.css'

class Todo {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.completed = false; 
    }
  
    markAsCompleted() {
      this.completed = true;
    }
  
    editTitle(newTitle) {
      this.title = newTitle;
    }
  
    editDescription(newDescription) {
      this.description = newDescription;
    }
  
    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    }
  
    editPriority(newPriority) {
      this.priority = newPriority;
    }
  }

  export default Todo;
  