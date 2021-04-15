function exibirDadosEvento(e){
    $('#resultado').empty()
    const div1 = $('<div>')
    const div2 = $('<div>')

    $('#resultado').append(div1, div2)
    div1.append(`target : ${e.target.id}`)

    const rt = e.relatedTarget ? e.relatedTarget.tagName : null
    div1.append(`<br>relatedTarget: ${rt}`)

    div1.append(`<br>type: ${e.type}`)
    div1.append(`<br>wich: ${e.which}`)
    div1.append(`<br>metaKey: ${e.metaKey}`)
    
    div2.append(`pageX: ${e.pageX}`)
    div2.append(`<br>pageY: ${e.pageY}`)
    div2.append(`<br>clientX: ${e.clientX}`)
    div2.append(`<br>clienteY: ${e.clientY}`)

    const obs = e.data ? e.data.obs : null
    div2.append(`<br>obs: ${e.obs}`)
}

$('#div1, #div2').on('mouseenter mouseleave',
    {obs: 'Funciona!'}, exibirDadosEvento)
$('input').keyup(exibirDadosEvento)