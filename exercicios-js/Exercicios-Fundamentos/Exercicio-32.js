/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaVetor(vetor){
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    console.log(`Resultado da média: ${soma/vetor.length}`)
}

vetor = [2,2]

mediaVetor(vetor)
