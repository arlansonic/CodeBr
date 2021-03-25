// Arrow Function

const soma = (a , b) => a + b
console.log(soma(2,2))

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = () => console.log(this === module.exports)
const lexico3 = lexico1.bind({})

lexico1()
lexico2()
lexico3()

// Parametros default

function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

// Operador Rest

function total(...numeros){
    let total = 0 
    numeros.forEach(n => total +=n)
        return total
}

console.log(total(1, 2, 3, 4, 6))

function total2(...telefones){
    let total2 = 0 
    telefones.forEach(n => total2 = {telefones})
    return total2
}

console.log(total2(92992668241, 92992646987, 92991667793))


