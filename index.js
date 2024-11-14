const hamMenau = document.querySelector('.hamMenau');

const offScreenMenu = document.querySelector('.offScreenMenu');

hamMenau.addEventListener('click', () => {
    hamMenau.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});