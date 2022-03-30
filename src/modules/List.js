import ListProperties from './ListProperties.js';
import refresh from '../img/refresh.svg';
import ListItem from './List item.js';

export default class List {
    // ListObjects = [

    // ]

    // addTask() {
    //     const addTaskInput = document.querySelector('.add-task');

    // }


    ListObjects = [
        new ListProperties(
            'complete the project',
            true,
            0,
        ),

        new ListProperties(
            'read the book',
            true,
            1,
        ),

        new ListProperties(
            'learn more about react',
            false,
            2,
        ),
    ]

    render() {
        const listBody = document.querySelector('.tasks-body');
        const listTitle = document.querySelector('.task-list');
        const refreshIcon = new Image();
        refreshIcon.src = refresh;
        listTitle.appendChild(refreshIcon);
        /* eslint-disable */
        for (const listObject of this.ListObjects) {
            const listItem = new ListItem(listObject);
            const listLi = listItem.render();
            listBody.appendChild(listLi);
        }
    }
}