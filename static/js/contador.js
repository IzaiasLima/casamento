const DATA_ALVO = new Date('2026-02-28T13:59:59');

function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = DATA_ALVO - agora;

    const elementoContador = document.getElementById('countdown');
    console.log(elementoContador);


    if (distancia < 0) {
        elementoContador.innerHTML = '<div>O evento já ocorreu!</div>';
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    elementoContador.innerHTML = `Faltam <span>${dias}</span> dias, <span>${horas}</span>h <span>${minutos}</span>m <span>${segundos}</span>`;
}

// Atualiza imediatamente
atualizarContador();

// Atualiza a cada segundo
const intervalo = setInterval(atualizarContador, 1000);
