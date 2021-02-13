/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */

//  Resolução 1 - Tradicional
 function returnString(n){
    let string = []

    for(let i=0; i< n; i++){
      string += '+'
    }
    return string
 }
 console.log(returnString(5))


//  Resolução 2

function retornaMais(qtde){
    return Array(qtde).fill('+').join('')
}
console.log(retornaMais(5))

// Resolução 3

function retornaMais2(qtde){
    return "+".repeat(qtde)
}

console.log(retornaMais2(2))