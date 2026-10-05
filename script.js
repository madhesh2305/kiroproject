// ── Grab DOM Elements ──
const taskInput = document.getElementById('taskInput');
const addBtn    = document.getElementById('addBtn');
const taskList  = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// ── Load tasks from localStorage when the page opens ──
// localStorage stores data as strings, so we use JSON.parse to convert it back to an array.
// If nothing is saved yet, we start with an empty array.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render whatever tasks already exist (important after a page refresh)
renderTasks();

// ── Event Listeners ──

// Add task when the button is clicked
addBtn.addEventListener('click', addTask);

// Also add task when the user presses Enter inside the input box
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// ── Functions ──

/**
 * addTask()
 * Reads the input value, creates a new task object, saves it, and re-renders the list.
 */
function addTask() {
  // .trim() removes extra spaces from both ends of the text
  const text = taskInput.value.trim();

  // Don't add empty tasks
  if (text === '') {
    taskInput.focus();
    return;
  }

  // Create a task object with a unique id, the text, and a completed flag
  const newTask = {
    id: Date.now(),        // Date.now() gives a unique number based on the current time
    text: text,
    completed: false
  };

  // Add the new task to our tasks array
  tasks.push(newTask);

  // Save the updated array to localStorage
  saveTasks();

  // Update the UI
  renderTasks();

  // Clear the input box and put focus back so the user can type another task
  taskInput.value = '';
  taskInput.focus();
}

/**
 * deleteTask(id)
 * Removes the task with the given id from the array, saves, and re-renders.
 */
function deleteTask(id) {
  // .filter() keeps every task EXCEPT the one matching the id
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });

  saveTasks();
  renderTasks();
}

/**
 * toggleTask(id)
 * Flips the completed status of a task between true and false.
 */
function toggleTask(id) {
  // .find() returns the first task whose id matches
  const task = tasks.find(function (task) {
    return task.id === id;
  });

  if (task) {
    task.completed = !task.completed; // flip true→false or false→true
  }

  saveTasks();
  renderTasks();
}

/**
 * saveTasks()
 * Converts the tasks array to a JSON string and stores it in localStorage.
 * This ensures tasks survive a page refresh.
 */
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * renderTasks()
 * Clears the task list in the DOM and rebuilds it from the tasks array.
 * Also updates the pending task counter.
 */
function renderTasks() {
  // Clear the current list so we can redraw it fresh
  taskList.innerHTML = '';

  // If there are no tasks, show a friendly empty-state message
  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="empty-msg">No tasks yet. Add one above!</li>';
    updateCount();
    return;
  }

  // Loop through every task and build its HTML element
  tasks.forEach(function (task) {
    // Create the <li> element
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type    = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', 'Mark task as completed');
    // When the checkbox changes, toggle the task's completed state
    checkbox.addEventListener('change', function () {
      toggleTask(task.id);
    });

    // Create the task text label
    const span = document.createElement('span');
    span.textContent = task.text;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className  = 'delete-btn';
    deleteBtn.textContent = '✕';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    // When clicked, delete this task
    deleteBtn.addEventListener('click', function () {
      deleteTask(task.id);
    });

    // Assemble: checkbox + text + delete button → list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the list item to the <ul>
    taskList.appendChild(li);
  });

  // Refresh the counter after rendering
  updateCount();
}

/**
 * updateCount()
 * Counts tasks where completed is false and updates the counter text.
 */
function updateCount() {
  // .filter() returns only the tasks that are NOT completed
  const pending = tasks.filter(function (task) {
    return !task.completed;
  }).length;

  taskCount.textContent = pending + ' task(s) pending';
}
