document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div>
        <button class="btn btn-success btn-sm me-2 complete-btn">✔</button>
        <button class="btn btn-danger btn-sm delete-btn">🗑</button>
      </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';


    li.querySelector('.complete-btn').addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function () {
      taskList.removeChild(li);
    });
  });
});
