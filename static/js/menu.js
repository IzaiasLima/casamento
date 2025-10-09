
// menu - exibir/ocultar
const menu = document.getElementById('menu');
const content = document.getElementById('content');

function showMenu() {
    menu.classList.add('show');
    menu.classList.remove('close');
}

function closeMenu() {
    menu.classList.remove('show');
    menu.classList.add('close');
}

content.addEventListener('click', () => {
    closeMenu();
});

// botao scroll-up
function showHideScrollUpBtn(scrPos) {
    const topBtn = document.getElementById('top-btn');

    if (scrPos>0){
        topBtn.classList.replace('hide', 'show');
    } else {
        topBtn.classList.replace('show', 'hide');
    }
}

window.addEventListener('scroll', () => {
    const scrPos = window.scrollY - window.innerHeight;
    showHideScrollUpBtn(scrPos)
})