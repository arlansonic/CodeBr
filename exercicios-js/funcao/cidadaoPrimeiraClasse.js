// Função em JS Frist-Class Object (Citizens)
// Higher-order Function

// Criar de forma literal
function func1() { }

// Armazenas em uma variável 
const func2 = function() { }

// Armazenar em um Array

const array = [function(a, b) { return a + b}, func1, func2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto

const obj = { }
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// Passar função como param

function run(fun){
    fun()
}

run(function(){console.log('Executando')})


// Uma função pode retornar / conter uma outra função

function soma(a ,b){
        return function(c){
        console.log(a + b + c)
        }
}
soma(2, 3)(4)
//Ou posso chamar desse jeito

const cincoMais = soma(2 , 3)
cincoMais(4)

