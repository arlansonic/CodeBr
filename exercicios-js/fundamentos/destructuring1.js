//Novo recurso no ES 2015

const pessoa={
    nome: 'Arlan Marreiro',
    idade: 26,
    endereco: {
        logadouro: 'Rua Ebano Oriental',
        numero: 17
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {endereco: {logadouro, numero }} = pessoa
console.log(logadouro,numero)

const {endereco: {logadouro: l, numero: n1}} = pessoa
console.log(l,n1)
