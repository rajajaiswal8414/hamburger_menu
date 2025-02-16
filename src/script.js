const menuBox = document.querySelector('.menu-box');
const humburgerIcon = document.querySelector('.humburgerIcon');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const goToTop = document.querySelector('.goToTop');
const headerContent = document.querySelector('.header-content');

humburgerIcon.addEventListener('click', (e) => {
    // e.stopPropagation();
    menuBox.classList.add('show')
    menuIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none')
})

headerContent.addEventListener('click', (e) => {
    e.stopPropagation();
})

closeIcon.addEventListener('click', () => {
    menuBox.classList.remove('show');
    menuIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
})

window.addEventListener('click', (e) => {
    menuBox.classList.remove('show');
    menuIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
})
