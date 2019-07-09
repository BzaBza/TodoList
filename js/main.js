'use strict';

function init() {
  let tasksTables = localStorage.getItem('data') ? localStorage.getItem('data') : [[]];
  let selectedTableId = 0;

  document.querySelector('#addList').addEventListener('click', () => {
    createTable();
  });

  tasksTables.map((tasksTable, key) => {
    document.querySelector('#addTaskButton').addEventListener('click', () => {
      createTask(tasksTables[selectedTableId], selectedTableId, tasksTables[selectedTableId].length, selectedTableId)
    });
  });

  function createTable() {
    tasksTables.push([]);
    selectedTableId = tasksTables.length - 1;
  }

  Array.observe(tasksTables, function (changes) {
    localStorage.setItem('data', JSON.stringify(changes))
  });
}

window.onload = init;
