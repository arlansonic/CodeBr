$(function(){
    const alunos = [
        {nome: 'Arlan Marreiro', nota: 10},
        {nome: 'Apollo Henrique', nota: 10},
        {nome: 'Maria Katiane', nota: 10},
        {nome: 'Hero', nota: 10},
        {nome: 'Maria Angelita', nota:10}
    ]

    const linhas = alunos.map(a => {
        const tdNome = $('<td>').html(a.nome)
        const tdNota = $('<td>').html(a.nota)
        return $('<tr>').append(tdNome, tdNota)
    })

    const table = $('<table>').append(linhas)
        .css('border', 'solid 0px')
        $('.conteudo').append(table)
})