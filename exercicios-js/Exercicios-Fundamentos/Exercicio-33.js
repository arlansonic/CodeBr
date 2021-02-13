/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
    let vetorInteiro = [1,2,3]
    let vetorString = ['Arlan Marreiro', 'Apollo', 'Katiane']
    let vetorDouble = [10.1, 10.2, 10.3]

function mostrarVetores(...args){
    resultado = []
    for(let i = 0; i <arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
    // console.log(`Vetores :${resultado}`)
}

console.log(mostrarVetores(vetorInteiro, vetorDouble))
console.log(mostrarVetores(vetorDouble, vetorString))
// mostrarVetores(vetorInteiro, vetorDouble)
// mostrarVetores(vetorDouble, vetorString)
