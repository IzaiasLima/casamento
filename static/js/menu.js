const btn = document.querySelector('.bars');
// const nav = document.querySelector('nav');
const links = document.querySelector('.nav-links');
const cover = document.querySelector('.cover');
const history = document.querySelector('.history-text');

function closeMenu() {
    btn.classList.remove('active');
    links.classList.remove('active');
    console.log('Clicou');
}

function openMenu() {
    btn.classList.toggle('active');
    links.classList.toggle('active');
}

btn.addEventListener('click', () => openMenu());
// nav.addEventListener('click', () => closeMenu());
cover.addEventListener('click', () => closeMenu());
history.addEventListener('click', () => closeMenu());

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => closeMenu());
});

