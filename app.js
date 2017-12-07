function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoForm = document.getElementById('newToDoForm');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++ //problem here???
    });

    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const title = document.createElement('span');
       title.textContent = toDo.title;

       const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.addEventListener('click', () => {
           deleteToDo(toDo.id);
           renderTheUI();
         });

       toDoList.appendChild(newLi);
       newLi.appendChild(checkbox);
       newLi.appendChild(title);
       newLi.appendChild(deleteBtn);



     });
     function deleteToDo(id) {
       toDos = toDos.filter(item => item.id !== id);

     }
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
