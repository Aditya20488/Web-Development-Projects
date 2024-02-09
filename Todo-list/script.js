// JavaScript for adding and deleting tasks
document.addEventListener('DOMContentLoaded', function() {
    // Function to add a task
    function addTask() {
      var taskInput = document.getElementById('taskInput');
      var task = taskInput.value.trim();
      if (task !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;
        // Add event listener to mark task for deletion
        li.addEventListener('click', function() {
          this.classList.toggle('active');
        });
        taskList.appendChild(li);
        taskInput.value = '';
      }
    }
  
    // Function to delete selected tasks
    function deleteTask() {
      var taskList = document.getElementById('taskList');
      var selectedTasks = taskList.querySelectorAll('.active');
      // Remove all selected tasks
      selectedTasks.forEach(function(task) {
        taskList.removeChild(task);
      });
    }
  
    // Event listeners for add and delete buttons
    document.getElementById('addBtn').addEventListener('click', addTask);
    document.getElementById('deleteBtn').addEventListener('click', deleteTask);
  });
  