import verticalDotsIcon from '../img/vertical dots.svg';

export default class ListItem {
    constructor(listProperties) {
        this.listItem = listProperties;
    }

    render() {
        // const addTaskBtn = document.createElement('button');
        // addTaskBtn.textContent = '+';
        const verticalDots = new Image();
        verticalDots.src = verticalDotsIcon;
        // addTaskBtn.addEventListener('click', addTask);
        const listLi = document.createElement('li');
        const text = document.createElement('p');
        text.textContent = this.listItem.description;
        text.className = 'list-description';
        listLi.className = 'list-item';
        const checkboxIcon = document.createElement('input');
        checkboxIcon.type = 'checkbox';
        listLi.appendChild(checkboxIcon);
        listLi.appendChild(text);
        listLi.appendChild(verticalDots);
        // listLi.appendChild(addTaskBtn);
        return listLi;
    }
}