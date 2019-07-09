function createTask(tasksTable, tableId, taskId, selectedTableId) {
  let inputValue = document.querySelector('#taskInput').value;
  let tableWrap = document.querySelector('#taskTablesWrap');

  if (inputValue !== undefined && inputValue !== "") {
    tasksTable.push(inputValue);
    tableWrap.appendChild(document.createElement('ul')).setAttribute('id', `ul${tableId}`);
    let taskTableList = document.querySelector(`#ul${tableId}`);
    taskTableList.addEventListener('click', () => {
      selectedTableId = tableId;
      taskTableList.style = "border: 1px solid black"
    });
    let appendTask = taskTableList.appendChild(document.createElement('li'));
    taskTableList.style = 'list-style: none';

    createItemInTable(appendTask, taskId, tasksTable, tableId);
    createButtonsInTable(appendTask, taskId, tasksTable, tableId);

    document.querySelector('#taskInput').value = "";
  }
}

function removeTask(taskId, tasks, tableId) {
  let taskTableList = document.querySelector(`#ul${tableId}`);
  tasks.splice(taskId, 1);
  taskTableList.removeChild(document.querySelector(`#row${taskId}${tableId}`));

}

function changeTask(taskId, tasks, tableId) {
  let row = document.querySelector(`#row${taskId}${tableId}`);
  let changeButton = document.querySelector(`#changeButton${taskId}${tableId}`);
  changeButton.disabled = true;

  let changeInput = row.appendChild(document.createElement('input'));
  changeInput.setAttribute('id', `changeInput${taskId}${tableId}`);

  let acceptChanges = row.appendChild(document.createElement('input'));
  acceptChanges.type = 'button';
  acceptChanges.value = 'ok';
  acceptChanges.setAttribute('id', `ok${taskId}${tableId}`);

  document.querySelector(`#ok${taskId}${tableId}`).addEventListener('click', () => {
    changeButton.disabled = false;
    let changeValue = document.querySelector(`#changeInput${taskId}${tableId}`).value;
    document.querySelector(`#row${taskId}${tableId}`).getElementsByTagName('p')[0].innerHTML = changeValue;
    tasks.splice(taskId, 1, changeValue);
    acceptChanges.remove();
    changeInput.remove();
  })
}