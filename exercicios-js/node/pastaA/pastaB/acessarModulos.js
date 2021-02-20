const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Importando arquivo da PastaC - Index.js
const c = require('./pastaC')
console.log(c.ola2)

// Criando uma porta 8080:  HTTP

const http = require('http')
http.createServer((req, res) => {
    res.write('Arlan Marreiro')
    
    
    res.end() 
}).listen(8080)