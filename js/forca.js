const app = function () {

    const jogoForca = { cur: '', solucao: '' };
    const partida = {};
    const palavras = ['learn javascript', 'learn html', 'learn css'];

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
            jogoForca.solucao = jogoForca.cur.split('');
            partida.ponto.style.display = 'block';
            partida.letras.style.display = 'block';
            placar();
        }
    }

    function olharLetra(valor) {
        console.log(valor);
        let umaLetra = document.querySelectorAll('.box3');
        umaLetra.forEach((el) => {
            console.log(el.letra);
            if (valor == el.letra) {
                el.textContent = el.letra;
            }
        })
    }

    function placar() {

        partida.letras.innerHTML = '';
        partida.segredo.innerHTML = '';
        jogoForca.solucao.forEach((let) => {
            let div = createElements('div', partida.segredo, '-');
            div.classList.add('box3');
            div.letra = let;
            if (let == '') {
                div.style.borderColor = 'white';
                div.textContent = '';
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
                div.removeEventlisterner('click', olhar);
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