function createButtonsInTable(appendTask, id, tasksTable, tableId) {
    let deleteButton = appendTask.appendChild(document.createElement('input'));
    deleteButton.type = 'button';
    deleteButton.value = 'x';
    deleteButton.setAttribute('id', `deleteButton${id}${tableId}`);
    document.querySelector(`#deleteButton${id}${tableId}`).addEventListener('click', () => {
        removeTask(id, tasksTable, tableId)
    });

    let changeButton = appendTask.appendChild(document.createElement('input'));
    changeButton.type = 'button';
    changeButton.value = 'change';
    changeButton.setAttribute('id', `changeButton${id}${tableId}`);
    document.querySelector(`#changeButton${id}${tableId}`).addEventListener('click', () => {
        changeTask(id, tasksTable, tableId)
    });

    let isFinishedTask = appendTask.appendChild(document.createElement('input'));
    appendTask.appendChild(document.createElement('label')).innerHTML = 'is ready?';
    isFinishedTask.type = 'checkbox';
    isFinishedTask.setAttribute('id', `checkbox${id}${tableId}`);
}