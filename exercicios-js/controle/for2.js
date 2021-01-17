//IN - Retorna o posição de um Array 
const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Arlan Marreiro',
    idade: 26,
    peso: 66,
    logadouro:{
        rua: 'Rua Ebano Oriental',
        numero: 17
    }
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

