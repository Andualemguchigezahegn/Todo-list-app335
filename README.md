# 📝 Todo List App

A fully responsive Todo List application built with HTML, CSS, and JavaScript. Organize your tasks efficiently with local storage persistence.

## ✨ Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete individual tasks
- ✅ Clear all tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Local storage (tasks saved automatically)
- ✅ Responsive design (works on all devices)
- ✅ Keyboard shortcuts (Enter to add)
- ✅ Dark mode support

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/todo-app/)
7
## 📸 Screenshots

### Desktop View
![Desktop View](screenshot-desktop.png)

### Mobile View
![Mobile View](screenshot-mobile.png)

## 🛠️ Technologies Used


- **HTML5** - Structure
- **CSS3** - Styling & Responsive Design
- **JavaScript (ES6)** - Functionality & Logic
- **LocalStorage** - Data persistence

## 📁 Project Structure

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📝 Todo List</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 Todo List</h1>
            <p class="subtitle">Organize your tasks efficiently</p>
        </header>

        <section class="todo-input-section">
            <div class="input-group">
                <input 
                    type="text" 
                    id="todoInput" 
                    placeholder="Enter a new task..."
                    aria-label="New todo input"
                >
                <button id="addTodoBtn" class="btn btn-primary">
                    ➕ Add
                </button>
            </div>
        </section>

        <section class="filter-section">
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
        </section>

        <section class="todo-list-section">
            <div class="todo-stats">
                <span id="todoCount">0 tasks remaining</span>
                <button id="clearAllBtn" class="btn btn-danger">🗑️ Clear All</button>
            </div>
            <ul id="todoList" class="todo-list">
                <!-- Todos will appear here -->
            </ul>
        </section>

        <div id="emptyState" class="empty-state">
            <span class="empty-icon">🎯</span>
            <p>No tasks yet. Add one above!</p>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>


/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== BODY ===== */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: background 0.3s ease;
}

/* ===== CONTAINER ===== */
.container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.container:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
}

/* ===== HEADER ===== */
header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 5px;
}

.subtitle {
    color: #718096;
    font-size: 0.9rem;
}

/* ===== INPUT SECTION ===== */
.todo-input-section {
    margin-bottom: 25px;
}

.input-group {
    display: flex;
    gap: 10px;
}

#todoInput {
    flex: 1;
    padding: 14px 18px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

#todoInput:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

/* ===== BUTTONS ===== */
.btn {
    padding: 14px 24px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-primary:active {
    transform: scale(0.95);
}

.btn-danger {
    background: #fc8181;
    color: white;
    padding: 8px 16px;
    font-size: 0.85rem;
}

.btn-danger:hover {
    background: #f56565;
    transform: scale(1.05);
}

/* ===== FILTER SECTION ===== */
.filter-section {
    margin-bottom: 20px;
}

.filter-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 8px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 20px;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #4a5568;
}

.filter-btn:hover {
    border-color: #667eea;
    color: #667eea;
    transform: scale(1.05);
}

.filter-btn.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: #667eea;
}

/* ===== TODO STATS ===== */
.todo-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f7fafc;
}

#todoCount {
    color: #4a5568;
    font-weight: 500;
    font-size: 0.95rem;
}

/* ===== TODO LIST ===== */
.todo-list {
    list-style: none;
    min-height: 200px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 14px;
    background: #f7fafc;
    border-radius: 12px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.todo-item:hover {
    background: #edf2f7;
    transform: translateX(5px);
}

.todo-item.completed {
    opacity: 0.7;
    background: #f0fff4;
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #a0aec0;
}

/* ===== CHECKBOX ===== */
.todo-checkbox {
    width: 22px;
    height: 22px;
    min-width: 22px;
    margin-right: 15px;
    cursor: pointer;
    accent-color: #48bb78;
    transition: all 0.2s ease;
}

.todo-checkbox:hover {
    transform: scale(1.1);
}

/* ===== TODO TEXT ===== */
.todo-text {
    flex: 1;
    color: #2d3748;
    word-break: break-word;
    font-size: 1rem;
}

/* ===== ACTIONS ===== */
.todo-actions {
    display: flex;
    gap: 8px;
}

.btn-delete {
    background: #fc8181;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.85rem;
}

.btn-delete:hover {
    background: #f56565;
    transform: scale(1.1);
}

/* ===== EMPTY STATE ===== */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    display: none;
}

.empty-state.show {
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.empty-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 15px;
}

.empty-state p {
    color: #a0aec0;
    font-size: 1.1rem;
}

