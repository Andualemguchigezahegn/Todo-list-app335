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
