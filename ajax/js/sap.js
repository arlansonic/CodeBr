function navegarViaAjax(url, selector, push = true){
    if(!url || !selector) return 
    const elemento = document.querySelector(selector)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html            
            if(push){ //Saber o link SPA / Paginas
                history.pushState({selector}, null, url)
            }
        })
    }

//Navegar entre os links dentro da pagina index.html
document.querySelectorAll('[wm-link]').forEach(link => {
    const url = link.attributes['wm-link'].value
    const selectorDestino = link.attributes['wm-destino'].value
    
    link.onclick = e =>{
        e.preventDefault()
        navegarViaAjax(url, selectorDestino)
    }
})

// Tirando o elemento da pilha no estado de navegação

window.onpopstate = e => {
    if(e.state){
        navegarViaAjax(window.location.href, e.state.selector, false)
    }
}