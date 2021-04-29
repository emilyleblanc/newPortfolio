
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

// // function for lazy load

// const h1 = document.querySelector('h1')

// const options = {
//     root: null,
//     threshold:0,
//     rootMargin: '0px 0px -150px 0px'
// };

// const observer = new IntersectionObserver((entries, observer)=>{
//         if(!entry.isIntersecting){
//             return;
//         }else{
//             console.log(entries);
//             // entries.classList.add('slide-in');
//             observer.unobserve(entries.target)
//         }
// },options)







