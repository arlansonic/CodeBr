const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()
const letraMaiuscula = nomes => nomes.toUpperCase()

new Promise(function(resolve){
    resolve(['Arlan Marreiro', 'Apollo Henrique', 'Maria Katiane'])
})

.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMaiuscula)
.then(letraMinuscula)
.then(console.log)