// Scroll-up Buttom
function showHideTopBtn(scrPos) {
    const topBtn = document.getElementById('top-btn');

    if (scrPos > 0) {
        topBtn.classList.replace('hide', 'show');
    } else {
        topBtn.classList.replace('show', 'hide');
    }
}

function btnPulseActivate(height) {
    const moreBtn = document.getElementById('more');
    const btnPos = moreBtn.getBoundingClientRect().top;
    const risePos = height - btnPos;
    const isRising = risePos < 800 && risePos > 200;

    if (isRising) {
        moreBtn.classList.add('pulse');
    } else {
        moreBtn.classList.remove('pulse');
    }
}

window.addEventListener('scroll', () => {
    const height = window.innerHeight;
    const scrPos = window.scrollY - height;

    showHideTopBtn(scrPos)
    btnPulseActivate(height);
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
    document.body.style.overflow = 'hidden';
}

function dialogClose() {
    const dialog = document.getElementById('dialog');
    dialog.classList.remove('active');
    document.body.style.overflowX = 'clip';
    document.body.style.overflowY = 'visible';
}