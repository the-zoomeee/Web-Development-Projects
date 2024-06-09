document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to add a new to-do item
    function addTodoItem() {
        const task = todoInput.value.trim();
        if (task === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = '';
        todoInput.focus();
    }

    // Add to-do item when the button is clicked
    addButton.addEventListener('click', addTodoItem);

    // Add to-do item when the Enter key is pressed
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoItem();
        }
    });
});
