const url = 'dados/estados.json'
axios(url).then(resp => {

    const itens = resp.data.reduce(
        (html, estado ) => html + `<li> ${estado.id} - ${estado.nome} - ${estado.sigla}</li>`,''     
    )

    document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul>`)
})