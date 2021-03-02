const porta = 3003 

const express = require('express')
const app = express('app')
const BancoDeDados = require('./bancoDeDados')

app.get('/produtos',(req, res, next)=>{
    res.send(BancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) =>{
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',  (res, req, next)=>{
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })

    res.send(produto) //Retornar JSON
})

app.listen(porta, () =>{
    console.log(`Servidor Executando na porta ${porta}`)
})