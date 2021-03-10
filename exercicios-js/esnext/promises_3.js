function mostarNumerosEntre(min, max){
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

mostarNumerosEntre(1, 60)
    .then(numX10 => `O Número gerado foi ${numX10}`)
    .then(console.log)

    
