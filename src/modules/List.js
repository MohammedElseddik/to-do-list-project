import NewTask from './NewTask.js';
import refresh from '../img/refresh.png';
import ListItem from './List item.js';
import { add } from 'lodash';

export default class List {
    constructor() {
        // if (localStorage.getItem('toDOList' === 0)) return this.ListObjects = [];
        // this.ListObjects = JSON.parse(localStorage.getItem('toDoList'));
        //this.render();
        this.ListObjects = [];
    }

    addTask() {
        const addTaskInput = document.querySelector('.add-task');
        const listform = document.querySelector('.add__task');
        console.log('helo')
        console.log(this.ListObjects)
        if (addTaskInput.value.trim().lenght !== 0) {
            console.log(addTaskInput.value)
            this.ListObjects.push(new NewTask(addTaskInput.value, false));
            console.log(this.ListObjects);
            listform.reset();
        }
    }


    // ListObjects = [
    //     new NewTask(
    //         'complete the project',
    //         true,
    //         0,
    //     ),

    //     new NewTask(
    //         'read the book',
    //         true,
    //         1,
    //     ),

    //     new NewTask(
    //         'learn more about react',
    //         false,
    //         2,
    //     ),
    // ]

    render() {

        const listBody = document.querySelector('.tasks-body');
        listBody.innerHTML = '';
        /* eslint-disable */
        for (const [i, listObject] of this.ListObjects.entries()) {
            listObject.index = i + 1;
            const listItem = new ListItem(listObject);
            const listLi = listItem.render();
            listBody.appendChild(listLi);
        }
    }
}