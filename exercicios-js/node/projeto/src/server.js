const porta = 3003 

const express = require('express')
const app = express('app')

app.get('/produtos',(req, res, next)=>{
    res.send({nome: 'Notebook', preco: 2000}) // Converter para formato JSON
})

app.listen(porta, () =>{
    console.log(`Servidor Executando na porta ${porta}`)
})