(function () {
    emailjs.init({
        publicKey: "53EtKuGY0c5TKn1ah",
    });
})();

function efetuarPagamento(event) {
    event.preventDefault();

    // window.onload = function () {
    const frmEmail = document.getElementById('contact-form')
    const name = document.getElementById('name').value;

    if (isNotNull(frmEmail) && isNotBlank(name)) {
        // frmEmail.addEventListener('submit', function (event) {
        //     event.preventDefault();

        const mpLink = document.getElementById('mp_link').value;

        // emailjs.sendForm('service_izaias_com_br', 'template_izaias_com_br', '#contact-form').then(
        emailjs.sendForm('service_casamento', 'template_casamento', '#contact-form').then(
            (resp) => {
                frmEmail.reset();
                dialogClose();
                console.log('EMAIL SUCCESS!');

                // chamada do Mercado Pago
                if (isNotNull(mpLink)) {
                    window.location.href = mpLink;
                }
            },

            (error) => {
                dialogClose();
                showToast("Desculpe, não foi possível enviar sua mensagem. Tente novamente mais tarde.", true);
                console.log('EMAIL SENDER FAILED: ', error);
            },
        );
        // });
    } else {
        showToast('Por favor, informe pelo menos o seu nome.', true);
    }
}

function isNotNull(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

function isNotBlank(str) {
    return (str != null && str.trim().length > 0);
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