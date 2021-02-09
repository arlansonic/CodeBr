console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Arlan', 'Apollo','Katiane')
console.log(aprovados)

aprovados = ['Arlan', 'Apollo','Katiane']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Arlison'
aprovados.push('Arnei') // .push - adicionar um indice no Array
console.log(aprovados.length) //Para ver o tamanho do Array

aprovados[9] = 'Angelita'
console.log(aprovados)
console.log(aprovados[8] === undefined) 

// Usando o ( .sort) organiza o Array 
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

// Deletando um indice no Array

delete aprovados[4]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

// Usando o ( .splice) consigo adicionar e deletar um indice no Array

aprovados = ['Arlan', 'Apollo', 'Elemento1', 'Elemento2']
aprovados.splice(1, 1, 'Arnei', 'Katiane') //Para adicionar colocar ( ' ' ) para deletar colocar o indice numero 
console.log(aprovados)