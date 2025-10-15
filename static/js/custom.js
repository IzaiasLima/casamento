// Scroll-up Buttom
function showHideScrollUpBtn(scrPos) {
    const topBtn = document.getElementById('top-btn');

    if (scrPos > 0) {
        topBtn.classList.replace('hide', 'show');
    } else {
        topBtn.classList.replace('show', 'hide');
    }
}

window.addEventListener('scroll', () => {
    const scrPos = window.scrollY - window.innerHeight;
    showHideScrollUpBtn(scrPos)
})


// Dialog
function dialogShow(item_name, mp_link) {
    const dialog = document.getElementById('dialog');
    const item = document.getElementById('item');
    const giftName = document.getElementById('gift_name');
    const mpLink = document.getElementById('mp_link');

    item.innerText = item_name;
    giftName.value = item_name;
    mpLink.value = mp_link;
    dialog.classList.add('active');
    // dialog.show();
}

function dialogClose() {
    const dialog = document.getElementById('dialog');
    dialog.classList.remove('active');
    // dialog.close();
}