const pessoa = {
    nome: 'Arlan Marreiro',
    idade: 26,
    peso: 65
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{ //Destructing
    console.log(`${[chave]}, ${[valor]}`)
})

//Adicionar mais propriedades em um objeto

Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true, //Deixa visivel Ou não 
    writable: false,
    value: '16/06/1994'
})
console.log(pessoa)

// Object.assign (ECMAScript 2015) Concatenar mais de 1 objeto

const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3, a: 4
}

const obj = Object.assign(dest, o1, o2
    )
console.log(obj)

//Congelar - object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)

