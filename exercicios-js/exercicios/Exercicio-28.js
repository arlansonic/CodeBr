/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function impares(vetorNumero){
    let qtdPares = 0
    let qtdImpares = 0 

    for(let i = 0; i < vetorNumero.length; i++){ // (.length) especifica o numerio de elementor em um Array
        if(vetorNumero[i] %2 == 0){
            qtdPares++
        }else{
            qtdImpares++
        }
    }
    console.log(`${qtdPares} Quantidade de Pares ${qtdImpares} Quantidade de Impares `)    
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
impares(vetor)