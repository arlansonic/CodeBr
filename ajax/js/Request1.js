function ajax(config){
    const xhr = new XMLHttpRequest()
    xhr.open(config.metod, config.url, true)

    xhr.onload = e =>{
        if(xhr.status === 200){
            config.sucesso(xhr.response)
        }else if( xhr.status >= 400){
            config.erro({
                code: xhr.status,
                text: xhr.status.Text
            })
        }
    }

        xhr.send()
}

function createTable(estados){          

            const linhas = estados.map(estado => {
                const tdId = document.createElement('td')
                tdId.innerHTML = estado.id

                const tdNome = document.createElement('td')            
                tdNome.innerHTML = estado.nome

                const tdSigla = document.createElement('td')
                tdSigla.innerHTML = estado.sigla

                const tr = document.createElement('tr')

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSigla)

            return tr
        })

        const tabela = document.createElement('table')
        linhas.forEach(linha => tabela.appendChild(linha))
        document.body.appendChild(tabela)
}

ajax({
    url: "dados/estados.json",
    metod: "get",
    sucesso(resposta){
        const estados = JSON.parse(resposta)
        createTable(estados)       
    },

    erro(e){
        const msg = document.createTextNode(`${e.code}: ${e.text}`)
        document.body.appendChild(msg)
    }
})