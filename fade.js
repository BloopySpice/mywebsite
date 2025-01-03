// Remove the transition class
const header__container = document.querySelector('.header__container');
header__container.classList.remove('square1-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header__container.classList.add('square1-transition');
      return;
    }

    header__container.classList.remove('square1-transition');
  });
});

observer.observe(document.querySelector('.header__body'));