// Let e Const

{
    var a = 2

    let b = 3
    console.log(b)
}
console.log(a)

// Template String

const produto = 'Ipad'
console.log(`${produto} é caro`)

// Destructing

const [l, e, ...tras] = 'Arlan'
console.log(l,e,tras)

const [x, , y] = [1, 2, 3]
console.log(x,y)

const { idade: i, nome } = { nome: 'Arlan Marreiro', idade: 26 }
console.log(nome, i)
