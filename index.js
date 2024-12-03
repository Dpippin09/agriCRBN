 
  

const hamMenu = document.querySelector('.hamMenu');
const offScreenMenu = document.querySelector('.offScreenMenu');
const overlay = document.querySelector('.overlay');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    overlay.classList.remove('active');
});