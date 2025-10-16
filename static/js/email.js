(function () {
    emailjs.init({
        publicKey: "53EtKuGY0c5TKn1ah",
    });
})();

window.onload = function () {
    const frmEmail = document.getElementById('contact-form')

    if (isNotNull(frmEmail)) {
        frmEmail.addEventListener('submit', function (event) {
            event.preventDefault();
            

            const mpLink = document.getElementById('mp_link').value;

            // emailjs.sendForm('service_izaias_com_br', 'template_izaias_com_br', '#contact-form').then(
            emailjs.sendForm('service_casamento', 'template_casamento', '#contact-form').then(
                (response) => {
                    frmEmail.reset();
                    dialogClose();
                    console.log('EMAIL SUCCESS!');

                    // chamada do Mercado Pago
                    if (isNotNull(mpLink)) {
                        window.open(mpLink, '_blank', 'nofollow, noopener, noreferrer');
                    }
                },

                (error) => {
                    dialogClose();
                    const msg = "Desculpe, não foi possível enviar sua mensagem. Tente novamente mais tarde.";
                    showToast(msg, true);
                    console.log('EMAIL SENDER FAILED: ', error);
                },
            );
        });
    }
}

function isNotNull(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

function showToast(msg, err = false) {
    if (msg != null) {
        const toast = document.getElementById('toast');
        const len = msg.length;

        if (err) {
            toast.classList.add('err');
        } else {
            toast.classList.add('ok');
        }

        toast.innerHTML = msg;
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show', 'ok', 'err') }, len * 150);
    }
}