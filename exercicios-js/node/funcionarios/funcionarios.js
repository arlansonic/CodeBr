// axios Client HTTP: Requisições para obter informações em algum lugar remoto, ex: servidor
// get() obtem uma informação no servidor

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' 
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})