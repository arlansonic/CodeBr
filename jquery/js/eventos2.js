const alternarDestaque = () => $('#div1').toggleClass('destaque')
// $('#div1').on('mouseenter mouseleave', alternarDestaque)
$('#div1').hover(alternarDestaque, alternarDestaque)//e => {})

// Evento ao pessoas o cursor do Mouse mostra o Alert
$('#div1').one('mouseenter', e => alert('Teste'))

// Efeito ao clicar ele some depois volta
$('#div1').dblclick(e => $('#div1').fadeOut(1000).fadeIn(1000))

// Deixar fixo o evento centralizado na Pagina
$(window).resize(function (e){
    const l = $(window).width()
    const a = $(windows).heigth()

    $('#resultado1').html(`Largura :${l} e Altura: ${a}`)
})

// Selecionar os textos no #Resultado2
$(':input').select(e => {
    const inicio = e.target.selectiondEnd
    const fim = e.target.selectiondEnd
    $('#resultado2').html(e.target.value).substring(inicio, fim)
})

