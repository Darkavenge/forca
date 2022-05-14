const app = function () {

    const jogoForca = {};
    const partida = {};


    function init() {

        partida.campo = document.querySelector('.campo');
        partida.ponto = createElements('div', partida.campo, 'Pontos');
        partida.btn = createElements('button', partida.campo, 'Iniciar');
        partida.segredo = createElements('div', partida.campo, 'Segredo');
        partida.letras = createElements('div', partida.campo, 'Letras');

        partida.ponto.style.display = 'none';
        partida.letras.style.display = 'none';
        partida.segredo.textContent = 'Aperte Iniciar para começar o jogo!';
        console.log(partida);
        partida.btn.addEventListener('click', iniciar)
    }

    function iniciar() {
        partida.btn.style.display = 'none';

    }

    function createElements(valor, uva, saida) {
        let tempo = document.createElement(valor);
        uva.append(tempo);
        tempo.textContent = saida;
        return tempo;
    }

    return {
        init: init
    }

}(); 