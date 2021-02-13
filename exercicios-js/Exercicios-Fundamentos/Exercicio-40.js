/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/

function mostraNotas(notas){
    let = conceitos = []
  
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            conceitos.push(`D: sua nota é: ${notas[i]}`)
        } else if(notas[i] >= 5,0 && notas[i] <= 6.9){
            conceitos.push(`C: sua nota é: ${notas[i]}`)
        }else if(notas[i] >= 7 && notas[i] <= 8.9){
            conceitos.push(`B: sua nota é: ${notas[i]}`)
        }else if(notas[i] >= 9 && notas[i] <= 10) {
            conceitos.push(`A: sua nota é: ${notas[i]}`)
        }else{
            conceitos.push('Notas não encontradas')
        }
    }
    return conceitos
}

let notas = [10, 13, 10,  7, 5, 4, 0]
let conceitosVetor = mostraNotas(notas)

console.log(conceitosVetor)