/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor){
    console.log('Resultado da Divisão: '+Math.floor(dividendo/divisor))

    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(10,3)