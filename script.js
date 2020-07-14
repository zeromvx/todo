const dataBox = document.querySelector('.data');
const inputForm = document.forms.inputForm;
const inputData = inputForm.inputData;
let id = document.querySelectorAll('li').length + 1;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createTask(inputData.value);
});


dataBox.addEventListener('click', (e) => {

    let elem = e.target;
    if (elem.tagName === "BUTTON" && elem.classList.contains('delete')) {
        deleteTask(elem.parentNode);
    } else if (elem.tagName === "INPUT" && elem.classList.contains('toggle')) {
        changeTaskOption(elem.parentNode);
    }
 });


function createTask(name) {

    let newTask = document.createElement('li');
    newTask.dataset['done'] = false;
    newTask.dataset['id'] = id;
    newTask.innerHTML = `<input type="checkbox" id="toggle-${id}" name="toggle-${id}" class="toggle">
                        <label for="toggle-${id}">${name}</label>
                        <button class='delete'></button>`;
    dataBox.prepend(newTask);
    id++;
}


function deleteTask(target) {
    target.remove();
}


function changeTaskOption(target) {

    let toDoEl = target.dataset.done;
    toDoEl == 'false' ? target.dataset.done = 'true': target.dataset.done = 'false';
    target.classList.toggle('completed');
}