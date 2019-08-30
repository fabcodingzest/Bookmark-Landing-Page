// Mobile nav

const menuOpen = document.querySelector(".header__icon");
const mobileNav = document.querySelector(".header__mobile");


menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('active');
    mobileNav.classList.toggle('open');
})
