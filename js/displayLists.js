function createItemInTable(appendTask, id, tasksTable, tableId) {
  appendTask.setAttribute('class', "task");
  appendTask.setAttribute('id', `row${id}${tableId}`);
  appendTask.innerHTML = `<p>${tasksTable[id]}</p>`;
  console.log(tableId, "tasksTable[id]")
}
