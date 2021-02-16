/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:

Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

*/

// Resolução 1
console.log('-------Resolução 1')

function ReceberOprimeiroERetornarUltimo(elemento){
    
    const iPrimeiro = 0
    const iDoUltimoElemento = elemento.length -1
    const primeiroElemento = elemento[iPrimeiro]
    const ultimoElemento = elemento[iDoUltimoElemento]

    return [primeiroElemento, ultimoElemento]
}

console.log(ReceberOprimeiroERetornarUltimo([1,20,30]))

console.log('-------Resolução 2')
// Resolução 2

function receberPrimeiroEUltimoElemento2(elementos){
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return[primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento2([100,200,300]))

// Resolução 3

console.log('--------Resolução 3')

function receberPrimeiroEUltimoElemento3([primeiroElemento, ...elementosRestantes]){
    const ultimoElemento = elementosRestantes.pop()

    return [primeiroElemento,ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento3([100,200,300]))