/* ===== EDIT INPUT ===== */
.todo-edit-input {
    flex: 1;
    padding: 8px 12px;
    border: 2px solid #667eea;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    margin-right: 10px;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

/* Tablet */
@media screen and (max-width: 768px) {
    .container {
        padding: 20px;
    }

    header h1 {
        font-size: 1.75rem;
    }

    .input-group {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .filter-buttons {
        gap: 8px;
    }

    .filter-btn {
        flex: 1;
        text-align: center;
        padding: 6px 12px;
        font-size: 0.85rem;
    }

    .todo-stats {
        flex-direction: column;
        gap: 10px;
        align-items: stretch;
        text-align: center;
    }

    .todo-stats .btn-danger {
        width: 100%;
        text-align: center;
    }
}

/* Mobile */
@media screen and (max-width: 480px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 15px;
        border-radius: 15px;
    }

    header h1 {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 0.8rem;
    }

    .todo-item {
        flex-wrap: wrap;
        gap: 8px;
        padding: 12px;
    }

    .todo-text {
        width: 100%;
        order: 1;
        font-size: 0.95rem;
    }

    .todo-checkbox {
        order: 0;
        width: 20px;
        height: 20px;
        min-width: 20px;
    }

    .todo-actions {
        order: 2;
        width: 100%;
        justify-content: flex-end;
    }

    .filter-btn {
        font-size: 0.75rem;
        padding: 5px 10px;
    }

    .empty-state {
        padding: 30px 15px;
    }

    .empty-icon {
        font-size: 2.5rem;
    }

    .todo-edit-input {
        font-size: 0.9rem;
        padding: 6px 10px;
    }
}

/* Small Mobile */
@media screen and (max-width: 350px) {
    .container {
        padding: 10px;
        border-radius: 10px;
    }

    header h1 {
        font-size: 1.25rem;
    }

    .todo-item {
        padding: 10px;
    }

    .filter-btn {
        font-size: 0.65rem;
        padding: 4px 8px;
    }
}

/* ============================================
   DARK MODE
   ============================================ */

@media (prefers-color-scheme: dark) {
    body {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    }

    .container {
        background: #2d3748;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    }

    .container:hover {
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.7);
    }

    header h1 {
        color: #f7fafc;
    }

    .subtitle {
        color: #a0aec0;
    }

    #todoInput {
        background: #4a5568;
        color: #f7fafc;
        border-color: #4a5568;
    }

    #todoInput::placeholder {
        color: #a0aec0;
    }

    #todoInput:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    }

    .todo-item {
        background: #4a5568;
    }

    .todo-item:hover {
        background: #553c9a;
    }

    .todo-item.completed {
        background: #2f855a;
    }

    .todo-text {
        color: #f7fafc;
    }

    .todo-item.completed .todo-text {
        color: #a0aec0;
    }

    .filter-btn {
        color: #a0aec0;
        border-color: #4a5568;
    }

    .filter-btn:hover {
        border-color: #667eea;
        color: #667eea;
    }

    .filter-btn.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-color: #667eea;
    }

    #todoCount {
        color: #a0aec0;
    }

    .todo-stats {
        border-bottom-color: #4a5568;
    }

    .empty-state p {
        color: #718096;
    }

    .todo-edit-input {
        background: #4a5568;
        color: #f7fafc;
        border-color: #667eea;
    }

    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .btn-primary:hover {
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    }

    .btn-danger {
        background: #e53e3e;
    }

    .btn-danger:hover {
        background: #c53030;
    }

    .btn-delete {
        background: #e53e3e;
    }

    .btn-delete:hover {
        background: #c53030;
    }
}
// ===== STATE =====
let todos = [];
let currentFilter = 'all';

// ===== DOM ELEMENTS =====
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const clearAllBtn = document.getElementById('clearAllBtn');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');

// ===== LOCAL STORAGE =====
const STORAGE_KEY = 'todos_data';

function loadTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            todos = JSON.parse(stored);
        } catch (e) {
            todos = [];
        }
    }
}

function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// ===== ADD TODO =====
function addTodo() {
    const text = todoInput.value.trim();
    
    if (!text) {
        todoInput.style.borderColor = '#fc8181';
        todoInput.placeholder = '⚠️ Please enter a task!';
        setTimeout(() => {
            todoInput.style.borderColor = '#e2e8f0';
            todoInput.placeholder = 'Enter a new task...';
        }, 2000);
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    todoInput.value = '';
    todoInput.focus();
    renderTodos();
}

// ===== TOGGLE TODO =====
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

// ===== DELETE TODO =====
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

// ===== CLEAR ALL =====
function clearAllTodos() {
    if (todos.length === 0) return;
    if (confirm('Are you sure you want to delete all todos?')) {
        todos = [];
        saveTodos();
        renderTodos();
    }
}

// ===== FILTER =====
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// ===== RENDER =====
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    
    if (todos.length === 0) {
        emptyState.classList.add('show');
        todoList.innerHTML = '';
        todoCount.textContent = '0 tasks remaining';
        return;
    } else {
        emptyState.classList.remove('show');
    }

    const remaining = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;

    let html = '';
    filteredTodos.forEach(todo => {
        html += `
            <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${todo.text}</span>
                <div class="todo-actions">
                    <button class="btn-delete">🗑️</button>
                </div>
            </li>
        `;
    });

    todoList.innerHTML = html;
    attachEventListeners();
}

// ===== ATTACH EVENTS =====
function attachEventListeners() {
    document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const todoItem = this.closest('.todo-item');
            const id = parseInt(todoItem.dataset.id);
            toggleTodo(id);
        });
    });

    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const todoItem = this.closest('.todo-item');
            const id = parseInt(todoItem.dataset.id);
            deleteTodo(id);
        });
    });
}

// ===== SET FILTER =====
function setFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    renderTodos();
}

// ===== INIT =====
function init() {
    loadTodos();
    renderTodos();
    
    addTodoBtn.addEventListener('click', addTodo);
    clearAllBtn.addEventListener('click', clearAllTodos);
    
    todoInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addTodo();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            setFilter(this.dataset.filter);
        });
    });
    
    todoInput.focus();
}

document.addEventListener('DOMContentLoaded', init);
