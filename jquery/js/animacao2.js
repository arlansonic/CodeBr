function alterarLargura(valor, duracao, callback){
    $('div').animate({width: `+=${valor}`}, duracao, callback)
}

function moverDiagonal(valor, duracao, callback){
    $('div').animate({top: `+=${valor}`, left: `+=${valor}`}
        ,duracao, callback)
}

function girar(valor, duracao, callback){
    $('div').animate({transform: `+=${valor}`}, {
        step: function (valor){
            $(this).css('transform', `rotate(${valor}deg)`)
        },
        duration: duracao
    }, 'linear', callback)
}

alterarLargura(300, 1500, () => {
    alterarLargura(-300, 'slow', () => {
        moverDiagonal(300, 600, () => {
            girar(10000,3300)
        })
    })
})
