// Set é uma estrutura de conjunto não indexada e não aceita repetição

const { template, set } = require("lodash")

const times = new Set()
times.add('Flamengo')
times.add('Palmeiras').add('São Paulo').add('Corinthians')
times.add('Vasco')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

// Outra forma de Criar um SET

const nomes = ['Arlan Marreiro', 'Maria Katiane', 'Apollo', 'Apollo']
const nomesSet = new Set(nomes)
console.log(nomesSet) //Vai retornar o Array mas sem os nomes repetidos, pois não funciona repetição