const url ='dados/estados.json'

fetch(url)
    .then(resp => resp.json())
    .then(estados =>{
        const itens = estados.reduce(
            (html, estado) => html + `<li> ${estado.id} - ${estado.nome} - ${estado.sigla}</li>`
        )
        document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul>`)
    })