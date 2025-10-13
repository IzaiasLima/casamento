// Scroll-up Buttom
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