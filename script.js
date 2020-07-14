const dataBox = document.querySelector('.data');
const inputForm = document.forms.inputForm;
const inputData = inputForm.inputData;


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
    newTask.innerHTML = `<input type="checkbox" name="toggle" class="toggle">
                        <span>${name}</span>
                        <button class='delete'>Delete</button>`;
    dataBox.prepend(newTask);
}


function deleteTask(target) {
    target.remove();
}


function changeTaskOption(target) {

    let toDoEl = target.dataset.done;
    toDoEl == 'false' ? target.dataset.done = 'true': target.dataset.done = 'false';
    target.classList.toggle('active');
}