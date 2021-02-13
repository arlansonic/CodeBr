/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
 */

 //  Resolução 1
 function repetir(valor, qtde){
     let result = []
    for(let i= 0; i < qtde; i++){
        result.push(valor)
        
    }
    return result
 }
 console.log(repetir('Arlan Marreiro',5))

//  Resolução 2
function repetir2(valor, qtde){
    return Array(qtde).fill(valor)
}

console.log(repetir2('Arlan Marreiro',2))