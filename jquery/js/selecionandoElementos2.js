const comBorda = { 'border': 'solid 8px orange' }
const semBorda = { 'border': 'none' }

$('a[href="#link3"]').parent().css(comBorda).css(semBorda)
$('li:last').prev().css(comBorda).css(semBorda)

$('li:last').prev().css(comBorda).css(semBorda) //Voltar um

$('a[href="#link3"]').parent().next().css(comBorda).css(semBorda) //Avançar 1

$('a[href="#link1"]') .parents().css(comBorda).css(semBorda) //Pegar todos 

$('a[href="#link1"]').parentsUntil($('body')).css(comBorda).css(semBorda) // Selecionando o Body

$('main').children().css(comBorda).css(semBorda) //Bordas nos paragrafos

$('body').find('a').css(comBorda).css(semBorda)

// Acessando a DOM diretamente da API PADRÃO

const elementoDOM = document.getElementsByClassName('menu')
$(elementoDOM).css(comBorda)

$('main').children().each((i, e) => $(e).css(comBorda)).css(semBorda)

$('li').each((i, e) => {
    $(e).css(comBorda).css(semBorda)
})

