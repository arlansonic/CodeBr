function ajax(config){
    const xhr = new XMLHttpRequest()
    xhr.open(config.metodo, config.url, true)

    // Requisição para XML
    xhr.onreadystatechange = e => {
        if(xhr.readyState === 4){
            config.sucesso(xhr.responseXML)
        }else if(xhr. status >= 400){
            config.erro({
                codigo: xhr.status,
                texto: xhr.statusText
            })
        }
    }
    // Enviar 
    xhr.send()
}


ajax({
    url: "dados/estados.xml",
    metodo: "get",
    sucesso(resposta){
        console.log(resposta)
        const estados = resposta.getElementsByTagName('estado')
        const itens = Array.from(estados).reduce(
            (html, estado) => html + `<li>${estado.attributes.nome.value}</li>`, ''
        )
        document.body.insertAdjacentHTML('beforeend', `<ul> ${itens} </ul>`)
    },
    erro(e){
        const msg = document.createTextNode(`${e.codigo}: ${e.texto}`)
        document.body.appendChild(msg)
    }
})
