const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Ler arquivo de forma Sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura Assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) //Convertendo o JSON que vem do arquivo.json para Objeto para poder manipular os mesmos
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Lendo todos o arquivo.js - JSON

const config = require('./arquivo.json') //Lento e já convertendo para Objetos
console.log(config.db) //Pegando Geral de DB    


// Ler o diretorio completo.

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Todo Conteudo da Pasta')
    console.log(arquivos)
})
