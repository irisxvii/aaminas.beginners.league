class TodoApp {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskIdCounter = this.getNextId();
    this.init();
  }

  init() {
    this.bindEvents();
    this.render();
    this.updateStats();
  }

  bindEvents() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', () => this.addTask());
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addTask();
      }
    });

    taskInput.focus();
  }

  addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    const newTask = {
      id: this.taskIdCounter++,
      text: taskText,
      completed: false
    };

    this.tasks.push(newTask);
    this.saveTasks();
    this.render();
    this.updateStats();

    taskInput.value = '';
    taskInput.focus();
  }

  toggleTask(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.render();
      this.updateStats();
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
    this.render();
    this.updateStats();
  }

  render() {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');

    if (this.tasks.length === 0) {
      taskList.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    taskList.innerHTML = this.tasks.map(task => `
      <li class="task-item ${task.completed ? 'completed' : ''}">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}
               onchange="todoApp.toggleTask(${task.id})">
        <span class="task-text">${this.escapeHtml(task.text)}</span>
        <button class="delete-btn" onclick="todoApp.deleteTask(${task.id})">Delete</button>
      </li>
    `).join('');
  }

  updateStats() {
    const totalTasksEl = document.getElementById('totalTasks');
    const completedTasksEl = document.getElementById('completedTasks');

    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.completed).length;

    totalTasksEl.textContent = `${total} task${total !== 1 ? 's' : ''}`;
    completedTasksEl.textContent = `${completed} completed`;
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getNextId() {
    const maxId = this.tasks.reduce((max, task) => Math.max(max, task.id || 0), 0);
    return maxId + 1;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

const todoApp = new TodoApp();