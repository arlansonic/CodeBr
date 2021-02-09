const pilotos = ['Arlan', 'Apollo', 'Katiane']
pilotos.pop() // ( .pop) serve para remover o ultimo registro do Array
console.log(pilotos)

pilotos.push('Katiane') //( .push) adiciona na ultima posição do Array
console.log(pilotos)

pilotos.shift()
console.log(pilotos)// ( .shift) serve para remover o primeiro registro do Array

pilotos.unshift('Arnei')// ( .unshift) adiciona no primeiro indice do Array
console.log(pilotos)

// Splice pode adicionar e remover elementos
// Adicionar
pilotos.splice(2,0,'Angelita','Arlison')
console.log(pilotos)

// Remover
pilotos.splice(3,1)
console.log(pilotos)

// Splice

const algunsPilotos1 = pilotos.slice(2) //Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

