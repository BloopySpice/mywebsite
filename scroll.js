const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 

        // || RE-HIDING THE ELEMENTS ON SCREEN POST INTERSECTION ||
        //
        //else {
        //     entry.target.classList.remove('show')
        // }
        //


    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));