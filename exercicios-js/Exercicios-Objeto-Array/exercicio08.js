/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

 */

 function multiplicar(n1, n2){
    result = 0
    for(let i = 0; i < n2; i++){
        result += n1
    }
    return result
 }

 console.log(multiplicar(5,2))