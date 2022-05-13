const app = function () {

    const jogoForca = {};
    const domEle = {};


    function init() {
        domEle.campo = document.querySelector('.campo');
        domEle.pontos = document.createElement('div', domEle.campo, 'pontos');
        domEle.segredo = document.createElement('div', domEle.campo, 'segredo');
        domEle.letras = document.createElement('div', domEle.campo, 'letras');

        console.log(domEle);
    }

    function createElement(valor, parentEle, saida) {
        let tempo = document.createElement(valor);
        parentEle.append(tempo);
        tempo.textContent = saida;
        return tempo;
    }
    return {
        init: init
    }
}(); 