import _, { add } from 'lodash';
import './style.css';


class ListProperties {

    constructor(description, completed, index) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}

class List {

    ListObjects = [
        new ListProperties(
            'complete the project',
            true,
            0
        ),

        new ListProperties(
            'read the book',
            true,
            1
        ),

        new ListProperties(
            'learn more about react',
            false,
            2
        )
    ];

    render() {
        const listBody = document.querySelector('.tasks-body');
        for (const listItem of this.ListObjects) {
            const addTaskBtn = document.createElement('button');
            addTaskBtn.textContent = '+';
            //addTaskBtn.addEventListener('click', addTask);
            const listLi = document.createElement('li');
            const text = document.createElement('p');
            text.textContent = listItem.description;
            text.className = 'list-description';
            listLi.className = 'list-item';
            const checkboxIcon = document.createElement('input');
            checkboxIcon.type = 'checkbox';
            listLi.appendChild(checkboxIcon);
            listLi.appendChild(text);
            listLi.appendChild(addTaskBtn);
            listBody.appendChild(listLi);
        }
    }
}

const list1 = new List()
list1.render();
console.log(list1);
