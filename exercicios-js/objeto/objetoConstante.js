//  Pessoa -> 123 -> {...}

const pessoa = {nome: 'Arlan'}
pessoa.nome = 'Apollo'
console.log(pessoa)

// pessoa -> 456 {...}
// pessoa = {`nome: 'Ana}

Object.freeze(pessoa) // 'Object.freeze'  Congela a const para não ser mais alterado

pessoa.nome = 'Maria Katiane'
console.log(pessoa.nome)
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Para criar a constante e já deixar ela Congelada

const pessoaConstante = Object.freeze({nome: 'Arlan Marreiro'})
console.log(pessoa.pessoaConstante)