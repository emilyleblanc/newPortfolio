
const hamburgerMenu = document.querySelector('.menu-icon');
const navEl = document.querySelector('nav')

// function for slide out menu

hamburgerMenu.addEventListener('click',()=> {
    hamburgerMenu.classList.toggle('nav-open');
    navEl.classList.toggle('slide-out-menu');
});

// function for lazy load

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

const options = {
    root: null,
    threshold:0,
    rootMargin: '-150px'
};

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle('inverse');
        observe.unobserve(entry.target)
    })
},options)

sections.forEach(section => {
    observer.observe(section);
});



