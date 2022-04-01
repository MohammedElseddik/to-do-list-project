import './style.css';
import List from './modules/List.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

const list = new List();
const addTaskBtn = document.querySelector('.add-btn');
addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  list.addTask();
});

window.addEventListener('DOMContentLoaded', list.render());