// Transformar um Array em um numero ou String sempre passando para a proxima interação

const alunos = [
{nome: 'Arlan Marreiro', nota: 7.5, bolsista: true},
{nome: 'Katiane', nota: 8.0, bolsista: true},
{nome: 'Apollo', nota: 9.0, bolsista: false},
{nome: 'Arlison', nota: 8.7, bolsista: true}
]

// Array com a nota dos Alunos
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0) //Caso eu queria adicionar um valor inicial

console.log(resultado)