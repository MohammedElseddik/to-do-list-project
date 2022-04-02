import NewTask from './NewTask.js';
import ListItem from './List item.js';

export default class List {
    constructor() {
        this.ListObjects = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'));
    }

    addTask() {
        const addTaskInput = document.querySelector('.add-task');
        const listform = document.querySelector('.add__task');
        if (addTaskInput.value.trim().length === 0) return;
        this.ListObjects.push(new NewTask(addTaskInput.value, false));
        listform.reset();
        this.render();
        localStorage.setItem('list', JSON.stringify(this.ListObjects));
        this.completedStausCheck();
    }

    selectTask(event, listLi, verticalDotsIcon, trashIcon) {
        if (event.target.classList.contains('list-description')) {
            listLi.classList.toggle('selected');
            trashIcon.classList.toggle('hidden');
            this.editTask(event.target);
        } else if (event.target.classList.contains('trash-icon')) {
            this.deleteTask(listLi, trashIcon);
        }
    }

    deleteTask(listLi, trashIcon) {
        listLi.remove();
        this.ListObjects.splice(trashIcon.id, 1);
        this.render();
        localStorage.setItem('list', JSON.stringify(this.ListObjects));
        this.completedStausCheck();
    }

    editTask(editEventTarget) {
        editEventTarget.toggleAttribute('readonly');
        editEventTarget.addEventListener('keyup', () => {
            /* eslint-disable */
            for (const [i, item] of this.ListObjects.entries()) {
                if (parseInt(editEventTarget.parentElement.id) === i) {
                    item.description = editEventTarget.value;
                }
            }
            localStorage.setItem('list', JSON.stringify(this.ListObjects));
        });
    }

    completedStausCheck() {
        const checkboxs = document.querySelectorAll('.checkbox');
        checkboxs.forEach((element, index) => {
            //localStorage.setItem(checkboxs[index].id, checkboxs[i].checked);
            element.addEventListener('change', () => {
                for (const listObject of this.ListObjects) {
                    if (element.checked) {
                        this.ListObjects[parseInt(element.id) - 1].completed = true;
                        element.parentElement.classList.add('line');
                    } else {
                        this.ListObjects[parseInt(element.id) - 1].completed = false;
                        element.parentElement.classList.remove('line');
                    }
                }
                localStorage.setItem('list', JSON.stringify(this.ListObjects));
            });
        })
        this.checkboxsStatus(checkboxs);
        return checkboxs;
    }

    checkboxsStatus(checkboxs) {
        for (const item of this.ListObjects) {
            if (item.completed === true) {
                checkboxs[item.index - 1].setAttribute('checked', '');
                checkboxs[item.index - 1].parentElement.classList.add('line');
            } else if (item.completed === false) {
                checkboxs[item.index - 1].removeAttribute('checked', '');
                checkboxs[item.index - 1].parentElement.classList.remove('line');
            }
        }
        this.clearCompletedTasks();
    }

    clearCompletedTasks() {
        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', () => {
            console.log('hello')
            this.ListObjects = this.ListObjects.filter((item) => {
                return item.completed === false;
            })
            localStorage.setItem('list', JSON.stringify(this.ListObjects));
            this.render();
        })
    }

    render() {
        const listBody = document.querySelector('.tasks-body');
        listBody.innerHTML = '';
        /* eslint-disable */
        for (const [i, listObject] of this.ListObjects.entries()) {
            listObject.index = i + 1;
            const listItem = new ListItem(listObject);
            const listLi = listItem.render(i);
            listBody.appendChild(listLi);
            const verticalDotsIcon = listLi.querySelector('.vertical-dots-icon');
            const trashIcon = listLi.querySelector('.trash-icon');
            listLi.addEventListener('click', (event) => { this.selectTask(event, listLi, verticalDotsIcon, trashIcon) });
        }
    }
}