// //IN - Retorna o posição de um Array 
// const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10]

// for (let i in notas){
//     console.log(i, notas[i])
// }

// const pessoa = {
//     nome: 'Arlan Marreiro',
//     idade: 26,
//     peso: 66,
//     logadouro:{
//         rua: 'Rua Ebano Oriental',
//         numero: 17
//     }
// }

// for(let atributo in pessoa){
//     console.log(`${atributo} = ${pessoa[atributo]}`)
// }

const nomes = ['Arlan Marreiro', 'Maria Kataine','Apollo Henrique', 'Maria Angelita', 'Arnei Gama', 'Arlison Marreiro']

for (let i in nomes){
    console.log(i, nomes[i])
}

    informacoes = {
        idade: '26',
        rua: 'Ebano Oriental',
        estadocv: 'Solteiro',
        bairro: 'Jorge Teixeira',
        pais: 'Brasil'
        
}
// console.log(informacoes)
let inf = informacoes
for (let atributos in nomes){
    console.log(`${atributos} = ${nomes[atributos]}
    Idade: ${inf.idade} 
    Rua: ${inf.rua} 
    Estado Civil: ${inf.estadocv}
    Bairro: ${inf.bairro}
    Pais: ${inf.pais}    
    ` )
}