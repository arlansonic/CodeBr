const { captureRejectionSymbol } = require('events')

require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'New teste Global'

console.log(MinhaApp.nome)