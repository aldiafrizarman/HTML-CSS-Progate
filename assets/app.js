// QuerySelector for Responsive 
const menuDrop = document.querySelector('#mobile-menu');
const menuDropLinks = document.querySelector('.navbar-menu');

menuDrop.addEventListener('click', function() {
    menuDrop.classList.toggle('is-active');
    menuDropLinks.classList.toggle('active');
})
