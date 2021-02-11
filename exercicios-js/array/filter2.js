// Simulando a criação de um Filter
Array.prototype.filter2 = function(callback){
    const newFilter = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newFilter.push(this[i])
        }
    }
    return newFilter
}
    

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}

]

// Exemplo 1
console.log(produtos.filter2(function(p){
    return p.fragil 
}))

console.log(produtos.filter2(function(c){
    return c.preco > 2000
}))

// Exemplo 2

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))