const app = function () {

    const jogoForca = { cur: '', solucao: '', correto: 0, errado: 0, total: 0 };
    const partida = {};
    const palavras = ['cadeado', 'porta', 'janela', 'viola', 'mesa', 'cadeira', 'escudo', 'caneta', 'roupa', 'travesseiro', 'comoda', 'panela', 'caneca', 'guarda roupa', 'porta lapis', 'mala'];

    function init() {

        partida.campo = document.querySelector('.campo');
        partida.ponto = createElements('div', partida.campo, 'Ponto');
        partida.btn = createElements('button', partida.campo, 'Iniciar');
        partida.segredo = createElements('div', partida.campo, 'Palavra Secreta');
        partida.letras = createElements('div', partida.campo, 'Letras');
        partida.ponto.style.display = 'none';
        partida.letras.style.display = 'none';
        partida.segredo.textContent = 'Aperte Iniciar para começar o jogo!';
        partida.btn.addEventListener('click', iniciar)
    }
    function iniciar() {
        partida.btn.style.display = 'none';
        if (palavras.length > 0) {
            palavras.sort(() => {
                return .5 - Math.random();
            })
            jogoForca.total = 0;
            jogoForca.correto = 0;
            jogoForca.errado = 0;
            jogoForca.cur = palavras.shift();
            jogoForca.solucao = jogoForca.cur.split('');
            partida.ponto.style.display = 'block';
            partida.letras.style.display = 'block';
            placar();
            pontuacao();
        }
    }

    function pontuacao() {
        let saida = `${jogoForca.total} Letras Acertou ${jogoForca.correto} Errou ${jogoForca.errado} `;
        partida.ponto.innerHTML = saida;
        if (jogoForca.total == jogoForca.correto) {
            vitoria();
        }
    }

    function vitoria() {
        if (palavras.length > 0) {
            partida.letras.style.display = 'none';
            partida.btn.style.display = 'inline-block';
            partida.btn.textContent = 'Novo Jogo';
        } else {
            partida.letras.innerHTML = 'You solved all the words <br> Fim de Jogo!'
        }
        let saida = `Você ganhou o jogo parabéns! ${jogoForca.total} Letras with ${jogoForca.errado} Errado`;
        partida.ponto.innerHTML = saida;

    }

    function olharLetra(valor) {
        let umaLetra = document.querySelectorAll('.box3');
        let encontrou = 0;
        umaLetra.forEach((el) => {
            if (valor == el.letra.toUpperCase()) {
                el.textContent = el.letra.toUpperCase();
                encontrou++;
            }
        })

        if (encontrou != 0) {
            jogoForca.correto += encontrou;
        } else {
            jogoForca.errado++;
        }
        pontuacao();
    }

    function placar() {

        partida.letras.innerHTML = '';
        partida.segredo.innerHTML = '';
        jogoForca.solucao.forEach((let) => {
            let div = createElements('div', partida.segredo, '_');
            div.classList.add('box3');
            div.letra = let;
            if (let == ' ') {
                div.style.borderColor = 'white';
                div.textContent = '';
            } else {
                jogoForca.total++;
            }
        })

        for (let i = 0; i < 26; i++) {
            let abc = String.fromCharCode(65 + i);
            let div = createElements('div', partida.letras, abc);
            div.style.cursor = 'grab';
            div.classList.add('box');
            let olhar = function (e) {
                olharLetra(abc);
                div.style.backgroundColor = '#ddd';
                div.style.cursor = 'default';
                div.classList.remove('box');
                div.classList.add('box2')
                div.removeEventListener('click', olhar);
            }
            div.addEventListener('click', olhar);
        }
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