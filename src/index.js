import './style.css';
import List from './modules/List.js';

const list = new List();
console.log(list.ListObjects);

const addTaskBtn = document.querySelector('.add-btn');
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    list.addTask();
    list.render();
});
