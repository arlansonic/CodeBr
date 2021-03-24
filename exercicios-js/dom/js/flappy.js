function newElement(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false){
    this.elemento = newElement('div', 'barreira')

    const borda = newElement('div', 'borda')
    const corpo = newElement('div','corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x){
    this.elemento = newElement('div', 'par-de-barreira')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura((alturaInferior))
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)   
}

// Mostrar a barreira
// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)


function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco *2),
        new ParDeBarreiras(altura, abertura, largura + espaco *3)
    ]

    // deslocamento da Barreira
    const deslocamento = 3

    this.animar = ( ) => {
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento)

            // Quando o elemento sair da tela da area do jogo

            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
            && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

const barreiras = new Barreiras(700, 1200, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

// Chamando as pareiras com SetInterval
setInterval(() => {
    barreiras.animar()
}, 20)