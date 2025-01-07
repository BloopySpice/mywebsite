/* || JAVA DROP DOWN MENU || */

/*
    "const" a variable that does not change, eg 
    cannot be redeclared or reassigned (constant)

    "document.querySelector" is a command for 
    javascript to find HTML by CSS selectors

    

*/
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})