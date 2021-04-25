
const hamburgerMenu = document.querySelector('.menu-icon');
const navEl = document.querySelector('nav')

hamburgerMenu.addEventListener('click',()=> {
    hamburgerMenu.classList.toggle('nav-open');
    navEl.classList.toggle('slide-out-menu');
});