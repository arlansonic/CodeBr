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
const resultado = carrinho.map(transformarParaObjeto).map(retornaPreco)
console.log(resultado)