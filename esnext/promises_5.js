const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        
        try{

        if(Math.random() < chanceErro){
            reject('Ocorreu um Erro')
        }else{
            resolve(valor)
        }

    }catch(e){
            reject(e)
        }
    })

}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Inesperado: ${err}`)
    )
    .then(v => console.log(`Quase fim: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))