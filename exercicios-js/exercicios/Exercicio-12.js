/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(x){
    if(x == 0){
        return 1
    }else {
        return x * fatorial(x - 1)
    }
       
}

console.log(fatorial(6))