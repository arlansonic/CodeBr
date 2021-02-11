const alunos = [
    {aluno: 'Arlan Marreiro', nota: 8.5},
    {alunio: 'Apollo Henrique', nota: 10},
    {aluno: 'Katiane Lopes', nota: 8.0}
]

// Modo Imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log('Soma no modo Imperativo: '+total1 / alunos.length)

// Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log('Soma no modo Declarativo: '+total2 / alunos.length)
