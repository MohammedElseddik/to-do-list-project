import NewTask from './NewTask.js';
import ListItem from './List item.js';
import { add, bind, join } from 'lodash';

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
        localStorage.setItem('list', JSON.stringify(this.ListObjects));
        this.render();
    }

    selectTask(event, listLi, verticalDotsIcon, trashIcon) {
        if (event.target.classList.contains('list-description')) {
            listLi.classList.toggle('selected');
            trashIcon.classList.toggle('hidden');
        } else if (event.target.classList.contains('trash-icon')) {
            this.deleteTask(listLi, trashIcon);
        }
    }

    deleteTask(listLi, trashIcon) {
        listLi.remove();
        console.log(trashIcon.id)
        this.ListObjects.splice(trashIcon.id, 1);
        this.render();
        console.log(this.ListObjects);
        localStorage.setItem('list', JSON.stringify(this.ListObjects));
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
            //verticalDotsIcon.addEventListener('click', this.dragTask);
            //trashIcon.addEventListener('click', (event) =>{this.deleteTask.bind(this)});
            listLi.addEventListener('click', (event) => { this.selectTask(event, listLi, verticalDotsIcon, trashIcon) });
            //localStorage.setItem('list', JSON.stringify(this.ListObjects));
        }
    }
}