// Simulando a criação da função ( .map2)
Array.prototype.map2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um Array com os preços 

// Transformando um JSON para Objetos
const transformarParaObjeto = json => JSON.parse(json)
const retornaPreco = produto => produto.preco

//Pegar os preços
const resultado = carrinho.map2(transformarParaObjeto).map2(retornaPreco)
console.log(resultado)