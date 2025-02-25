const bar = document.querySelector('.bars');
const link = document.querySelectorAll('.link-toggle');
const navbar = document.querySelector('.navbar-toggle');



bar.addEventListener('click', () => {
    link.forEach((e)=>{
        e.classList.toggle('active');
    })
    navbar.classList.toggle('showMenu');
    
});