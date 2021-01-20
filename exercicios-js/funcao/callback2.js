console.log('Nota Menor que 7')
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// Nota Maior que 7
//Callback com Função Arrow

const notasMenorque7 = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorque7)
console.log(notasBaixas3)
console.log('------------------')
console.log('Nota Maior que 7')
//Sem Callback > que  7
const notas1Maiorque7 = []

for (let x in notas){
    if(notas[x] > 7){
        notas1Maiorque7.push(notas[x])
    }    
}
console.log(notas1Maiorque7)

// Com callback Notas Maior que 7

const notas2Maiorque7 = notas.filter(function(notas){
    return notas > 7
})

console.log(notas2Maiorque7)

//Contiuando exemplo de Callback com Arrow Notas maior que 7

const notasAltas = notas => notas > 7
const notas3Maiorque7 = notas.filter(notasAltas)
console.log(notas3Maiorque7)
