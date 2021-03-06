function falarDepoisDe(segundos, frases){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frases)
        },segundos * 1000)
    })
}

falarDepoisDe(5, 'Teste Falando depois que passar os 5 segundos do setTimeout()')
.then(frases => frases.concat(' ? ! ?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log('Falha não iniciado'))