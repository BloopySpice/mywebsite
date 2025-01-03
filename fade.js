// Remove the transition class
const square1 = document.querySelector('.square1');
square1.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square1-transition');
  });
});

observer.observe(document.querySelector('.square1-wrapper'));