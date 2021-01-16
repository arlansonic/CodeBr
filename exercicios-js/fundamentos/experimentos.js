let a = 3

global.b = 123

this.c = 456
this.d = false 
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)

//Node
console.log(module.exports.c)
console.log(module.exports === this)
// Mostrando todos os blocos digitados acima
console.log(module.exports)

// Criando uma variavel maluca sem var e let no Global

abc = 3 // Não fazer esse tipo de declaração no Global
//Sempre trabalhar com: const ou let ou também trabalhar com objetos 
console.log(global.abc)

// module.exports =  c: 456, d: false, e: 'Teste' }

