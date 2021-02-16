/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]

*/

console.log('-----Resolução 1')

function objetoParaArray(objeto){
    const resultado = []

    for(let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }

    return resultado
}
console.log(objetoParaArray({
    nome: "Arlan Marreiro",
    profissao: "Analista de Sistemas Junior",
    idade: 26
}))

console.log('-----Resolução 1')

function objetoParaArray2(objeto){
    const chaves = Object.keys(objeto)
    const result = chaves.map(chave => [chave, objeto[chave]])

    return result
}

console.log(objetoParaArray2({
    nome: "Arlan Marreiro",
    profissao: "Analista de Sistemas Junior",
    idade: 26
}))

