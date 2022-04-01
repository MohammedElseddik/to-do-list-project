import verticalDotsIcon from '../img/vertical dots.svg';
import trashIcon from '../img/trash icon.svg';

export default class ListItem {
    constructor(newTask) {
        this.listItem = newTask;
    }

    render(index) {
        // const addTaskBtn = document.createElement('button');
        // addTaskBtn.textContent = '+';
        // addTaskBtn.addEventListener('click', addTask);
        const listLi = document.createElement('li');
        const text = document.createElement('p');
        text.textContent = this.listItem.description;
        text.className = 'list-description';
        listLi.className = 'list-item';
        const checkboxIcon = document.createElement('input');
        checkboxIcon.type = 'checkbox';
        const verticalDots = new Image();
        verticalDots.classList = 'vertical-dots-icon';
        verticalDots.id = index;
        verticalDots.src = verticalDotsIcon;
        const trash = new Image();
        trash.className = 'trash-icon hidden';
        trash.id = index;
        trash.src = trashIcon;
        listLi.appendChild(checkboxIcon);
        listLi.appendChild(text);
        listLi.appendChild(trash);
        listLi.appendChild(verticalDots);
        // listLi.appendChild(addTaskBtn);
        return listLi;
    }
}
