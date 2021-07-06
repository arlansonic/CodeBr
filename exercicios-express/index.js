const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Arlan Marreiro'))


app.get('/api', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente Relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })

    // Mandar em formato de Texto
    req.on('end', function() {
        res.send(corpo)
    })

    // Mandar em formato JSON

    // req.on('end', function() {
    //     res.json(JSON.parse(corpo))
    // })
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente: ${req.params.id} selecionado!`)
})

app.get('/api', (req, res, next) => {
    console.log('Durante.....')
        // res.send('<h1>Funcionou meu considerado:</h1> <h2><b>Hehueheuheuhehuu</b></h2>')

    // res.json({
    //     name: 'Ipad 32GB',
    //     price: 2000.00,
    //     discount: 0.12
    // })

    res.json({
        data: [
            { id: 300, name: 'Arlan Marreiro', idade: 27, position: 1 },
            { id: 500, name: 'Maria Katiane', idade: 29, position: 2 },
            { id: 600, name: 'Apollo Henrique', idade: 7, position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
})


app.use('/api', (req, res) => {
    console.log('Depois......')
})


app.listen(3000, () => {
    console.log('Executando serviço')
})