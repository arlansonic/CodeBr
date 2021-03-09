const fs = require('fs')
const path = require('path')



function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, nomes){
            resolve(nomes.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)

    .then(nomes => nomes.split('\n'))
    .then(linhas => linhas.join(','))
    .then(nomes => `Os nomes são: ${nomes}`)
    .then(console.log)
