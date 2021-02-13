/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function menorMaior(vetor){
    let maior 
    let menor
    for(let x = 0; x < vetor.length; x++) {
       if(maior === undefined && menor === undefined){
           maior = vetor[x]
           menor = vetor[x]
       }else{
           if(vetor[x] > maior){
               maior = vetor[x]
           }
           if(vetor[x] < menor){
               menor = vetor[x]
           }
       }
    }
    console.log(`Maior: ${maior} Menor: ${menor}`)

}
vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

menorMaior(vetor)