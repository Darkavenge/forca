const app = function () {

    const jogoForca = { cur: '', solucao: '' };
    const partida = {};
    const palavras = ['javascript', 'html', 'css'];


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
        if (palavras.length > 0) {
            palavras.sort(() => {
                return .5 - Math.random();
            })
            jogoForca.cur = palavras.shift();
            partida.solucao = jogoForca.cur.split('');
            partida.ponto.style.display = 'block';
            partida.letras.style.display = 'block';
            partida.segredo.textContent = jogoForca.cur;
            placar();
        }
    }

    function placar() {

        console.log(jogoForca.solucao);

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