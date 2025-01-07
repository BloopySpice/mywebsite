/* 

|| JAVA DROP DOWN MENU ||

    || CONST ||
    "const" a variable that does not change, eg cannot be redeclared or reassigned (constant)

    || QUERY SELECTER ||
    "document.querySelector" is a command for javascript to find HTML by CSS selectors

    || EVENT LISTENER ||
    "addEventListener" is as it sounds, an event listener. it is followed in brackets by the 
    event type it is waiting for (eg, click) then function and tge function name (if set up 
    like below, a function name isnt needed as it is local (a function name could then be 
    used global))

    || CLASS LIST ||
    "classList" returns the CSS class names of HTML elements, using additional selectors 
    (eg .add / .remove / .toggle) you are able to manipulate the HTML side.

    || TOGGLE ||
    ".toggle" is an "classList" selector enabling the elements CSS class names to be changed

*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})