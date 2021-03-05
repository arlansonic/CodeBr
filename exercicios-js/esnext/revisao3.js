// ES8: Object.values / Object.entries

const obj = {
    a:1,
    b:2,
    c: 3
}

console.log(Object.values(obj))
console.log(Object.entries(obj))


// Melhorias na Notação Literal

const nome = 'Arlan Marreiro'
const pessoa = {
    nome,
    ola(){
        return 'Oi '
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class SeguroBradesco{}

class Yan extends SeguroBradesco{
    falar (){
        return 'Fala meu patrão você está precisando de um seguro papoqueiro ai?'
    }
}

console.log(new Yan().falar())