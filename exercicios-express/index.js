const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Funcionou meu considerado: Hehueheuheuhehuu')
})


app.listen(3000, () => {
    console.log('Executando serviço')
})