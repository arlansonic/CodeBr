// Object.preventExtensions - Não deixa o objeto ser extenndido, pode excluir mas não adicionar
const produto = Object.preventExtensions({
    nome: 'Açucar',
    preco: 2.50,
    tag: 'Promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Feijão'
produto.descricao = 'Feijão Carioquinha'
delete produto.tag
console.log(produto)

// Object.seal - Selar - Não consegue adicionar, nem exluir, Mas consegue alterar os atribuitos existentes

const pessoa = {
    nome: 'Arlan',
    idade: 26
}

Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Marreiro'
delete pessoa.nome
pessoa.idade = 27

console.log(pessoa)

// Freeze - Congela tudo

