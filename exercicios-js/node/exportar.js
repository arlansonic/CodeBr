console.log(module.exports === this)
console.log(module.exports === exports)

// 3 Formas de setar valores para serem exportados
this.a = 1
exports.b = 2
module.exports.c = 3
//..

exports = null
console.log(module.exports)

// Não vai pegar porque não da pra atribuir
exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}