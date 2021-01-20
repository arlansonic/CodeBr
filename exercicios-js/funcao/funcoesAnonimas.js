const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function(x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //Arrow Function

const pessoa = { //Passado função com objeto
    falar(){
        console.log('Arlan Marreiro')
    }
}
pessoa.falar()

imprimirResultado(3, 4, function(x, y){ // Fazendo divisão com função normal
    return x / y 
})

imprimirResultado(10, 20)

// Fazendo divisão com Função Arrow
imprimirResultado(3, 4, (x, y) => x % y)