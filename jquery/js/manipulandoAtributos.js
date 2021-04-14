// 

function Relogio(elemento){
    const horaCerta = $('<p>').html('0')
    const botaoMenos = $('<button>').html('-')
    const botaoMais = $('<button>').html('+')

    const $elemento = $(elemento)
    $elemento.append(horaCerta, botaoMenos, botaoMais)

    // Onde sera feito a contagem do Relógio
    const getIntervaloAtual = 
        () => parseInt($elemento.attr('wm-relogio'))

    let temporizador = null

    // Iniciar contagem do Relógio
    const iniciar = () => {
        if(temporizador) clearInterval(temporizador)
        temporizador = setInterval(() => {
            horaCerta.html(new Date().toLocaleString('pt-BR'))            
        }, getIntervaloAtual())
    }
    
    const alterarIntervalo = delta  => {
        const novo = Math.max(getIntervaloAtual() + delta, 1000)
        $elemento.attr('wm-relogio', novo)
        iniciar()
    }

    botaoMenos.click(e => alterarIntervalo(1000))
    botaoMais.click(e => alterarIntervalo(-1000))
    iniciar()
    
}

$('[wm-relogio]').each((i, e) => new Relogio(e))