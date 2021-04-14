const fonte = $('#div1').css('font-family')
$('#resultado').append(`Fonte é ${fonte}`)

$('#div1').css('font-size','3em')
$('#div1').css({'font-size': '3.5em', 'color': 'black'})
$('#div1').css('font-size', function(){
    return `${2 *2 }em`
})

$('#div2').addClass('destaque')

const temClasse = $('#div2').hasClass('destaque')
$('#resultado').append(`<br> Tem Classe ? ${temClasse}`)

$('#div2').removeClass('destaque')
$('#div2').toggleClass('destaque') //Adiciona ou Remove
$('#div2').toggleClass('destaque')