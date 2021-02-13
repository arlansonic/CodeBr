/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return 'Isósceles'
    }else{
        return 'Escaleno'
    }
}


console.log('Resultado 1: '+triangulo(2,2,2))
console.log('Resultado 2: '+triangulo(2,2,3))
console.log('Resultado 3: '+triangulo(2,3,4))