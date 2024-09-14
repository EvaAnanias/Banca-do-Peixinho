const menuHorizontal = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');
const menuClose = document.querySelector('#menu-close');

function updateMenuState() {
    if (window.innerWidth > 660) {
        menuHorizontal.classList.remove('active');
        menuHorizontal.style.display = 'flex';
        menuIcon.style.display = 'none';
        menuClose.style.display = 'none';
    } else {
        menuHorizontal.style.display = 'none';
        menuIcon.style.display = 'inline';
        menuClose.style.display = 'none';
    }
}

menuIcon.addEventListener('click', () => {
    menuHorizontal.classList.add('active');
    menuHorizontal.style.display = 'flex';
    menuIcon.style.display = 'none';
    menuClose.style.display = 'inline';
});

menuClose.addEventListener('click', () => {
    menuHorizontal.classList.remove('active');
    menuHorizontal.style.display = 'none';
    menuIcon.style.display = 'inline';
    menuClose.style.display = 'none';
});

window.addEventListener('resize', updateMenuState);

window.addEventListener('load', updateMenuState);
