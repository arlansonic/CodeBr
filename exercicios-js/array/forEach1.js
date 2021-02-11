const aprovados = ['Arlan', 'Apollo', 'Katiane']

//Criando função para mostrar o indice e nome dos aprovados

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`) 
})
console.log('-- Usando Arrow Funciton')
aprovados.forEach(nome => console.log(nome))


console.log('-- Jogando o forEach do Array para uma constante --')
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

