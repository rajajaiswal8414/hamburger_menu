const menuBox = document.querySelector('.menu-box');
const humburgerIcon = document.querySelector('.humburgerIcon');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');


humburgerIcon.addEventListener('click', () => {
    menuBox.classList.add('show')
    menuIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none')
})

closeIcon.addEventListener('click', () => {
    menuBox.classList.remove('show');
    menuIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
})