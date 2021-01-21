function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log('Preço: '+getPreco())
console.log('Valo do Produto: '+produto.getPreco())
console.log('------------------------------------------')

// Call e Apply
const carro = {preco: 6000, desc: 0.20}

console.log('Exemplo com Call: ' +getPreco.call(carro))
console.log('Exemplo com Apply: ' +getPreco.apply(carro))

console.log('------------------------------------------')
console.log('Call e Apply')


console.log(getPreco.call(carro, 0.17, '$')) // Puxando direto do Objeto
console.log(getPreco.apply(carro,[0.17,'$'])) // Apply puxa com o Array ' [] '

