function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja bem Vindo ${nome}`)
        next()
    }
}

module.exports = saudacao