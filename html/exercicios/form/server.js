const express = require('express')
const app = express()
const badyParser = require('body-parser')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    resp.send('<h3>Incluido com Sucesso!!</h3>')
})

app.post('/usuarios/3:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h3>Alterado com Sucesso!!</h3>')
})

app.listen(3003)