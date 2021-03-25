function navegarem5s(e){
    e.preventDefault()
    console.log('Saindo em 5 Segundo')
    setTimeout(() =>{
        const link = e.target
        window.location.href = link.href
    },5000)    
}

// Jogar para pagina do Google fazendo direto no JS

const a = document.querySelector('a')
a.onclick = navegarem5s

// Fazendo com um Atributo personalizado

const a = document.querySelector('[esperar-5-sec]')
a.onclick = navegarem5s