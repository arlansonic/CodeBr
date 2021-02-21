// Praticando Map com nomes

const nomes = ['Arlan Marreiro', 'Maria Katiane', 'Apollo Henrique']

// (.map) É praticamente um for com propópsito

let resultnames = nomes.map(function(e, i){
    return e != nomes 
})
console.log(resultnames)

// Criando com Arrow Function

const resultnomes2 = e => e = nomes > nomes 

resultnames = nomes.map(resultnomes2)
console.log(resultnames)
