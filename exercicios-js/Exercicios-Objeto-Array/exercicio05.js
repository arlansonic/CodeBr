/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
 */

function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) {
        return false
    }else{    
        return primeiro >= segundo
    }
}

console.log(maiorOuIgual(5, 1))