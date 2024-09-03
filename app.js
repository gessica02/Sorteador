function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de>=ate){
        alert('O campo "Do número" deve ser menor que o campo "Até o número". Por favor, verifique!');
        return;
    }
    if(quantidade>(ate-de+1)){
        alert('O número informado no campo "Quantidade" é maior que o intervalo fornecido nos campos "Do número" e "Até o número". Por favor verifique!');
        return;
    }

    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarBotao();
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML= '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarBotao();
}

function gerarNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}