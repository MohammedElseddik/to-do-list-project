import verticalDotsIcon from '../img/vertical dots.svg';
import trashIcon from '../img/trash icon.svg';

export default class ListItem {
  constructor(newTask) {
    this.listItem = newTask;
  }

  render(index) {
    const listLi = document.createElement('li');
    listLi.className = 'list-item';
    listLi.id = index;
    const listLiInput = document.createElement('input');
    listLiInput.className = 'list-description';
    listLiInput.value = this.listItem.description;
    listLiInput.setAttribute('readonly', '');
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'save';
    saveBtn.className = 'save-btn hidden';
    const checkboxIcon = document.createElement('input');
    checkboxIcon.type = 'checkbox';
    checkboxIcon.className = 'checkbox';
    checkboxIcon.id = index + 1;
    const verticalDots = new Image();
    verticalDots.classList = 'vertical-dots-icon';
    verticalDots.id = index;
    verticalDots.src = verticalDotsIcon;
    const trash = new Image();
    trash.className = 'trash-icon hidden';
    trash.id = index;
    trash.src = trashIcon;
    listLi.appendChild(checkboxIcon);
    listLi.appendChild(listLiInput);
    listLi.appendChild(saveBtn);
    listLi.appendChild(trash);
    listLi.appendChild(verticalDots);
    return listLi;
  }
}
