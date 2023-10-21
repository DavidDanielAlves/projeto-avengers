const btsPersonagem = document.querySelectorAll('.botao-personagem'); 
const personagens = document.querySelectorAll('.container-personagem');

btsPersonagem.forEach((botaoPersonagem, indice) => {
    botaoPersonagem.addEventListener('mouseenter', () => {

        tirarSelecaoDoBotao();

        botaoPersonagem.classList.add('ativo');

        sumirPersonagens();

        personagens[indice].classList.remove('hidden');

        const personagemSelecionado = personagens[indice].id
        alterarBackground(personagemSelecionado);
        
    })
})

function sumirPersonagens() {
    personagens.forEach(personagem => {
        personagem.classList.add('hidden');
    });
}

function tirarSelecaoDoBotao() {
    const botaoSelecionado = document.querySelector('.botao-personagem.ativo');
    botaoSelecionado.classList.remove('ativo');
}

function alterarBackground (personagemSelecionado) {
    document.body.setAttribute('data-novo-background', `background-${personagemSelecionado}`);
}