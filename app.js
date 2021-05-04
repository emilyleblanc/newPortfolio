
const hamburgerMenu = document.querySelector('.menu-icon');
const navEl = document.querySelector('nav')

// function for slide out menu

hamburgerMenu.addEventListener('click',()=> {
    hamburgerMenu.classList.toggle('nav-open');
    navEl.classList.toggle('slide-out-menu');
});

const h1 = document.querySelector('h1')

window.addEventListener('load', ()=>{
    h1.classList.add('slide-in')
})

// function for lazy load

const sectionOne = document.querySelector('.portfolio'); 

const faders = document.querySelectorAll('.fader');
console.log(faders)

const appearOptions = {
    root:null,
    threshold: 0,
    rootMargin:'-150px' 
};
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            console.log(entry.target);
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);

        }
    });  
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});







