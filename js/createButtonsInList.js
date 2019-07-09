function createButtonsInTable(appendTask, id, tasks, rebuildList){
    let deleteButton = appendTask.appendChild(document.createElement('input'));
    deleteButton.type = 'button';
    deleteButton.value = 'x';
    deleteButton.setAttribute('id', `deleteButton${id}`);
    document.querySelector(`#deleteButton${id}`).addEventListener('click', ()=>{removeTask(id, tasks, rebuildList)});

    let changeButton = appendTask.appendChild(document.createElement('input'));
    changeButton.type = 'button';
    changeButton.value = 'change';
    changeButton.setAttribute('id', `changeButton${id}`);
    document.querySelector(`#changeButton${id}`).addEventListener('click', ()=>{changeTask(id, tasks, rebuildList)});

    let isFinishedTask = appendTask.appendChild(document.createElement('input'));
    appendTask.appendChild(document.createElement('label')).innerHTML = 'is ready?';
    isFinishedTask.type = 'checkbox';
    isFinishedTask.setAttribute('id', `checkbox${id}`);
}