// require para puxar arquivos criados externamentes e usar seus atributos e objetos
const moduloA = require('./moduloA') 
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.BemVindo)
console.log(moduloA.atelogo)

console.log('------- Modulo B -------')
// ModuloB

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())