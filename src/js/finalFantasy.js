/*
Objetivo 1 - ao clicar na seta de avançar temos que mostrar
o proximo cartão da lista:

    - passo 1: pegar oelemento HTML da seta avançar
    - passo 2: identificar o clique o usuário na seta avançar
    - passo 3: fazer aparecer o próximo cartao da lista
    - passo 4: buscar o cartão selecionado e escondê-lo

Objetivo 2 - fazer a mesma coisa pra seta retornar
*/

const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")

const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")

}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado")
}



btnAvancar.addEventListener("click", function (){

    if(cartaoAtual >= cartoes.length -1){
        cartaoAtual = - 1
    }

    esconderCartaoSelecionado()
    
    cartaoAtual++
    mostrarCartao(cartaoAtual)
})




btnVoltar.addEventListener("click", function (){

    if(cartaoAtual <= 0){
        cartaoAtual = cartoes.length
    }

    esconderCartaoSelecionado()

    cartaoAtual--
    mostrarCartao(cartaoAtual)
    
})
