import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import List from './modules/List.js';



const list = new List();
const addTaskBtn = document.querySelector('.add-btn');
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    list.addTask();
    console.log(list.ListObjects);
});

window.addEventListener('DOMContentLoaded', list.render());