// Exemplo 1 Arrow sem Corpo
const resultado = nota => nota >= 7  ? 'Aprovado' : 'Reprovado' //Ternario 3 operações 1 expressão e 2 operadores logicos - Precisa ter a ' ? ' 
console.log('Exemplo 1 Arrow sem corpo')
console.log(resultado(7.1))
console.log(resultado(6.7))

// Exemplo 2 Arrow + Corpo 
const resutlado = nota =>{
    return nota >= 7  ? 'Aprovado' : 'Reprovado'
}
console.log('')
console.log('Exemplo 2 => Arrow + Corpo')
console.log(resultado(7))
console.log(resultado(6))