function mostrarPosicaoDoMouse(e){
    $('#posicao').html(`x: ${e.clientX} y: ${e.clientY}`)
}

$('body').on('mousemove', mostrarPosicaoDoMouse)

// Parar o Movimento do Mouse quando passar em cima do ID: #Posicao
$('#posicao').mouseover(e => {
    $('body').off('mousemove', mostrarPosicaoDoMouse)
})

// Para quando o cursor para em #Posicao, mas se inicia quando sai dela
$('#posicao').mouseleave(e => {
    $('body').on('mousemove', mostrarPosicaoDoMouse)    
})

// Quantidades de Cliques na tela
let cliques = 0 
$('body').click(e => {
    $('#cliques').html(`Cliques : ${++cliques}`)
})

const backgroundOriginal = $('body').css('background-color')

// Mudar de cor fundo
$('input').keyup(function (e) {
    const valor = $(this).val()
        if(valor.match(/#[\da-fA-F]{3,6}/)){
            $('body').css('background-color', valor)
        }else{
            $('body').css('background-color', backgroundOriginal)
        }
})
