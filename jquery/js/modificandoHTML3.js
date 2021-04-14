// $(document).ready(function(){
$(function(){
    const alunos = [
        { nome: 'Ana', nota: 9.1 },
        { nome: 'Bianca', nota: 8.4 },
        { nome: 'Carlos', nota: 7.6 },
        { nome: 'Julia', nota: 9.7 }
    ]

    const linhas = alunos.map(a => {
        const tdNome = $('<td>').html(a.nome)
        const tdNota = $('<td>').html(a.nota)
        return $('<tr>').append(tdNome, tdNota)
    })

    const tabela = $('<table>').append(linhas)
        .css('border', 'solid 0px')
        $('#conteudo').append(tabela)

})