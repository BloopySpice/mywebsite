/* 

|| JAVA DROP DOWN MENU ||
Due to 


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
 
/* || MOBILE MENU DROP DOWN || */


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');


// const menuBar = document.querySelector('.mysidebar')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');

    document.getElementById("mysidebar").style.width = "250px";
    // menuBar.classList.toggle('open');



    // menuLinks.classList.toggle('active');

// openNav()
    // document.getElementById("mysidebar").style.width = "250px";


// closeNav()
//     document.getElementById("mysidebar").style.width = "0";
})

//  const menuActive = document.querySelector('.nav__toggle');

//  menuActive.addEventListener('click', function() {
//     // menuActive.classList.remove('is-active');
//     document.getElementById("mysidebar").style.width = "0px";
// })


// const menuClose = document.querySelector('#mobile-menu-close');
// const menuLinksClose = document.querySelector('.nav__menuclose');

// menuClose.addEventListener('click', function() {
//     menuClose.classList.remove('is-active');

//     document.getElementById("mysidebar").style.width = "0";
// })

/* || ^ EXPLANATION ^ ||

There are two constant variables, "menu" and "menuLinks". These two variables have been 
assigned CSS elements ("#mobile-menu" + ".nav__menu"). Using an "addEventListener", we 
added a click function that changes the CSS id (#) and element (.) allowing the css code
to change.

*/

/* || COLOUR CHANGING BUTTON || */

// const redbutton = document.querySelector('.button');
// redbutton.addEventListener('click', function() {
//     redbutton.classList.toggle('round');
// })

// const leftMenu = document.querySelector('#mobile-menu');
// const leftMenuLinks = document.querySelector('.nav__menu');
// const leftMenuBar = document.querySelector('.leftmenu__container');

// leftMenu.addEventListener('click', function() {
//     leftMenu.classList.toggle('is-active');
//     // leftMenuLinks.classList.toggle('active');
//     leftMenuBar.classList.toggle('out');
// })

// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.nav__menu');
// sidemenu.addEventListener('click', function() {

    // openNav()
    //      document.getElementById("mysidebar").style.width = "250px";

    
    // closeNav()
    //      document.getElementById("mysidebar").style.width = "0";


// })