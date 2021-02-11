// Transformar um Array em um numero ou String sempre passando para a proxima interação

const alunos = [
    {nome: 'Arlan Marreiro', nota: 7.5, bolsista: true},
    {nome: 'Katiane', nota: 8.0, bolsista: true},
    {nome: 'Apollo', nota: 9.0, bolsista: false},
    {nome: 'Arlison', nota: 8.7, bolsista: true}
    ]

    // Pratica 1: Todos os Alunos são bolsistas ?

    const todosBolsistas = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

    // Pratica 2: Algum aluno é bolsita ?
    const algumBolsista = (resultado, bolsista) => resultado || bolsista
    console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

    // Pratica 3: Retornar os nomes dos alunos

    const nomes = (resultado, nome) => resultado || nome
    console.log(alunos.map(a => a.nome))