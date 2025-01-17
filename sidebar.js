


const menu = document.querySelector('#mobile-menu');
let btn = document.querySelector('nav__toggle');
let sidebar = document.querySelector('.sidebar')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    sidebar.classList.toggle('active');


})
// btn.onclick = function() {
//     sidebar.classList.toggle('active');

// };


// let btn = document.querySelector('#btn');
// let sidebar = document.querySelector('.sidebar')

// btn.onclick = function() {
//     sidebar.classList.toggle('active');

// };