/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function numNegativos(vetor){
    let qtdNegativos = 0
   
    for(let x = 0; x < vetor.length; x++) {
       if(vetor[x] < 0 ){
            qtdNegativos++
       }
    }
    console.log(`Quantidade de numeros negativos ${qtdNegativos}`)
}
vetor = [ 7, 8, 9, -10, 11, -12, -16, -17, 18, 19, 20, 21]

numNegativos(vetor)
